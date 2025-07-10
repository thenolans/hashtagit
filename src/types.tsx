export type Hashtag = string;

export type Category = {
  id: number;
  name: string;
  hashtags: Hashtag[];
};

export enum QueryKeys {
  CATEGORIES = "categories",
}
