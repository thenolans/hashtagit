import HashtagContext from "contexts/hashtags";
import { useContext } from "react";

export default function useHastags() {
  return useContext(HashtagContext);
}
