import {useRef} from "react";
import {motion, useScroll, useTransform} from "motion/react";
import {profile} from "../../data/portfolio";
import {ArrowDown, GithubIcon, LinkedinIcon} from "../ui/Icons";

const ease = [0.22, 1, 0.36, 1];
const lineOne = ["Building", "full-stack"];
const lineTwo = ["web", "experiences."];

const Word = ({children, delay, gradient}) => (
	<span className="inline-block overflow-hidden pb-2 align-bottom">
		<motion.span
			className={`inline-block ${gradient ? "text-gradient" : ""}`}
			initial={{y: "110%"}}
			animate={{y: 0}}
			transition={{duration: 1, delay, ease}}
		>
			{children}
		</motion.span>
	</span>
);

export const HeroSection = () => {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll({target: ref, offset: ["start start", "end start"]});

	const contentY = useTransform(scrollYProgress, [0, 1], [0, 180]);
	const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
	const orbOneY = useTransform(scrollYProgress, [0, 1], [0, -220]);
	const orbTwoY = useTransform(scrollYProgress, [0, 1], [0, 160]);
	const gridScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

	return (
		<section ref={ref} id="home" className="relative flex min-h-svh items-center overflow-hidden pt-[72px]">
			{/* Background layers */}
			<motion.div style={{scale: gridScale}} className="grid-bg pointer-events-none absolute inset-0" />
			<motion.div
				style={{y: orbOneY}}
				className="pointer-events-none absolute -top-32 -left-24 h-[480px] w-[480px] rounded-full bg-sky-500/25 blur-[120px]"
			/>
			<motion.div
				style={{y: orbTwoY}}
				className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-500/25 blur-[120px]"
			/>

			<motion.div
				style={{y: contentY, opacity: contentOpacity}}
				className="relative mx-auto w-full max-w-6xl px-5 md:px-8"
			>
				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.8, delay: 0.2, ease}}
					className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-slate-300 backdrop-blur"
				>
					<span className="relative flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
					</span>
					Currently at {profile.current}
				</motion.div>

				<motion.p
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.8, delay: 0.35, ease}}
					className="mt-8 font-mono text-sm tracking-[0.25em] text-sky-400 uppercase"
				>
					Hi, I&apos;m {profile.name}
				</motion.p>

				<h1 className="mt-4 font-display text-[clamp(2.75rem,8.5vw,6.5rem)] leading-[0.98] font-bold tracking-tight text-white">
					<span className="block">
						{lineOne.map((w, i) => (
							<Word key={w} delay={0.45 + i * 0.1}>
								{w}&nbsp;
							</Word>
						))}
					</span>
					<span className="block">
						{lineTwo.map((w, i) => (
							<Word key={w} delay={0.65 + i * 0.1} gradient={i === 1}>
								{w}&nbsp;
							</Word>
						))}
					</span>
				</h1>

				<motion.p
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.8, delay: 0.95, ease}}
					className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl"
				>
					{profile.role} specialising in the <span className="text-slate-200">{profile.stack}</span>. I build
					React front ends, Express APIs and WordPress sites that are fast, clean and a pleasure to use.
				</motion.p>

				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.8, delay: 1.1, ease}}
					className="mt-10 flex flex-wrap items-center gap-4"
				>
					<a
						href="#work"
						className="group inline-flex items-center gap-2 rounded-full bg-sky-400 px-7 py-3.5 font-semibold text-slate-950 shadow-[0_0_40px_-8px] shadow-sky-400/60 transition hover:bg-sky-300"
					>
						View my work
						<ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
					</a>
					<a
						href="#contact"
						className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
					>
						Let&apos;s talk
					</a>
					<div className="ml-1 flex items-center gap-2">
						<a
							href={profile.github}
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
							className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-sky-400/50 hover:text-sky-400"
						>
							<GithubIcon />
						</a>
						<a
							href={profile.linkedin}
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
							className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-sky-400/50 hover:text-sky-400"
						>
							<LinkedinIcon />
						</a>
					</div>
				</motion.div>
			</motion.div>

			<motion.a
				href="#about"
				aria-label="Scroll to about"
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{delay: 1.6, duration: 1}}
				className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs tracking-[0.3em] text-slate-500 uppercase md:flex"
			>
				Scroll
				<span className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
					<motion.span
						className="h-2 w-1 rounded-full bg-sky-400"
						animate={{y: [0, 12, 0], opacity: [1, 0.2, 1]}}
						transition={{duration: 1.8, repeat: Infinity, ease: "easeInOut"}}
					/>
				</span>
			</motion.a>
		</section>
	);
};
