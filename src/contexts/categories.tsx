import { useQuery } from "@tanstack/react-query";
import {
  createCategory,
  destroyCategory,
  getCategories,
  patchCategory,
} from "api/categories";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Category, QueryKeys } from "types";

type CategoryContextType = {
  categories: Category[];
  addCategory: (category: Omit<Category, "_id">) => void;
  updateCategory: (category: Category) => void;
  removeCategory: (categoryId: string) => void;
  isFetching: boolean;
};

const CategoryContext = createContext<CategoryContextType>({
  categories: [],
  addCategory() {},
  updateCategory() {},
  removeCategory() {},
  isFetching: false,
});

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { data, isFetching } = useQuery<Category[]>({
    queryKey: [QueryKeys.CATEGORIES],
    queryFn: getCategories,
  });

  useEffect(() => {
    if (data?.length) {
      setCategories(data);
    }
  }, [data]);

  async function addCategory(category: Omit<Category, "_id">) {
    try {
      const newCategory = await createCategory(category);
      setCategories((prevCategories) => [...prevCategories, newCategory]);
    } catch {
      // TODO
    }
  }

  async function updateCategory(category: Category) {
    try {
      const updatedCategory = await patchCategory(category);
      setCategories((prevCategories) =>
        prevCategories.map((c) => {
          if (c._id === updatedCategory._id) {
            return updatedCategory;
          }
          return c;
        })
      );
    } catch {
      // TODO
    }
  }

  async function removeCategory(categoryId: string) {
    try {
      await destroyCategory(categoryId);
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category._id !== categoryId)
      );
    } catch {
      // TODO
    }
  }

  return (
    <CategoryContext.Provider
      value={{
        categories,
        addCategory,
        updateCategory,
        removeCategory,
        isFetching,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
