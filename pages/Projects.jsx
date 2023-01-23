import React from "react";
import Image from "next/image";
import ecommercePage from "../public/ecommerce-banner.png";
import rickPage from "../public/rick-banner.png";
import fasebook from "../public/react-pokedex.png";
import crudPage from "../public/Banner-LET.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DiReact, DiCss3 } from "react-icons/di";
import { SiJavascript, SiTailwindcss, SiRedux } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import Link from "next/link";

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
						<Link
							href="https://github.com/JordiM21/Amason"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Repo</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
						<Link
							href="https://amason.vercel.app"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Live</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
					</div>
					<div className="bg-white overflow-hidden">
						<Image
							alt="ecommerce"
							className="object-contain hover:scale-110 hover: transition ease-in cursor-pointer h-64"
							src={ecommercePage}
						/>
					</div>
					<div className="text-white bg-teal-700 justify-center gap-2 rounded-b-md">
						<div className="text-lg text-teal-200 flex justify-center items-center">
							<p>Ecommerce</p>
							<DiCss3 />
							<AiFillHtml5 />
							<SiJavascript />
							<DiReact />
							<SiRedux />
							<TbBrandNextjs />
						</div>
						<p className="text-sm px-4 py-2 text-center">
							<span className="text-gray-800">
								Clone of Amazon,
							</span>{" "}
							Front End project using
							the redux-store and API
							Rest to fetch and
							request data with
							functionallities such as
							filtering products, see
							the similars products on
							the details page,
							register on the
							database, log in, add
							products to cart, buy
							those products and see
							them on the history
						</p>
					</div>
				</div>
				<div className="basis-1/3 flex-1 relative z-0">
					<div className="flex absolute min-w-full z-10">
						<Link
							href="https://github.com/JordiM21/youtube-clone/tree/main"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Repo</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
						<Link
							href="https://youtuve.vercel.app/"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Live</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
					</div>
					<div className="overflow-hidden">
						<Image
							alt="rick page"
							className="object-cover hover:scale-110 hover: transition ease-in cursor-pointer h-64"
							src={rickPage}
						/>
					</div>
					<div className="text-white bg-teal-700 justify-center gap-2 rounded-b-md">
						<div className="text-lg text-teal-200 flex justify-center items-center">
							<p>Youtube Clone</p>
							<DiCss3 />
							<AiFillHtml5 />
							<SiJavascript />
							<DiReact />
						</div>
						<p className="text-sm px-4 py-2 text-center">
							<span className="text-gray-800">
								Video Platform page,
							</span>{" "}
							Front end page made using a Youtube Api to get information and fetch into this awesome page that has features like, see the channels details, see whatever video of youtube, select by category, show related videos when watching one and so on!
						</p>
					</div>
				</div>
				<div className="basis-1/3 flex-1 relative z-0">
					<div className="flex absolute min-w-full z-10">
						<Link
							href="https://github.com/JordiM21/Fasebook-Firebase/"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Repo</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
						<Link
							href="https://fasebook.vercel.app"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Live</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
					</div>
					<div className="overflow-hidden">
						<Image
							alt="pokedex"
							className="object-cover hover:scale-110 hover: transition ease-in cursor-pointer h-64"
							src={fasebook}
						/>
					</div>
					<div className="text-white bg-teal-700 justify-center gap-2 rounded-b-md">
						<div className="text-lg text-teal-200 flex justify-center items-center">
							<p>Facebook Clone</p>
							<DiCss3 />
							<AiFillHtml5 />
							<SiJavascript />
							<DiReact />
							<TbBrandNextjs />
							<SiTailwindcss />
							<IoLogoFirebase />
						</div>
						<p className="text-sm px-4 py-2 text-center">
							<span className="text-gray-800">
								Clone of
								Facebook,
							</span>{" "}
							Full Stack project using
							NextJS and tailwind to
							fetch and modify the
							data in a firebase
							database with
							functionallities such
							as, log in with Google,
							see the feed, what means
							other people's posts,
							comment them, edit your
							posts on your profile
							and delete them
						</p>
					</div>
				</div>
				<div className="basis-1/3 flex-1 relative z-0">
					<div className="flex absolute min-w-full z-10">
						<Link
							href="https://github.com/JordiM21/let-official-page"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Repo</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
						<Link
							href="https://let-official-page.vercel.app"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Live</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
					</div>
					<div className="overflow-hidden">
						<Image
							alt="crud"
							className="object-cover hover:scale-110 hover: transition ease-in cursor-pointer h-64"
							src={crudPage}
						/>
					</div>
					<div className="text-white bg-teal-700 justify-center gap-2 rounded-b-md">
						<div className="text-lg text-teal-200 flex justify-center items-center">
							<p>Learn English Page</p>
							<DiCss3 />
							<AiFillHtml5 />
							<SiJavascript />
							<DiReact />
							<TbBrandNextjs />
							<SiTailwindcss />
						</div>
						<p className="text-sm px-4 py-2 text-center">
							<span className="text-gray-800">
								Langing Page,
							</span>{" "}
							Front End project
							promoting an english
							academy that sells
							courses online and teach
							people how to speak
							english, page made using
							material UI, Tailwind
							and NextJS
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
