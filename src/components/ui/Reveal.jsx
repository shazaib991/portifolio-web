import {motion} from "motion/react";

const ease = [0.22, 1, 0.36, 1];

/** Fades and lifts its children into view the first time they scroll on screen. */
export const Reveal = ({children, delay = 0, y = 40, className = "", as = "div"}) => {
	const Component = motion[as];
	return (
		<Component
			className={className}
			initial={{opacity: 0, y}}
			whileInView={{opacity: 1, y: 0}}
			viewport={{once: true, margin: "-80px 0px"}}
			transition={{duration: 0.8, delay, ease}}
		>
			{children}
		</Component>
	);
};

export const SectionHeading = ({index, eyebrow, title, subtitle, align = "left"}) => {
	const centered = align === "center";
	return (
		<div className={centered ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
			<Reveal>
				<p
					className={`flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-sky-400 uppercase ${centered ? "justify-center" : ""}`}
				>
					<span className="text-slate-500">{index}</span>
					<span className="h-px w-10 bg-sky-400/60" />
					{eyebrow}
				</p>
			</Reveal>
			<Reveal delay={0.08}>
				<h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
			</Reveal>
			{subtitle && (
				<Reveal delay={0.16}>
					<p className="mt-4 text-lg text-slate-400">{subtitle}</p>
				</Reveal>
			)}
		</div>
	);
};
