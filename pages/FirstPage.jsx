import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillMail, AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiSass, DiNodejsSmall } from "react-icons/di";
import {
	SiTailwindcss,
	SiPostgresql,
	SiSequelize,
	SiPostman,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import blackJordi from "../public/avatar-black.png";
import whiteJordi from "../public/avatar-white.png";
import Image from "next/image";

const FirstPage = ({ darkMode }) => {
	return (
		<div className="px-10 md:px-20 lg:px-40 pt-12">
			<div>
				<div className="group text-center p-10">
					<h2 className="text-6xl py-2 text-teal-800 font-medium md:text-8xl dark:text-teal-600">
						Jordi Mantilla
					</h2>
					<h3 className="text-2xl py-2 md:text-4xl dark:text-white">
						Software Developer
					</h3>
					<p className=" cursor-pointer text-xl py-5 leading-7 text-gray-600 dark:text-gray-400 md:text-xl max-w-lg mx-auto">
						<span className="underline decoration-yellow-300 group-hover:bg-yellow-300 transition ease-in  cursor-pointer dark:group-hover:text-black rounded-l-md">
							Colom
						</span>
						<span className="underline decoration-blue-300 group-hover:bg-blue-300 transition ease-in  cursor-pointer dark:group-hover:text-black">
							bi
						</span>
						<span className="underline decoration-red-300 group-hover:bg-red-300 transition ease-in  cursor-pointer dark:group-hover:text-black rounded-r-md">
							an
						</span>{" "}
						developer based on the south of{" "}
						<span className="underline decoration-green-300 group-hover:bg-green-300 transition ease-in  cursor-pointer dark:group-hover:text-black rounded-l-md">
							It
						</span>
						<span className="underline decoration-white group-hover:bg-white transition ease-in  cursor-pointer dark:group-hover:text-black">
							a
						</span>
						<span className="underline decoration-red-300 group-hover:bg-red-300 transition ease-in  cursor-pointer dark:group-hover:text-black rounded-r-md">
							ly
						</span>{" "}
						ready to turn your ideas into
						reality with code.
					</p>
				</div>
			</div>
			<div className="text-5xl flex align-middle justify-center gap-10 py-3 text-gray-600">
				<a
					href="https://www.linkedin.com/in/jordi-mantilla21/"
					target="blank"
				>
					<BsLinkedin className="hover:text-teal-900 dark:hover:text-white cursor-pointer hover:scale-110 transition ease-in duration-100" />
				</a>
				<a
					href="https://github.com/JordiM21"
					target="blank"
				>
					<BsGithub className="hover:text-teal-900 dark:hover:text-white cursor-pointer hover:scale-110 transition ease-in duration-100" />
				</a>
				<a
					href="mailto:jordimantilla21@gmail.com"
					target="blank"
				>
					<AiFillMail className="hover:text-teal-900 dark:hover:text-white cursor-pointer hover:scale-110 transition ease-in duration-100" />
				</a>
			</div>
			<div className="border-solid border-b-2 border-b-teal-500 dark:border-b-teal-400 mx-auto bg-gradient-to-b  from-teal-500 dark:from-teal-400 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-120 md:w-120">
				<Image
					alt="personal-logo"
					src={darkMode ? blackJordi : whiteJordi}
				/>
			</div>
			<div className="relative max-lg:opacity-0">
				<AiFillHtml5 className="text-orange-500 left-14 bottom-0 cursor-pointer text-8xl absolute animate-soft-bounce hover:text-teal-800 dark:hover:text-teal-300 duration-75 ease-in " />
				<DiCss3 className="text-blue-700 -top-52 left-5 cursor-pointer text-8xl absolute animate-soft-bounce hover:text-teal-800 dark:hover:text-teal-300 duration-75 ease-in" />
				<TbBrandJavascript className="text-yellow-400 bottom-0 left-48 cursor-pointer text-8xl absolute animate-soft-bounce hover:text-teal-800 dark:hover:text-teal-300 duration-75 ease-in" />
				<DiReact className="text-teal-400 -top-80 cursor-pointer text-8xl absolute animate-soft-bounce hover:text-teal-800 dark:hover:text-white duration-75 ease-in" />
				<DiSass className="text-rose-500 left-32 -top-52 cursor-pointer text-8xl absolute animate-soft-bounce hover:text-teal-800 dark:hover:text-teal-300 duration-75 ease-in" />
				<SiTailwindcss className="text-blue-500 right-14 bottom-0 cursor-pointer text-8xl absolute animate-soft-bounce hover:text-teal-800 dark:hover:text-teal-300 duration-75 ease-in" />
				<DiNodejsSmall className="text-green-600 -top-52 right-5  cursor-pointer text-8xl absolute animate-soft-bounce hover:text-teal-800 dark:hover:text-teal-300 duration-75 ease-in" />
				<SiPostgresql className="text-blue-900 right-0 -top-72 cursor-pointer text-8xl absolute animate-soft-bounce hover:text-teal-800 dark:hover:text-teal-300 duration-75 ease-in" />
				<SiSequelize className="text-blue-800 right-32 -top-52 cursor-pointer text-8xl absolute animate-soft-bounce hover:text-teal-800 dark:hover:text-teal-300 duration-75 ease-in" />
				<SiPostman className="text-orange-400 bottom-0 right-48 cursor-pointer text-8xl absolute animate-soft-bounce hover:text-teal-800 dark:hover:text-teal-300 duration-75 ease-in" />
			</div>
		</div>
	);
};

export default FirstPage;
