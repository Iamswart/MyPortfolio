import { useState, useEffect } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3500);

  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleLoad = () => {
      setIsLoading(false);
      clearTimeout(timer); // Clear the timeout if 'load' event occurs
    };

    window.addEventListener("load", handleLoad);

    timer = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after 5 seconds as a fallback
    }, 3500);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer); // Clear the timeout when the component unmounts
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <NavBar />
          <Hero />
          <About />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
