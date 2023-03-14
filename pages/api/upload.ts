import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File } from 'formidable';
import fs from 'fs';
import path from 'path';

import { withSessionRoute } from '@/lib/withSession';
import dbConnect from '@/lib/dbConnect';
import User from '@/lib/models/user';
import Post from '@/lib/models/post';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const form = formidable({ multiples: true });
    const [fields, files] = await new Promise<[formidable.Fields, formidable.Files]>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve([fields, files]);
        }
      });
    });

    const postImagePath = files.post_image as File;
    const filesPaths = files.files as File[];
    const { title, owner_pick, reason, texts } = fields;
    const hashtags = texts[0].split(',').slice(1);
    const { id } = req.session.user;

    await dbConnect();
    const user = await User.findOne({ username: id });

    const newPost = await Post.create({
      title,
      owner_pick,
      reason,
      post_image: postImagePath.originalFilename,
      files: filesPaths.map(file => file.originalFilename),
      texts: Object.values(texts),
      hashtags,
      owner: user._id,
    });

    // Move post image to public/images
    const imageDir = path.join(process.cwd(), 'public', 'images');
    const imageExt = path.extname(postImagePath.originalFilename);
    const newImageName = `${newPost._id}${imageExt}`;
    const newImagePath = path.join(imageDir, newImageName);
    fs.renameSync(postImagePath.filepath, newImagePath);

    // Move files to public/images
    const newFileNames = await Promise.all(
      filesPaths.map(async (file, index) => {
        const fileDir = path.join(process.cwd(), 'public', 'images');
        const fileExt = path.extname(file.originalFilename);
        const newFileName = `${newPost._id}-${index}${fileExt}`;
        const newFilePath = path.join(fileDir, newFileName);
        await fs.promises.rename(file.filepath, newFilePath);
        return newFileName;
      })
    );

    newPost.post_image = newImageName;
    newPost.files = newFileNames;
    await newPost.save();

    user.posts.push(newPost._id);
    await user.save();

    return res.status(200).json({ message: 'Post created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred' });
  }
};

export default withSessionRoute(handler);