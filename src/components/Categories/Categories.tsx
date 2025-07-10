import { Icon } from "@thenolans/nolan-ui";
import Category from "components/Category";
import useCategories from "hooks/useCategories";
import Masonry from "react-masonry-css";

export default function Categories() {
  const { categories, isFetching } = useCategories();

  if (isFetching)
    return (
      <div className="text-center py-4 text-gray-400">
        <Icon size={32} icon="Loader" className="animate-spin mx-auto" />
      </div>
    );

  if (!categories.length) return null;

  return (
    <Masonry
      breakpointCols={{
        default: 3,
        768: 2,
        512: 1,
      }}
      className="flex -ml-2 sm:-ml-4 w-auto"
      columnClassName="pl-2 sm:pl-4 bg-clip-padding"
    >
      {categories.map((category) => (
        <div className="mb-4" key={category.id}>
          <Category category={category} />
        </div>
      ))}
    </Masonry>
  );
}
