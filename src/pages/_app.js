import "@/styles/globals.css";
import MainLayout from "@/layout/MainLayout";
import { useReducer } from "react";
import appReducer from "@/store/reducer";
import { initialState } from "@/store/state";
import { AppCtx } from "@/store/context";
import Login from "./login";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // TODO: fix error page when login is not valid

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
