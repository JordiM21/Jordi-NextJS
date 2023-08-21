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
					About what i'm good at
				</h3>
				<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
					Embarking on my journey, I initially delved into the realm of <span className="text-teal-500">graphic design</span>, a pivotal point where my passion began to flourish. Over time, I transitioned towards a comprehensive <span className="text-teal-500">Full-Stack development</span> path, acquiring proficiency in both backend services and frontend best practices. My evolving commitment led me to deepen my skills progressively, culminating in my pursuit of excellence through advanced certifications like the <span className="text-teal-500">Meta Advanced React certificate</span>, and specialized courses focusing on <span className="text-teal-500">React</span>.
					<br /><br />
					As a result, my coding journey has been a testament to my dedication. From shaping engaging visual content to architecting intricate backend systems, I have honed my expertise to bridge the gap between design and development. This proficiency enables me to orchestrate seamless collaborations between frontend and backend, fostering synergy within digital projects.
				</p>
				<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
					My prowess encompasses a dual proficiency: adeptness in software development as a <span className="text-teal-500">Full-Stack engineer</span>, and a knack for crafting captivating visual elements. This synergy empowers me to breathe life into holistic digital experiences that resonate with users and businesses alike.
				</p>

			</div>
			<div className=" lg:flex gap-10">
				<div className="transition ease-in duration-150 cursor-pointer text-center shadow-lg p-10 rounded-xl my-10 max-w-screen-sm">
					<Image
						className="mx-auto transition ease-in duration-150"
						alt="front-end"
						src={front}
					/>
					<h3 className="decoration-teal-600 transition ease-in duration-150 text-2xl front-medium pt-8 pb-2 dark:text-white">
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
					<p className="transition ease-in duration-150 text-gray-800 py-1 dark:text-gray-400">
						Javascript - React - NextJS
					</p>
					<p className="transition ease-in duration-150 text-gray-800 py-1 dark:text-gray-400">
						Css - Sass - Tailwind -
						Bootstrap
					</p>
				</div>
				<div className="transition ease-in duration-150 cursor-pointer text-center shadow-lg p-10 rounded-xl my-10 max-w-screen-sm">
					<Image
						className="mx-auto ease-in transition duration-150"
						alt="back-end"
						src={back}
					/>
					<h3 className="decoration-teal-600 transition ease-in duration-150 text-2xl front-medium pt-8 pb-2 dark:text-white">
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
					<p className="transition ease-in duration-150 text-gray-800 py-1 dark:text-gray-400">
						NodeJS - Express - Sequelize
					</p>
					<p className="transition ease-in duration-150 text-gray-800 py-1 dark:text-gray-400">
						PostreSQL - MySQL
					</p>
				</div>
				<div className="transition ease-in duration-150 cursor-pointer text-center shadow-lg  p-10 rounded-xl my-10 max-w-screen-sm">
					<Image
						className="mx-auto my-12 transition ease-in duration-150"
						alt="no-code"
						src={nocode}
					/>
					<h3 className="decoration-teal-600 transition ease-in duration-150 text-2xl front-medium pt-8 pb-2 dark:text-white">
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
					<p className="transition ease-in duration-150 text-gray-800 py-1 dark:text-gray-400">
						Photoshop - Illustrator
					</p>
					<p className="transition ease-in duration-150 text-gray-800 py-1 dark:text-gray-400">
						Figma - Adobe XD
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
