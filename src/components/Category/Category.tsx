import { Button, Card, Icon } from "@thenolans/nolan-ui";
import CategoryForm from "components/CategoryForm";
import Checkbox from "components/Checkbox/Checkbox";
import useAnimateHeight from "hooks/useAnimateHeight";
import useCategories from "hooks/useCategories";
import useHashtags from "hooks/useHashtags";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { Category as CategoryType } from "types";
import formatHashtags from "utilities/formatHashtags";

type Props = {
  category: CategoryType;
  sample?: boolean;
};

export default function Category({ category, sample }: Props) {
  const { name, hashtags, _id } = category;
  const [isEditing, setIsEditing] = useState(false);
  const { triggerProps, containerProps, isExpanded } = useAnimateHeight(true);
  const { removeCategory, updateCategory } = useCategories();
  const { selected, toggleOne, selectMany, unselectMany } = useHashtags();
  const categorySelectedCount = selected.filter((hashtag) =>
    hashtags.includes(hashtag)
  ).length;

  if (!isEditing) {
    return (
      <Card>
        <div className="py-2 px-4 flex">
          <Button
            theme="reset"
            {...triggerProps}
            className="flex items-center flex-grow"
          >
            <Icon
              className="text-gray-400 mr-4"
              icon={isExpanded ? "ChevronUp" : "ChevronDown"}
            />
            <div className="text-left space-y-1">
              <h3 className="text-gray-700">{name}</h3>
              <div className="text-gray-400 text-xs">
                {categorySelectedCount} of {hashtags.length}
              </div>
            </div>
          </Button>
          {!sample && (
            <Button theme="tertiary" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
          )}
        </div>
        <AnimateHeight {...containerProps}>
          <Card.Body>
            {!!hashtags.length && (
              <div className="mb-2 text-gray-500 text-sm">
                <Button theme="tertiary" onClick={() => selectMany(hashtags)}>
                  Select all
                </Button>
                <span aria-hidden="true" className="mx-2">
                  |
                </span>
                <Button theme="tertiary" onClick={() => unselectMany(hashtags)}>
                  Unselect all
                </Button>
              </div>
            )}
            <div className="space-y-1">
              {hashtags.map((hashtag) => (
                <Checkbox
                  checked={selected.includes(hashtag)}
                  className="mr-2"
                  label={`#${hashtag}`}
                  onChange={() => toggleOne(hashtag)}
                  key={hashtag}
                />
              ))}
              {hashtags.length === 0 && (
                <div className="text-gray-400 text-sm text-center mx-auto w-2/3 py-2">
                  You have not added any hashtags to this category, yet
                </div>
              )}
            </div>
          </Card.Body>
        </AnimateHeight>
      </Card>
    );
  }

  return (
    <CategoryForm
      additionalActions={
        <Button
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete this category?")
            ) {
              removeCategory(_id);
            }
          }}
          theme="tertiary"
        >
          Delete category
        </Button>
      }
      initialValues={{ name, hashtags }}
      onSubmit={({ name, hashtags }) => {
        updateCategory({
          _id,
          name,
          hashtags: formatHashtags(hashtags),
        });
        setIsEditing(false);
      }}
    />
  );
}
