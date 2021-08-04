import { useAuth0 } from "@auth0/auth0-react";
import Urls from "constants/urls";
import { reverse } from "named-urls";
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
      .get(Urls.api.categories, {
        headers: authHeader,
      })
      .then((res) => res.data);
  }

  async function createCategory(category: Omit<Category, "_id">) {
    const authHeader = await getAuthHeader();
    return http
      .post(Urls.api.categories, category, {
        headers: authHeader,
      })
      .then((res) => res.data.data);
  }

  async function removeCategory(categoryId: string) {
    const authHeader = await getAuthHeader();
    return http.delete(
      reverse(Urls.api.category, {
        id: categoryId,
      }),
      {
        headers: authHeader,
      }
    );
  }

  async function updateCategory(category: Category) {
    const authHeader = await getAuthHeader();
    return http
      .patch(
        reverse(Urls.api.category, {
          id: category._id,
        }),
        category,
        {
          headers: authHeader,
        }
      )
      .then((res) => res.data.data);
  }

  async function deleteAccount() {
    const authHeader = await getAuthHeader();
    return http.delete(`${Urls.api.account}?hashtagit=true`, {
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
