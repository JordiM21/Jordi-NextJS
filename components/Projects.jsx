import React from "react";
import Image from "next/image";
import ecommercePage from "../public/ecommerce-banner.gif";
import chatgpt from "../public/let-landing.gif";
import crudPage from "../public/react-pokedex.gif";
import letStudents from '../public/let-students-vid.gif'
import poly from '../public/poly-app-screen.gif'
import video1 from '../public/FogTL.gif'
import { FaExternalLinkAlt } from "react-icons/fa";
import { DiReact, DiCss3, DiFirebase } from "react-icons/di";
import { SiJavascript, SiTailwindcss, SiRedux, SiFirebase, SiTypescript } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import Link from "next/link";
import { BsType } from "react-icons/bs";


const Projects = () => {

	const noLiveServer = () => {
		alert("This is a react native aplication so there is not a live server available on the web but, you can always take a look at the repo!")
	}

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
							href="#"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Private Repo</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
						<Link
							href="https://poly-let.vercel.app/"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Live</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
					</div>
					<div className="bg-white overflow-hidden">
						<Image
							alt="ecommerce page"
							className="object-cover hover:scale-110 hover: transition ease-in cursor-pointer h-64"
							src={poly}
						/>
					</div>
					<div className="text-white bg-teal-700 justify-center gap-2 rounded-b-md">
						<div className="text-lg text-teal-200 flex justify-center items-center">
							<p>Poly App (Saas Software)</p>
							<DiCss3 />
							<AiFillHtml5 />
							<SiTypescript />
							<SiJavascript />
							<DiReact />
							<SiRedux />
							<TbBrandNextjs />
						</div>
						<p className="text-sm px-4 py-2 text-center">
							<span className="text-gray-800">
								Software as a Service App,
							</span>{" "}
							This is a completely functional app built from scratch that is directly connected to stripe in order to handle payments and also takes fees from the subaccounts that receive payments. Some of the features are: Funnel builder with drag and drop, publishable pages, steps to follow, display product catalog, email automations that sends mails to users when invited, when first creating agency, recurring payments, etc..
						</p>
					</div>
				</div>
				<div className="basis-1/3 flex-1 relative z-0">
					<div className="flex absolute min-w-full z-10">
						<Link
							href="https://github.com/JordiM21/let-students"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Repo</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
						<Link
							href="https://let-students.vercel.app/Dashboard"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Live</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
					</div>
					<div className="bg-white overflow-hidden">
						<Image
							alt="ecommerce page"
							className="object-cover hover:scale-110 hover: transition ease-in cursor-pointer h-64"
							src={letStudents}
						/>
					</div>
					<div className="text-white bg-teal-700 justify-center gap-2 rounded-b-md">
						<div className="text-lg text-teal-200 flex justify-center items-center">
							<p>LET Students App </p>
							<DiCss3 />
							<AiFillHtml5 />
							<SiJavascript />
							<DiReact />
							<SiRedux />
							<TbBrandNextjs />
							<SiTailwindcss />
							<SiFirebase />
						</div>
						<p className="text-sm px-4 py-2 text-center">
							<span className="text-gray-800">
								LET Academy official app
							</span>{" "}
							was built by a talented team of people around Europe, among those: UX/UI Designers, Back-End Developers, Testers and Front-End Developers including me on the last one. This space is one of the biggest pages i've built and i am really happy with the result. Some of the functionallities are: page handling by role, progress updating, Activities by Level, Unlock rewards by progress, customization of character and so more...
						</p>
					</div>
				</div>
				<div className="basis-1/3 flex-1 relative z-0">
					<div className="flex absolute min-w-full z-10">
						<Link
							href="https://github.com/JordiM21/DeliveryApp-RNative"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Repo</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
						<Link
							onClick={noLiveServer}
							href="https://github.com/JordiM21/DeliveryApp-RNative"
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
							className="object-contain bg-slate-300 hover:scale-110 hover: transition ease-in cursor-pointer h-64"
							src={video1}
						/>
					</div>
					<div className="text-white bg-teal-700 justify-center gap-2 rounded-b-md">
						<div className="text-lg text-teal-200 flex justify-center items-center">
							<p>Delivery App</p>
							<DiCss3 />
							<AiFillHtml5 />
							<SiJavascript />
							<DiReact />
							<SiTailwindcss />
						</div>
						<p className="text-sm px-4 py-2 text-center">
							<span className="text-gray-800">
								Copy of a delivery mobile app,
							</span>{" "}
							I was part of a talented team of graphic designers, backend developers and QA testers, I worked on the frontend using react-native and tailwind to make it multiplatform, we implement all the functionallities for a delivery app such as, add products to the cart, sum them, delete them, purchase, filter restaurants
						</p>
					</div>
				</div>
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
							alt="ecommerce page"
							className="object-cover hover:scale-110 hover: transition ease-in cursor-pointer h-64"
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
							href="https://github.com/JordiM21/let-app"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Repo</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
						<Link
							href="https://let-app.vercel.app/"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Live</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
					</div>
					<div className="overflow-hidden">
						<Image
							alt="Let Landing"
							className="object-cover hover:scale-110 hover: transition ease-in cursor-pointer h-64"
							src={chatgpt}
						/>
					</div>
					<div className="text-white bg-teal-700 justify-center gap-2 rounded-b-md">
						<div className="text-lg text-teal-200 flex justify-center items-center">
							<p>LET Academy Landing</p>
							<DiCss3 />
							<AiFillHtml5 />
							<SiJavascript />
							<DiReact />
							<SiTypescript />
							<TbBrandNextjs />
							<SiTailwindcss />
							<SiFirebase />
						</div>
						<p className="text-sm px-4 py-2 text-center">
							<span className="text-gray-800">
								Official Landing Page to promote the english program,
							</span>{" "}
							This project was one of the first i did for a private or third person, this client wanted a landing page that shows all the information and benefits of the company, they also wanted to create forms for interested people so they could get in contact with them easily.
						</p>
					</div>
				</div>
				<div className="basis-1/3 flex-1 relative z-0">
					<div className="flex absolute min-w-full z-10">
						<Link
							href="https://github.com/JordiM21/Fasebook-Firebase"
							target="blank"
							className="transition ease-in cursor-pointer dark:hover:bg-gray-900 flex justify-center text-white bg-teal-700 hover:bg-white hover:text-teal-700 w-1/2 h-8  place-items-center dark:bg-white dark:text-gray-900 dark:hover:text-white"
						>
							<a>Go to Repo</a>
							<FaExternalLinkAlt className="ml-2" />
						</Link>
						<Link
							href="https://fasebook.vercel.app/"
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
							<p>Social Media App</p>
							<AiFillHtml5 />
							<SiJavascript />
							<DiReact />
							<TbBrandNextjs />
							<SiTailwindcss />
							<SiFirebase />
						</div>
						<p className="text-sm px-4 py-2 text-center">
							<span className="text-gray-800">
								Social Media Clone,
							</span>{" "}
							was a Full Stack Project built by myself as a simultaneus way to communicate ideas
							using
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
			</div>
		</div>
	);
};

export default Projects;
