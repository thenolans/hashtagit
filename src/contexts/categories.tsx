import useHttp from "hooks/useHttp";
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
  const {
    listCategories,
    createCategory,
    removeCategory: removeCategoryRequest,
    updateCategory: updateCategoryRequest,
  } = useHttp();
  const [categories, setCategories] = useState<Category[]>([]);
  const { data, isLoading: isFetching } = useQuery<Response<Category[]>>(
    ["categories"],
    () => listCategories(),
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
      const newCategory = await createCategory(category);
      setCategories((prevCategories) => [...prevCategories, newCategory]);
    } catch {
      // TODO
    }
  }

  async function updateCategory(category: Category) {
    try {
      const updatedCategory = await updateCategoryRequest(category);
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
      await removeCategoryRequest(categoryId);
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
