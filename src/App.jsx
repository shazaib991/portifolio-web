import {useEffect} from "react";
import Lenis from "lenis";
import {MotionConfig, motion, useScroll, useSpring} from "motion/react";
import "./App.css";
import {About} from "./components/About/About";
import {Contact} from "./components/Contact/Contact";
import {Experience} from "./components/Experience/Experience";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {HeroSection} from "./components/HeroSection/HeroSection";
import {Skills} from "./components/Skills/Skills";
import {Work} from "./components/Work/Work";

const useSmoothScroll = () => {
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lenis = new Lenis({autoRaf: true, lerp: 0.09, anchors: {offset: -72}});
		return () => lenis.destroy();
	}, []);
};

const ScrollProgress = () => {
	const {scrollYProgress} = useScroll();
	const scaleX = useSpring(scrollYProgress, {stiffness: 140, damping: 30, restDelta: 0.001});
	return (
		<motion.div
			style={{scaleX}}
			className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-sky-400 to-indigo-500"
		/>
	);
};

function App() {
	useSmoothScroll();

	return (
		<MotionConfig reducedMotion="user">
			<ScrollProgress />
			<Header />
			<main>
				<HeroSection />
				<About />
				<Experience />
				<Skills />
				<Work />
				<Contact />
			</main>
			<Footer />
		</MotionConfig>
	);
}

export default App;
