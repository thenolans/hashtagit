import { Button, Card, Icon } from "@thenolans/nolan-ui";
import classNames from "classnames";
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
  const { name, hashtags, id } = category;
  const [isEditing, setIsEditing] = useState(false);
  const { triggerProps, containerProps, isExpanded } = useAnimateHeight(sample);
  const { removeCategory, updateCategory } = useCategories();
  const { selected, toggleOne, selectMany, unselectMany } = useHashtags();
  const categorySelectedCount = selected.filter((hashtag) =>
    hashtags.includes(hashtag)
  ).length;

  if (!isEditing) {
    return (
      <Card
        className={classNames(
          "border-2",
          categorySelectedCount > 0
            ? "border-primary-700"
            : "border-transparent"
        )}
      >
        <Card.Header>
          <div className="flex items-center justify-between overflow-hidden">
            <div className="w-auto overflow-hidden grow">
              <Button
                theme="reset"
                {...triggerProps}
                className="flex items-center overflow-hidden w-full"
              >
                <Icon
                  className="text-gray-400 mr-3 shrink-0"
                  icon={isExpanded ? "ChevronUp" : "ChevronDown"}
                />
                <div className="text-left space-y-1 overflow-hidden">
                  <h3 className="text-gray-700 text-nowrap text-ellipsis overflow-hidden text-sm">
                    {name}
                  </h3>
                  <div className="text-gray-400 text-xs">
                    {categorySelectedCount} of {hashtags.length}
                  </div>
                </div>
              </Button>
            </div>
            {!sample && (
              <div className="shrink-0 ml-4">
                <Button
                  className="text-sm text-gray-300 hover:text-primary-700"
                  theme="reset"
                  onClick={() => setIsEditing(true)}
                >
                  <Icon icon="Edit" size={16} />
                </Button>
              </div>
            )}
          </div>
        </Card.Header>
        <AnimateHeight {...containerProps}>
          <Card.Body borderTop>
            {!!hashtags.length && (
              <div className="mb-4 text-gray-500 text-sm space-x-1">
                <Button theme="tertiary" onClick={() => selectMany(hashtags)}>
                  Select all
                </Button>
                <span className="text-gray-300" aria-hidden="true">
                  |
                </span>
                <Button theme="tertiary" onClick={() => unselectMany(hashtags)}>
                  Unselect all
                </Button>
              </div>
            )}
            <div className="space-y-2">
              {hashtags.map((hashtag) => (
                <Checkbox
                  checked={selected.includes(hashtag)}
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
          className="text-sm text-red-600"
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete this category?")
            ) {
              removeCategory(id);
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
          id,
          name,
          hashtags: formatHashtags(hashtags),
        });
        setIsEditing(false);
      }}
    />
  );
}
