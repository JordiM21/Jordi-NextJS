import React from "react";
import Image from "next/image";
import ecommercePage from "../public/ecommerce-banner.png";
import rickPage from "../public/rick-banner.png";
import pokePage from "../public/react-pokedex.png";
import crudPage from "../public/Banner-LET.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DiReact, DiCss3 } from "react-icons/di";
import { SiJavascript, SiRedux } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";

const Projects = () => {
	return (
		<div className="px-10 md:px-20 lg:px-40 mt-20">
			<div>
				<h3 className="text-3xl py-1 dark:text-white">
					Portfolio
				</h3>
				<p className="dark:text-gray-400">
					I've been working on really interesting
					projects, here you can see the live page
					and the git repo,{" "}
					<span className="text-teal-500">
						feel free to take a look at it!
					</span>
				</p>
			</div>
			<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
				<div className="basis-1/3 flex-1 relative z-0">
					<div className="flex absolute min-w-full z-10">
						<div className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white">
							<a
								href="https://github.com/JordiM21/Amason"
								target="blank"
							>
								Go to Repo
							</a>
							<FaExternalLinkAlt className="ml-2" />
						</div>
						<div className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white">
							<a
								href="https://amason.vercel.app"
								target="blank"
							>
								Go to Live
							</a>
							<FaExternalLinkAlt className="ml-2" />
						</div>
					</div>
					<div className="overflow-hidden">
						<Image
							alt="ecommerce"
							className="rounded-lg object-contain hover:scale-110 hover: transition ease-in cursor-pointer h-64"
							src={ecommercePage}
						/>
					</div>
					<div className="flex items-center text-white bg-teal-700 justify-center gap-2">
						<p>Ecommerce</p>
						<DiCss3 />
						<AiFillHtml5 />
						<SiJavascript />
						<DiReact />
						<SiRedux />
					</div>
				</div>
				<div className="basis-1/3 flex-1 relative z-0">
					<div className="flex absolute min-w-full z-10">
						<div className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white">
							<a
								href="https://github.com/JordiM21/NextJS-Rick-Morty"
								target="blank"
							>
								Go to Repo
							</a>
							<FaExternalLinkAlt className="ml-2" />
						</div>
						<div className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white">
							<a
								href="https://rickmorty-nextjs.vercel.app"
								target="blank"
							>
								Go to Live
							</a>
							<FaExternalLinkAlt className="ml-2" />
						</div>
					</div>
					<div className="overflow-hidden">
						<Image
							alt="rick page"
							className="rounded-lg object-cover hover:scale-110 hover: transition ease-in cursor-pointer h-64"
							src={rickPage}
						/>
					</div>
					<div className="flex items-center text-white bg-teal-700 justify-center gap-2">
						<p>Rick & Morty</p>
						<DiCss3 />
						<AiFillHtml5 />
						<SiJavascript />
						<DiReact />
					</div>
				</div>
				<div className="basis-1/3 flex-1 relative z-0">
					<div className="flex absolute min-w-full z-10">
						<div className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white">
							<a
								href="https://github.com/JordiM21/PokedexReactRedux"
								target="blank"
							>
								Go to Repo
							</a>
							<FaExternalLinkAlt className="ml-2" />
						</div>
						<div className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white">
							<a
								href="https://pokedex-react-redux-jordi.netlify.app"
								target="blank"
							>
								Go to Live
							</a>
							<FaExternalLinkAlt className="ml-2" />
						</div>
					</div>
					<div className="overflow-hidden">
						<Image
							alt="pokedex"
							className="rounded-lg object-cover hover:scale-110 hover: transition ease-in cursor-pointer h-64"
							src={pokePage}
						/>
					</div>
					<div className="flex items-center text-white bg-teal-700 justify-center gap-2">
						<p>Pokedex</p>
						<DiCss3 />
						<AiFillHtml5 />
						<SiJavascript />
						<DiReact />
						<SiRedux />
					</div>
				</div>
				<div className="basis-1/3 flex-1 relative z-0">
					<div className="flex absolute min-w-full z-10">
						<div className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white">
							<a
								href="https://github.com/JordiM21/let-official-page"
								target="blank"
							>
								Go to Repo
							</a>
							<FaExternalLinkAlt className="ml-2" />
						</div>
						<div className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white">
							<a
								href="https://let-official-page.vercel.app"
								target="blank"
							>
								Go to Live
							</a>
							<FaExternalLinkAlt className="ml-2" />
						</div>
					</div>
					<div className="overflow-hidden">
						<Image
							alt="crud"
							className="rounded-lg object-cover hover:scale-110 hover: transition ease-in cursor-pointer h-64"
							src={crudPage}
						/>
					</div>
					<div className="flex items-center text-white bg-teal-700 justify-center gap-2">
						<p>LET Official Page</p>
						<DiCss3 />
						<AiFillHtml5 />
						<SiJavascript />
						<DiReact />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
