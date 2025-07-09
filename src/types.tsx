export type Hashtag = string;

export type Category = {
  _id: string;
  name: string;
  hashtags: Hashtag[];
};

export type Response<T> = {
  data: T;
};

export type PasswordReset = {
  currentPassword: string;
  newPassword: string;
};

export type ErrorResponse = {
  response: {
    data: {
      error: {
        message: string;
      };
    };
  };
};
