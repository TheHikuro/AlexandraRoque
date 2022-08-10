// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../../lib/mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = clientPromise;
  const db = client.then(client => client.db('Formanglais'));

  const collection = db.then(db => db.collection('Users'));

  const { user } = req.query;

  const data = await collection.then(collection =>
    collection.findOne({ username: user })
  );

  switch (req.method) {
    case 'POST':
      const { username, password } = req.body;
      const checkUser = await (await db).collection('Users').findOne({ username: username })
      if (!checkUser) {
        res.status(404).json({ message: 'User not found' })
      } else {
        // check password with bcrypt
        const match = await bcrypt.compare(password, checkUser.password)
        if (match) {
          // generate token jwt with secret key
          const token = jwt.sign({ username: username }, String(process.env.SECRET_KEY))
          res.status(200).json({ token })
        } else {
          res.status(404).json({ message: 'User not found' })
        }
      }
      break;
    default:
      res.status(200).json({ ...data });
      break;
  }
}