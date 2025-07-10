import { Button, Icon } from "@thenolans/nolan-ui";
import CategoryForm from "components/CategoryForm";
import useCategories from "hooks/useCategories";
import { useState } from "react";
import formatHashtags from "utilities/formatHashtags";

export default function AddCategory() {
  const [isAdding, setIsAdding] = useState(false);
  const { addCategory } = useCategories();

  if (!isAdding) {
    return (
      <Button
        theme="reset"
        onClick={() => setIsAdding(true)}
        className="text-gray-400 border-2 border-dashed border-gray-400 hover:text-primary-800 hover:border-primary-800 rounded-xl w-full py-4 transition-colors flex items-center justify-center"
      >
        <Icon icon="Plus" className="mr-2" />
        Add category
      </Button>
    );
  }

  return (
    <CategoryForm
      onSubmit={({ name, hashtags }) => {
        addCategory({
          name,
          hashtags: formatHashtags(hashtags),
        });
        setIsAdding(false);
      }}
      additionalActions={
        <Button
          className="text-red-600"
          onClick={() => setIsAdding(false)}
          theme="tertiary"
        >
          Cancel
        </Button>
      }
    />
  );
}
