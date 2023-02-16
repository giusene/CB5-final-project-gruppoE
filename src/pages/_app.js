import "@/styles/globals.css";
import MainLayout from "@/layout/MainLayout";
import { useReducer } from "react";
import mainReducer from "@/store/reducer";
import { initialState } from "@/store/state";
import { AppCtx } from "@/store/context";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppCtx.Provider value={{ state, dispatch }}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppCtx.Provider>
  );
}
