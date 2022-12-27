import { prisma } from "../db";

//Get all updates
export const getUpdates = async (req, res) => {
  const id = req.params.id;
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      update: true,
    },
  });
  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.update];
  }, []);
  res.json({ data: updates });
};

// Get single update
export const getUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json({ data: update });
};

//Create update
export const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.productId,
    },
  });
  if (!product) {
    return res.json({ message: "Not a product" });
  }

  const update = await prisma.update.create({
    data: req.body,
  });
  res.json({ data: update });
};

// Update updates
export const updateUpdate = async (req, res) => {
  const id = req.params.id;
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      update: true,
    },
  });
  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.update];
  }, []);

  const match = updates.find((update) => update.id === req.params.id);

  if (!match) {
    return res.json({ messsage: "Could not find productId to update" });
  }

  const updatedUpdate = await prisma.update.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });

  res.json({ data: updatedUpdate });
};
