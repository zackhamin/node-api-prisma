import { nextTick } from "process";
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

export const createProduct = async (req, res, next) => {
  try {
    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        belongsToId: req.user.id,
      },
    });
    res.json({ data: product });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res) => {
  const updated = await prisma.product.update({
    where: {
      id: req.params.id,
    },
    data: {
      name: req.body.name,
    },
  });
  res.json({ data: updated });
};

export const deleteProduct = async (req, res) => {
  const deleted = await prisma.product.delete({
    where: {
      id: req.params.id,
      id_belongsToId: req.params.id,
    },
  });
  res.json({ data: deleted });
};
