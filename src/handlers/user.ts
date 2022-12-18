import { create } from "domain";
import { prisma } from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
      email: req.body.email,
    },
  });

  const token = createJWT(user);
  res.json({ token });
};

export const signIn = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  const isValidUser = await comparePasswords(req.body.password, user.password);

  if (!isValidUser) {
    return res.status(401).send({ message: "Nahh" });
  }

  const token = createJWT(user);
  res.status(200).send({ token });
};
