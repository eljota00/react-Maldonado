import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const fetchAllProducts = async () => {
  const col = collection(db, "products");
  const snapshot = await getDocs(col);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const fetchProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const snap = await getDoc(docRef);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const fetchProductsByCategory = async (cat) => {
  const col = collection(db, "products");
  const q = query(col, where("category", "==", cat));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};
