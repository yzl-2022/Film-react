import { createBrowserRouter } from "react-router-dom"

import Page from "../components/page/Page"
import NotFound from "../components/NotFound/NotFound"
//second routes
import Accueil from "../components/accueil/Accueil"
import List from "../components/list-film/List-film"
import Admin from "../components/admin/Admin"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Page />,
        // children:[
        //     {
        //         index: true,
        //         element: <Accueil />
        //     },
        //     {
        //         path: '/films',
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