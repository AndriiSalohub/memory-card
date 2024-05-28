import background from "./assets/images/camp.mp4";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import { SoundProvider } from "./components/SoundContext/SoundContext";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/level/:diff",
      element: <GamePage />,
    },
  ]);

  return (
    <>
      <video autoPlay muted loop id="bg-video">
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <SoundProvider>
        <>
          <RouterProvider router={router} />
        </>
      </SoundProvider>
    </>
  );
}

export default App;
