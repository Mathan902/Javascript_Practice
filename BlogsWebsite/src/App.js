import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import Routes from "./Routes";
import store from "../utils/store";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}><RouterProvider router={Routes}/></Provider>)