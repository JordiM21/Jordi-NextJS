import Head from "next/head";
import {
  BsFillMoonFill,
  BsFillSunFill,
} from "react-icons/bs";
import {
  useEffect,
  useState,
} from "react";
import { AiOutlineDownload } from "react-icons/ai";
import FirstPage from "../components/FirstPage";
import About from "../components/About";
import Projects from "../components/Projects";
import Banner from "../components/Banner";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import withSuspense from "../Hydration/withSuspense";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import Logo from "../components/Logo";
import LogoDarkMode from "../components/LogoDarkMode";
import Certificates from "../components/Certificates";

const Home = () => {
  //this progress can be passed to the children
  const { progress } = useScroll();
  const [
    initialProgress,
    setInitialProgress,
  ] = useState(0.5);
  //Here changes the progress while scrolling
  useEffect(() => {
    setInitialProgress(progress);
  }, [progress]);

  const [darkMode, setDarkMode] =
    useState(false);
  const { scrollYProgress } =
    useScroll();
  const scaleX = useSpring(
    scrollYProgress,
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return (
    <div
      className={darkMode ? "dark" : ""}
    >
      <Head>
        <title>Jordi's Portfolio</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className="bg-white dark:bg-gray-900 transition ease-in delay-100 font-bold">
        <section className=" min-h-screen">
          <nav className=" z-10 py-7 flex justify-between w-full overflow-hidden fixed top-0 bg-gray-400 bg-opacity-20 backdrop-blur-md dark:bg-gray-700 dark:bg-opacity-20">
            <ul className=" flex items-center justify-around w-full">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={() =>
                      setDarkMode(
                        !darkMode
                      )
                    }
                    className="cursor-pointer text-2xl text-yellow-300 mx-8 sm:mx-14"
                  />
                ) : (
                  <BsFillMoonFill
                    onClick={() =>
                      setDarkMode(
                        !darkMode
                      )
                    }
                    className="cursor-pointer text-xl md:text-2xl text-gray-900 mx-8 sm:mx-14"
                  />
                )}
              </li>
              <li>
                <motion.div
                  style={{
                    scaleX,
                  }}
                  className="origin-left h-1 fixed right-0 bottom-0 left-0 bg-teal-700  top-0"
                ></motion.div>
                {darkMode ? (
                  <LogoDarkMode />
                ) : (
                  <Logo />
                )}
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1n8HmzQSXTrz7-fWnMajkKrQzB9Y9ef3f/view?usp=sharing"
                  target="_blank"
                  style={{
                    cursor: "pointer",
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-cyan-300 hover:from-cyan-500 hover:to-cyan-400 transition-colors ease-in duration-150 text-white px-1 py-2 md:px-4 md:py-2 border-none rounded-md ml-8 flex items-center gap-2"
                >
                  Resume
                  <AiOutlineDownload className="text-lg md:text-2xl" />
                </a>
              </li>
            </ul>
          </nav>
          <FirstPage
            darkMode={darkMode}
          />
        </section>
        <section>
          <About />
        </section>
        <section>
          <a id="Banner" href="#Form">
            <Banner />
          </a>
        </section>
        <section>
          <Certificates />
        </section>
        <section>
          <Projects />
        </section>
        <section id="Form">
          <ContactMe />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
};
export default withSuspense(Home);
