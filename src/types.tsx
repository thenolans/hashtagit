export type Hashtag = string;

export type Category = {
  _id: string;
  name: string;
  hashtags: Hashtag[];
};

export enum QueryKeys {
  CATEGORIES = "categories",
}
