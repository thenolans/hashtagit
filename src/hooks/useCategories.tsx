import CategoryContext from "contexts/categories";
import { useContext } from "react";

export default function useCategories() {
  return useContext(CategoryContext);
}
