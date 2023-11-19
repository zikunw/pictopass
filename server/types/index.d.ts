export type RegisterBodyParams = {
  username: string[];
  passphrase: number[];
  name: string;
};

export type LoginBodyParams = {
  username: string[];
  passphrase: number[];
};

export type SignoutBodyParams = {
  jwt: string;
};

export type JWTData = {
  userId: string;
};
