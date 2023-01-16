import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={router.route}
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{
					transition: 1.5,
				}}
				variants={{
					initialState: {
						opacity: 0,
					},
					animateState: {
						opacity: 1,
					},
					exitState: {},
				}}
			>
				<Component {...pageProps} />
			</motion.div>
		</AnimatePresence>
	);
}

export default MyApp;
