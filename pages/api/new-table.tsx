import { MongoClient } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"

async function handler(req :NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        const data = req.body

        const client = await MongoClient.connect('mongodb+srv://JUNGJUNSEO:uDGVNawMEbycsqyt@cluster0.qz2bq.mongodb.net/tables?retryWrites=true&w=majority');
        const db = client.db();

        const tableCollection = db.collection('tables')

        const result = await tableCollection.insertOne(data)

        console.log(result)

        client.close()

        res.status(201).json({ message : 'table created!'})
    
    }
}

export default handler