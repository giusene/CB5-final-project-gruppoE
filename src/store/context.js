import { createContext } from "react";
import { initialState } from "./state";

const AppCtx = createContext(initialState);

export { AppCtx };
