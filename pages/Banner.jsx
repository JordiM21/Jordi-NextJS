import React from "react";
import jordiBanner from "../public/jordi-banner.png";
import Image from "next/image";
import { BsArrowDownCircle } from "react-icons/bs";

const Banner = () => {
	return (
		<div className="overflow-hidden group flex justify-around bg-orange-500 items-center hover:shadow-2xl transition ease-in duration-150 cursor-pointer text-center shadow-lg rounded-xl mx-auto w-4/5">
			<Image
				className="w-48 group-hover:drop-shadow-2xl group-hover:scale-110 transition 1s ease-in"
				src={jordiBanner}
				alt="logo-cta"
			/>
			<div className="flex flex-col items-center gap-4 transition ease-in 1s">
				<h2 className="text-white font-black transition ease-in 1s ">
					C'mon let's do something together!
				</h2>
				<BsArrowDownCircle className="text-3xl text-white bg-orange-500 group-hover:bg-white group-hover:text-orange-500 transition ease-in 1s rounded-full" />
			</div>
		</div>
	);
};

export default Banner;
