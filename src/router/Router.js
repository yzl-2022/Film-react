import { createBrowserRouter } from "react-router-dom"

import Accueil from "../components/accueil/Accueil"
import NotFound from "../components/NotFound/NotFound"
//second routes
import List from "../components/list-film/List-film"
import Admin from "../components/admin/Admin"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Accueil />,
        // children:[
        //     {
        //         index: true,
        //         element: <List />
        //     },
        //     {
        //         path:'/admin',
        //         element: <Admin />
        //     }
        // ]
    },
    {
        path: '*',
        element: <NotFound />
    }

])

export default router