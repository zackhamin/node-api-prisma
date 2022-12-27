import { prisma } from "../db";

// Get all products
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.user.id,
    },
    include: {
      product: true,
    },
  });
  res.json({ data: user.product });
};

//Get single product
export const getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await prisma.product.findFirst({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });
  res.json({ data: product });
};
