import { destroy, get, patch, post } from "@thenolans/nolan-ui";
import Urls from "constants/urls";
import { reverse } from "named-urls";
import { Category } from "types";

export async function getCategories(): Promise<Category[]> {
  return get({ path: Urls.api.categories });
}

export async function createCategory(
  category: Omit<Category, "id">
): Promise<Category> {
  return post({
    path: Urls.api.categories,
    data: category,
  });
}

export async function destroyCategory(categoryId: number) {
  return destroy({
    path: reverse(Urls.api.category, {
      id: categoryId,
    }),
  });
}

export async function patchCategory(category: Category): Promise<Category> {
  return patch({
    path: reverse(Urls.api.category, {
      id: category.id,
    }),
    data: category,
  });
}
