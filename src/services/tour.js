import { db } from "./firebase";

export const getTours = async () => {
  const resp = await db.collection('tours').get();
  const collections = [];
  resp.forEach(doc => collections.push(doc.data()));
  return collections;
};

export const getTourDetail = async (id) => {
  const resp = await db.collection('tours')
    .where("id", "==", id)
    .get();
  const collections = [];
  resp.forEach(doc => collections.push(doc.data()));
  return collections.length ? collections[0] : {};
};
