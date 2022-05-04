import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = clientPromise;
    const db = client.then(client => client.db('Formanglais'));
    const collection = db.then(db => db.collection('Quizz'));
    const { id } = req.query;
    const data = await collection.then(collection =>
        collection.findOne({ _id: new ObjectId(String(id)) })
    );
    res.status(200).json({ ...data });
}