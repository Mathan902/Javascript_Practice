import {createBrowserRouter} from 'react-router-dom';
import AppLayout from './AppLayout';
import Posts from './Posts';
import Authors from './Authors';
const Routes = createBrowserRouter(
    [
        {
            path:'/',
            element:<AppLayout/>,
            children:[
                {
                    path:'/',
                    element :<Posts/>
                },
                {
                    path:'/author',
                    element:<Authors/>
                }
            ]
        }
    ]
);
export default Routes;