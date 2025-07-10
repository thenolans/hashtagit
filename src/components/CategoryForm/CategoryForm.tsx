import { Button, Card, Icon, TextInput } from "@thenolans/nolan-ui";
import { FieldArray, Form, Formik } from "formik";
import { ReactNode, useEffect, useRef } from "react";
import * as Yup from "yup";

type FormData = {
  name: string;
  hashtags: string[];
};

type Props = {
  additionalActions?: ReactNode;
  initialValues?: Partial<FormData>;
  onSubmit?: (formData: FormData) => void;
};

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
});

export default function CategoryForm({
  initialValues,
  onSubmit,
  additionalActions,
}: Props) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const lastHashtagInputRef = useRef<HTMLInputElement>(null);
  const autoFocusHashtags = !!initialValues?.hashtags?.length;

  useEffect(() => {
    nameInputRef?.current?.focus();
  }, [nameInputRef]);

  return (
    <Formik
      initialValues={{
        name: initialValues?.name || "",
        hashtags: !!initialValues?.hashtags?.length
          ? initialValues.hashtags
          : [""],
      }}
      onSubmit={(values) => {
        onSubmit?.({
          name: values.name,
          hashtags: values.hashtags.filter((hashtag) => Boolean(hashtag)),
        });
      }}
      validationSchema={ValidationSchema}
      render={({ values, handleChange, errors }) => (
        <Card>
          <Card.Header>
            <div className="pl-4 mr-7">
              <TextInput
                autoFocus={!autoFocusHashtags}
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Category name..."
                error={errors.name}
                ref={nameInputRef}
              />
            </div>
          </Card.Header>
          <Card.Body>
            <Form>
              <div className="space-y-8">
                <FieldArray
                  name="hashtags"
                  render={(arrayHelpers) => (
                    <div className="space-y-2">
                      {values.hashtags.map((_, index) => {
                        const isOnlyHashtag = values.hashtags.length === 1;
                        return (
                          <div className="flex items-center" key={index}>
                            <span
                              aria-hidden="true"
                              className="mr-2 text-lg text-gray-600"
                            >
                              #
                            </span>
                            <div className="mr-2 w-full">
                              <TextInput
                                autoFocus={autoFocusHashtags}
                                name={`hashtags.${index}`}
                                value={values.hashtags[index]}
                                onChange={handleChange}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    e.preventDefault();
                                    arrayHelpers.insert(
                                      values.hashtags.length,
                                      ""
                                    );
                                  }
                                }}
                                placeholder="Hashtag..."
                                ref={
                                  index === values.hashtags.length - 1
                                    ? lastHashtagInputRef
                                    : undefined
                                }
                              />
                            </div>
                            <Button
                              className={
                                isOnlyHashtag ? "invisible" : undefined
                              }
                              theme="tertiary"
                              aria-label="Remove hashtag"
                              aria-hidden={isOnlyHashtag}
                              disabled={isOnlyHashtag}
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              <Icon
                                size={16}
                                className="text-red-600"
                                icon="Trash"
                              />
                            </Button>
                          </div>
                        );
                      })}
                      <div className="text-center">
                        <Button
                          onClick={() => {
                            arrayHelpers.insert(values.hashtags.length, "");
                          }}
                          theme="tertiary"
                        >
                          Add hashtag
                        </Button>
                      </div>
                    </div>
                  )}
                />
                <div className="flex justify-between items-center">
                  <div>{additionalActions}</div>
                  <Button type="submit">Done</Button>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      )}
    />
  );
}
