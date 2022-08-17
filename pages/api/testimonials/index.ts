import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.statusCode = 200;
    res.json([
        { name: "John Doe", comment: 'John Doe is a very good developer', company: 'Orano' },
        { name: "Jane Doe", comment: 'Jane Doe is a very good developer, and have some nice qualities ', company: 'Facebook' },
        { name: "Loan CLERIS", comment: 'John Doe is a very good developer', company: 'Orano' },
        { name: "Ewan Lemee", comment: 'John Doe is a very good developer', company: 'Orano' },
        { name: "Mael Jamin", comment: 'John Doe is a very good developer', company: 'Orano' },
    ]);
}