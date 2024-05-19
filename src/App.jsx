import background from "./assets/images/camp.mp4";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPage />,
    },
    {
      path: "/level",
      element: <GamePage />,
    },
  ]);

  return (
    <>
      <video autoPlay muted loop id="bg-video">
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
