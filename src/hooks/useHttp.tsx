import { useAuth0 } from "@auth0/auth0-react";
import { Category } from "types";
import http from "utilities/http";

export default function useHttp() {
  const { getAccessTokenSilently } = useAuth0();

  async function getAuthHeader() {
    return {
      authorization: `Bearer ${await getAccessTokenSilently()}`,
    };
  }

  async function listCategories() {
    const authHeader = await getAuthHeader();
    return http
      .get("/api/categories", {
        headers: authHeader,
      })
      .then((res) => res.data);
  }

  async function createCategory(category: Omit<Category, "_id">) {
    const authHeader = await getAuthHeader();
    return http
      .post("/api/categories", category, {
        headers: authHeader,
      })
      .then((res) => res.data.data);
  }

  async function removeCategory(categoryId: string) {
    const authHeader = await getAuthHeader();
    return http.delete(`api/categories/${categoryId}`, {
      headers: authHeader,
    });
  }

  async function updateCategory(category: Category) {
    const authHeader = await getAuthHeader();
    return http
      .patch(`api/categories/${category._id}`, category, {
        headers: authHeader,
      })
      .then((res) => res.data.data);
  }

  async function deleteAccount() {
    const authHeader = await getAuthHeader();
    return http.delete(`api/account`, {
      headers: authHeader,
    });
  }

  return {
    listCategories,
    createCategory,
    removeCategory,
    updateCategory,
    deleteAccount,
  };
}
