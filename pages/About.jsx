import React from "react";
import Image from "next/image";
import front from "../public/front-end.png";
import back from "../public/back-end.png";
import nocode from "../public/no-code.png";

const About = () => {
	return (
		<div className="px-10 md:px-20 lg:px-40 mt-20">
			<div>
				<h3 className="text-3xl py-1 dark:text-white">
					Services i offer
				</h3>
				<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
					Since the beginning of my journey as a
					freelancer developer, I've done remote
					work for agencies consulted for{" "}
					<span className="text-teal-500">
						startups
					</span>{" "}
					and collaborated with talented people to
					create amazing diigtal products for both
					business and consumer use
				</p>
				<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
					I offer from a wide range of services,
					including programming and teaching
				</p>
			</div>
			<div className=" lg:flex gap-10">
				<div className="group hover:shadow-2xl transition ease-in duration-150 cursor-pointer text-center shadow-lg p-10 rounded-xl my-10 max-w-screen-sm">
					<Image
						className="mx-auto group-hover:scale-110 transition ease-in duration-150 group-hover:drop-shadow-xl"
						alt="front-end"
						src={front}
					/>
					<h3 className="group-hover:underline decoration-teal-600 group-hover:scale-110 transition ease-in duration-150 text-2xl front-medium pt-8 pb-2 dark:text-white">
						Front End
					</h3>
					<p className="py-2 dark:text-gray-400">
						Turning design ideas into useful
						aplications super customized as
						a total responsive web page with
						amazing animations.
					</p>
					<h4 className="py-4 text-teal-600 ">
						Design tools i use
					</h4>
					<p className="group-hover:opacity-70 transition ease-in duration-150 text-gray-800 py-1 dark:text-gray-400">
						Javascript - React - NextJS
					</p>
					<p className="group-hover:opacity-70 transition ease-in duration-150 text-gray-800 py-1 dark:text-gray-400">
						Css - Sass - Tailwind -
						Bootstrap
					</p>
				</div>
				<div className="group hover:shadow-2xl transition ease-in duration-150 cursor-pointer text-center shadow-lg p-10 rounded-xl my-10 max-w-screen-sm">
					<Image
						className="mx-auto group-hover:scale-110 ease-in transition duration-150 group-hover:drop-shadow-xl"
						alt="back-end"
						src={back}
					/>
					<h3 className="group-hover:underline decoration-teal-600 group-hover:scale-110 transition ease-in duration-150 text-2xl front-medium pt-8 pb-2 dark:text-white">
						Back End
					</h3>
					<p className="py-2 dark:text-gray-400">
						Set up the server, the database
						and the relations you need to
						storage and manage information.
					</p>
					<h4 className="py-4 text-teal-600 ">
						Design tools i use
					</h4>
					<p className="group-hover:opacity-70 transition ease-in duration-150 text-gray-800 py-1 dark:text-gray-400">
						NodeJS - Express - Sequelize
					</p>
					<p className="group-hover:opacity-70 transition ease-in duration-150 text-gray-800 py-1 dark:text-gray-400">
						PostreSQL - MySQL
					</p>
				</div>
				<div className="group hover:shadow-2xl transition ease-in duration-150 cursor-pointer text-center shadow-lg  p-10 rounded-xl my-10 max-w-screen-sm">
					<Image
						className="mx-auto my-12 group-hover:scale-110 transition ease-in duration-150 group-hover:drop-shadow-xl"
						alt="no-code"
						src={nocode}
					/>
					<h3 className="group-hover:underline decoration-teal-600 group-hover:scale-110 transition ease-in duration-150 text-2xl front-medium pt-8 pb-2 dark:text-white">
						No-Code Tools
					</h3>
					<p className="py-2 dark:text-gray-400">
						Create custom designs and
						sources such as group of icons,
						characters, identity and
						branding
					</p>
					<h4 className="py-4 text-teal-600">
						Design tools i use
					</h4>
					<p className="group-hover:opacity-70 transition ease-in duration-150 text-gray-800 py-1 dark:text-gray-400">
						Photoshop - Illustrator
					</p>
					<p className="group-hover:opacity-70 transition ease-in duration-150 text-gray-800 py-1 dark:text-gray-400">
						Figma - Adobe XD
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
