import alphabetize from "utilities/alphabetize";

/**
 * formatHashtags
 *
 * @param hashtags string]
 * @returns string[]
 */
export default function formatHashtags(hashtags: string[]) {
  return alphabetize(hashtags).map((hashtag) => hashtag.toLocaleLowerCase());
}
