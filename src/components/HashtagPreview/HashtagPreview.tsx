import { Button } from "@thenolans/nolan-ui";
import classNames from "classnames";
import copy from "copy-to-clipboard";
import useAnimateHeight from "hooks/useAnimateHeight";
import useHashtags from "hooks/useHashtags";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import alphabetize from "utilities/alphabetize";

export default function HashtagPreview() {
  const { triggerProps, containerProps, isExpanded } = useAnimateHeight();
  const { selected, clear } = useHashtags();
  const [copied, setCopied] = useState(false);
  const results = alphabetize(selected)
    .map((hashtag) => `#${hashtag}`)
    .join(" ");

  return (
    <div className="fixed text-gray-700 bottom-0 right-0 left-0 sm:left-auto sm:right-4 sm:w-80 bg-white sm:rounded-t shadow-md overflow-hidden">
      <Button
        theme="reset"
        className="w-full text-left p-4 bg-primary-700 text-white flex items-center justify-between"
        {...triggerProps}
      >
        Results {!!selected.length && `(${selected.length})`}
        <i
          className={classNames(
            "fa",
            isExpanded ? "fa-angle-down" : "fa-angle-up"
          )}
        />
      </Button>
      <AnimateHeight {...containerProps}>
        <div className="p-4">
          {results ? (
            <>
              {results}
              <div className="mt-4 flex">
                <Button
                  onClick={() => {
                    copy(results);
                    setCopied(true);
                    setTimeout(() => {
                      setCopied(false);
                    }, 3000);
                  }}
                  className="flex-grow mr-2"
                >
                  {copied ? "Copied to clipboard" : "Copy to Clipboard"}
                  {copied && <i className="fa fa-check ml-2" />}
                </Button>
                <Button theme="secondary" onClick={() => clear()}>
                  Reset
                </Button>
              </div>
            </>
          ) : (
            <div className="text-gray-400 text-center flex items-center">
              Select hashtags from the list to copy them to your clipboard
            </div>
          )}
        </div>
      </AnimateHeight>
    </div>
  );
}
