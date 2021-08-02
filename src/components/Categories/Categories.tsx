import Category from "components/Category";
import useCategories from "hooks/useCategories";
import { Icon } from "react-kit";

export default function Categories() {
  const { categories, isFetching } = useCategories();

  if (isFetching)
    return (
      <div className="text-center py-4 text-gray-400">
        <Icon className="fa-2x" as="fa fa-circle-o-notch" spin />
      </div>
    );

  if (!categories.length) return null;

  return (
    <>
      {categories.map((category) => (
        <Category category={category} key={category._id} />
      ))}
    </>
  );
}
