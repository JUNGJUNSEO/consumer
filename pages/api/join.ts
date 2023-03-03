import dbConnect from "@/lib/dbConnect"
import User from "@/lib/models/user"

import { NextApiRequest, NextApiResponse } from "next"


async function handler(req :NextApiRequest, res: NextApiResponse) {
 
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' })
          }
    
        const {name, username, email, password} = req.body

        await dbConnect()

        const userExists = await User.exists({ $or: [{ username}, { email }]})
        
        if (userExists) {
            return res.status(400).json({ message: "해당 아이디와 이메일은 이미 존재합니다."})
        }
        
        await User.create({
            name,
            username,
            email,
            password,
        });

        return res.status(200).json({ message: 'Join Success' });
         
    } catch (error) {
        console.log('why')
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

export default handler