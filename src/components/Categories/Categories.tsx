import { Icon } from "@thenolans/nolan-ui";
import Category from "components/Category";
import useCategories from "hooks/useCategories";

export default function Categories() {
  const { categories, isFetching } = useCategories();

  if (isFetching)
    return (
      <div className="text-center py-4 text-gray-400">
        <Icon size={32} icon="Loader" className="animate-spin" />
      </div>
    );

  if (!categories.length) return null;

  return (
    <>
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </>
  );
}
