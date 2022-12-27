import { prisma } from "../db";

//Get all updates
export const getUpdates = async (req, res) => {
  const id = req.params.id;
  const updates = await prisma.update.findMany({
    where: {
      id,
    },
    include: {
      updateInfo: true,
    },
  });
  res.json({ data: updates });
};

// Get single update
export const getUpdate = async (req, res) => {
  const id = req.params.id;
  const update = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  res.json({ data: update });
};

//Create update
export const createUpdate = async (req, res) => {
  const update = await prisma.update.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      product: req.body.product,
    },
  });
  res.json({ data: update });
};
