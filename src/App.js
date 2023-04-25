import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { useState } from "react";

import Gaming from "./components/Gaming";
import Songs from "./components/Songs";
import LiveVedio from "./components/LiveVedio";
import All from "./components/All";
import Soccer from "./components/Soccer";
import Crcket from "./components/Crcket";
import News from "./components/News";
import Cooking from "./components/Cooking";
function App() {
  const [darkTheme] = useState(true);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/gaming",
          element: <Gaming />,
        },
        {
          path: "/songs",
          element: <Songs />,
        },
        {
          path: "/live",
          element: <LiveVedio />,
        },
        {
          path: "/all",
          element: <All />,
        },
        {
          path: "/soccer",
          element: <Soccer />,
        },
        {
          path: "/cricket",
          element: <Crcket />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/cooking",
          element: <Cooking />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className={darkTheme && "bg-black text-white "}>
        <Head />
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
