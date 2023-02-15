import "@/styles/globals.css";
import MainLayout from "@/layout/MainLayout";
import { initialState,AppCtx } from "@/store/state";
import { useReducer } from "react";
import {mainReducer} from "@/store/reducer";

export default function App({ Component, pageProps }) {
  const [state,dispatch] = useReducer(mainReducer,initialState)

  return (
    
    <AppCtx.Provider value={{state, dispatch}}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    </AppCtx.Provider>
  );
}
