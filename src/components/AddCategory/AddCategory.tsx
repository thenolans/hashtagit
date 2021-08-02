import CategoryForm from "components/CategoryForm";
import useCategories from "hooks/useCategories";
import { Button, Icon, useToggle } from "react-kit";

export default function AddCategory() {
  const [isAdding, toggleIsAdding] = useToggle();
  const { addCategory } = useCategories();

  if (!isAdding) {
    return (
      <Button
        theme="reset"
        onClick={toggleIsAdding}
        className="text-gray-400 border-2 border-dashed border-gray-400 hover:text-blue-600 hover:border-blue-600 rounded w-full py-4 transition-colors"
      >
        <Icon as="fa fa-plus" className="mr-2" />
        Add category
      </Button>
    );
  }

  return (
    <CategoryForm
      onSubmit={(values) => {
        addCategory(values);
        toggleIsAdding();
      }}
      additionalActions={
        <Button onClick={toggleIsAdding} theme="link--danger">
          Cancel
        </Button>
      }
    />
  );
}
