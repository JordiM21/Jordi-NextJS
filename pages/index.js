import Head from "next/head";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import FirstPage from "./FirstPage";
import About from "./About";
import Projects from "./Projects";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
// import useDownloader from "react-use-downloader";
// import resume from "./Full-Stack-Developer.pdf";

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);

	// const { download } = useDownloader();

	// const fileUrl = "../public/Full-Stack-Developer.pdf";
	// const fileName = "Jordi Mantilla Full-Stack Developer";

	// //hydration
	// useEffect(() => {
	// 	setDarkMode(darkMode);
	// }, []);

	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Jordi's Portfolio</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-white dark:bg-gray-900 transition ease-in delay-100 font-bold">
				<section className="min-h-screen">
					<nav className=" z-10 py-7 flex justify-around overflow-hidden fixed top-0 min-w-full bg-gray-400 bg-opacity-20 backdrop-blur-md dark:bg-gray-700 dark:bg-opacity-20">
						<h1 className="text-xl dark:text-white">
							codedByJordi
						</h1>
						<ul className="flex items-center">
							<li>
								{darkMode ? (
									<BsFillSunFill
										onClick={() =>
											setDarkMode(
												!darkMode
											)
										}
										className="cursor-pointer text-2xl text-yellow-300"
									/>
								) : (
									<BsFillMoonFill
										onClick={() =>
											setDarkMode(
												!darkMode
											)
										}
										className="cursor-pointer text-2xl text-gray-900"
									/>
								)}
							</li>
							<li>
								<a
									style={{
										cursor: "pointer",
									}}
									onClick={() =>
										alert(
											"Ups! this feature is not working yet, my bad! :/"
										)
									}
									className="bg-gradient-to-r from-cyan-500 to-cyan-300 hover:from-cyan-500 hover:to-cyan-400 transition-colors ease-in duration-150 text-white px-4 py-2 border-none rounded-md ml-8 flex items-center gap-2"
								>
									Resume
									<AiOutlineDownload className="text-2xl" />
								</a>
							</li>
						</ul>
					</nav>
					<FirstPage darkMode={darkMode} />
				</section>
				<section>
					<About />
				</section>
				<section>
					<a href="#Form">
						<Banner />
					</a>
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
}
