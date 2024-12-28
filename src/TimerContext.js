import { createContext, useContext } from "react";
import Timelist from "./Timelist";

export const Thecontext = createContext({ TimeListState: "", setTimeListState: () => { }, color: "", catchTimer: () => { } });
