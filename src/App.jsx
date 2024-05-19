import Header from "./components/Header/Header";
import background from "./assets/images/camp.mp4";

function App() {
  return (
    <>
      <video autoPlay muted loop id="bg-video">
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Header />
    </>
  );
}

export default App;
