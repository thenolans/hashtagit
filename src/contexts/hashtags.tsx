import { createContext, ReactNode, useState } from "react";

type HashtagContextType = {
  clear: () => void;
  selected: string[];
  toggleOne: (hashtag: string) => void;
  selectMany: (hashtags: string[]) => void;
  unselectMany: (hashtags: string[]) => void;
};

const HashtagContext = createContext<HashtagContextType>({
  clear() {},
  selected: [],
  toggleOne() {},
  selectMany() {},
  unselectMany() {},
});

export const HashtagProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<string[]>([]);

  function toggleOne(hashtag: string) {
    if (selected.includes(hashtag)) {
      setSelected((prevSelection) =>
        prevSelection.filter((h) => h !== hashtag)
      );
    } else {
      setSelected((prevSelection) => [...prevSelection, hashtag]);
    }
  }

  function clear() {
    setSelected([]);
  }

  function selectMany(hashtags: string[]) {
    hashtags.forEach((hashtag) => {
      if (selected.includes(hashtag)) return;
      toggleOne(hashtag);
    });
  }

  function unselectMany(hashtags: string[]) {
    hashtags.map((hashtag) => {
      if (!selected.includes(hashtag)) return false;
      return toggleOne(hashtag);
    });
  }

  return (
    <HashtagContext.Provider
      value={{ clear, selected, toggleOne, selectMany, unselectMany }}
    >
      {children}
    </HashtagContext.Provider>
  );
};

export default HashtagContext;
