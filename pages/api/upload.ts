import dbConnect from "@/lib/dbConnect"
import User from "@/lib/models/user"
import Post from "@/lib/models/post"
import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from "@/lib/withSession";


const upload = multer({
  storage: multer.diskStorage({
    destination: '.postImages/',
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`);
    },
  }),
});

function uploadFields() {
  // 클로저 함수를 반환 함.
  return upload.fields([{ name: 'files' }, { name: 'post_image', maxCount: 1 }]);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
  try {

    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      return res.status(405).json({ message: 'Method Not Allowed' })
    }

    const uploadHandler = uploadFields();

    uploadHandler(req as any, res as any, async(err) => {
  
      if (err) {
        
        return res.status(500).send(err.message);
      }

      const postImagePath = req.files.post_image[0].path
      const filesPaths = req.files.files.map(file => file.path)
      const {title, owner_pick, reason,  text, texts} = req.body
      const hashtags = texts[0].split(',').slice(1, )
      const {id} = req.session.user

      await dbConnect()
      const user = await User.findOne({ id });
      const newPost = await Post.create({
          title,
          owner_pick,
          reason,
          post_image: postImagePath,
          files: filesPaths,
          text,
          texts,
          hashtags,
          owner: user._id
      });

      user.posts.push(newPost._id);
      await user.save();
      
      return res.status(200).json({message: "this is the image"});
    });
  

  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
  
}


export default withSessionRoute(handler);