import { MongoClient } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"

async function handler(req :NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        const data = req.body
        process.env.DB_URL
        const client = await MongoClient.connect(process.env.DB_URL);
        const db = client.db();

        const tableCollection = db.collection('tables')

        const result = await tableCollection.insertOne(data)

        console.log(result)

        client.close()

        res.status(201).json({ message : 'table created!'})
    
    }
}

export default handler