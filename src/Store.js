import { createStoreHook } from "react-redux";
import rootReducer from "./redux/reduceres/Main";
const store = createStoreHook(rootReducer)
export default store