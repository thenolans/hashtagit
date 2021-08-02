import { Category } from "types";
import http from "utilities/http";

function list() {
  return http.get("/api/categories").then((res) => res.data);
}

function create(category: Omit<Category, "_id">) {
  return http.post("/api/categories", category).then((res) => res.data.data);
}

function remove(categoryId: string) {
  return http.delete(`api/categories/${categoryId}`);
}

function update(category: Category) {
  return http
    .patch(`api/categories/${category._id}`, category)
    .then((res) => res.data.data);
}

const RecipeAPI = {
  create,
  remove,
  list,
  update,
};

export default RecipeAPI;
