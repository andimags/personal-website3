import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Index from "./views/Index";
import Test from "./views/Test";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Index />,
            },
            {
                path: "/test",
                element: <Test />,
            },
        ],
    },
]);

export default router;
