import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // get all quizzes
    if (req.method === 'GET') {
        const client = clientPromise;
        const db = client.then(client => client.db('Formanglais'));
        const collection = db.then(db => db.collection('Quizz'));
        const data = await collection.then(collection =>
            collection.find({}).toArray()
        );
        res.status(200).json({ ...data });
    }
    // if (req.method === 'POST') {
    //     const client = clientPromise;
    //     const db = client.then(client => client.db('Formanglais'));
    //     const collection = db.then(db => db.collection('Quizz'));
    //     const { question, answer } = req.body;
    //     const data = await collection.then(collection =>
    //         collection.insertOne({ question, answer })
    //     );
    //     res.status(200).json({ ...data });
    // }
}