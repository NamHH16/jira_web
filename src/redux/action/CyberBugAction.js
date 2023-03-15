import { USER_SIGNIN_API } from "../constant/CyberBug";

export const signinCyberbugAction = (email, password) => {
  console.log("email", email, password);
  return {
    type: USER_SIGNIN_API,
    userLogin: {
      email: email,
      password: password,
    },
  };
};
