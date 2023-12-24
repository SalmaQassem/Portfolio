import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import styles from "./styles/_App.module.scss";
const Root = lazy(() => import("./pages/Root"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<p>loading...</p>}>
          <Root />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<p>loading...</p>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "About",
          element: (
            <Suspense fallback={<p>loading...</p>}>
              <About />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
