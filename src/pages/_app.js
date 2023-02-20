import "@/styles/globals.css";
import MainLayout from "@/layout/MainLayout";
import { useEffect, useReducer } from "react";
import appReducer from "@/store/reducer";
import { initialState } from "@/store/state";
import { AppCtx } from "@/store/context";
import Login from "./login";
import { loginActions } from "@/store/actions";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const rawData = localStorage.getItem("currentUser");
    const parsedData = JSON.parse(rawData);

    if (parsedData) {
      dispatch({
        type: loginActions.KEEP_SESSION_OPEN,
        payload: parsedData,
      });
    }
  }, []);

  return (
    <AppCtx.Provider value={{ state, dispatch }}>
      {!state.isLogged ? (
        <Login />
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </AppCtx.Provider>
  );
}
