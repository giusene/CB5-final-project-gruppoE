import "@/styles/globals.css";
import MainLayout from "@/layout/MainLayout";
import { useReducer } from "react";
import appReducer from "@/store/reducer";
import { initialState } from "@/store/state";
import { AppCtx } from "@/store/context";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppCtx.Provider value={{ state, dispatch }}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppCtx.Provider>
  );
}
