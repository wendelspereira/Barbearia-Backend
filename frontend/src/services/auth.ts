interface IResponse {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<IResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "dkfjhalçksfg ghdfykghjghjgjhkfjkjkghjkdjfghf",
        user: {
          name: "Anestina",
          email: "anaestina@gmail.com",
        },
      });
    }, 2000);
  });
}
