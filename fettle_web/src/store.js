import { configureStore } from "@reduxjs/toolkit";
import { rootred } from "./Redux/reducers/main"

export const store = configureStore({ reducer: rootred })

