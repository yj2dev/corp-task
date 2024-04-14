import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <ListPage />
      </Layout>
    ),
  },

  {
    path: "/detail/:owner/:repo/:number",
    element: (
      <Layout>
        <DetailPage />
      </Layout>
    ),
  },
]);

export default router;
