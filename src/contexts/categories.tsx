import CategoryAPI from "api/category";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Category, Response } from "types";

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
  const { data, isLoading: isFetching } = useQuery<Response<Category[]>>(
    ["categories"],
    () => CategoryAPI.list(),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (data?.data?.length) {
      setCategories(data.data);
    }
  }, [data]);

  async function addCategory(category: Omit<Category, "_id">) {
    try {
      const newCategory = await CategoryAPI.create(category);
      setCategories((prevCategories) => [...prevCategories, newCategory]);
    } catch {
      // TODO
    }
  }

  async function updateCategory(category: Category) {
    try {
      const updatedCategory = await CategoryAPI.update(category);
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
      await CategoryAPI.remove(categoryId);
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
