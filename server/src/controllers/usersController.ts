import { Request, Response } from "express";

function getUsers(req: Request, res: Response) {
  res.status(200).json({
    success: true,
    status: res.status,
    data: { username: "Alex", email: "alex@gmail.com" },
  });
}

export default {
  getUsers,
};
