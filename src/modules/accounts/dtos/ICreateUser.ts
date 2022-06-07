interface IUserDTO {
  personalData: {
    name: String,
  },

  accountData: {
    email: String,
    password: String,
    isAdmin: Boolean,
  },
}

export { IUserDTO };
