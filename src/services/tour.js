import { db } from "./firebase";

export const getTours = async () => {
  const resp = await db.collection('tours').get();
  const collections = [];
  resp.forEach(doc => collections.push({
    ...doc.data(),
    id: doc.id
  }));
  return collections;
};
