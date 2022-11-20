import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/db";

const handler = (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === "GET") {
        prisma.product
            .findMany({})
            .then((products) => {
                response.status(200).json(products);
            })
            .catch((error) => {
                response.status(400).json(error);
            });
    }
};

export default handler;
