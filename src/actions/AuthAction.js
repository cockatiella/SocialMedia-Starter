import * as Authapi from "../api/AuthRequest";

export const logIn = (FormData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    console.log("start the login :",FormData);
    //const { data } = await Authapi.logIn(FormData);
   // dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log("the error in authAction:",error);
    dispatch({ type: "AUTH_FAIL", error: error });
  }
  //const { data } = await Authapi.signIn(FormData);
};

export const signUp = (FormData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await Authapi.signUp(FormData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL", error: error });
  }
};
