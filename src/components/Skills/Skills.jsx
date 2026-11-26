import {useRef} from "react";
import {motion, useScroll, useTransform} from "motion/react";
import {skillGroups} from "../../data/portfolio";
import {SectionHeading} from "../ui/Reveal";

const rowOne = ["React", "JavaScript", "Express", "MongoDB", "TailwindCSS", "Mongoose", "Firebase"];
const rowTwo = ["WordPress", "Elementor", "Git & GitHub", "REST APIs", "Claude Code", "HTML & CSS", "Node.js"];

const ScrollRow = ({items, x, outline}) => (
	<motion.div style={{x}} className="flex w-max gap-10 whitespace-nowrap will-change-transform">
		{[...items, ...items].map((item, i) => (
			<span
				key={i}
				className={`flex items-center gap-10 font-display text-5xl font-bold tracking-tight md:text-7xl ${
					outline ? "text-outline" : "text-white/90"
				}`}
			>
				{item}
				<span className="h-3 w-3 rounded-full bg-sky-400" />
			</span>
		))}
	</motion.div>
);

const container = {hidden: {}, show: {transition: {staggerChildren: 0.08}}};
const card = {
	hidden: {opacity: 0, y: 40},
	show: {opacity: 1, y: 0, transition: {duration: 0.7, ease: [0.22, 1, 0.36, 1]}},
};

export const Skills = () => {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "end start"]});
	const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
	const xRight = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

	return (
		<section id="skills" ref={ref} className="relative overflow-hidden py-28 md:py-36">
			<div className="mx-auto max-w-6xl px-5 md:px-8">
				<SectionHeading
					index="03"
					eyebrow="Skills"
					title="The toolkit."
					subtitle="Technologies I use every day to take ideas from a blank file to production."
				/>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{once: true, margin: "-80px 0px"}}
					className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
				>
					{skillGroups.map((group, i) => (
						<motion.div
							key={group.title}
							variants={card}
							whileHover={{y: -6}}
							className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6"
						>
							<div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-sky-400/0 blur-3xl transition-colors duration-500 group-hover:bg-sky-400/20" />
							<div className="flex items-center justify-between">
								<h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
								<span className="font-mono text-xs text-slate-600">0{i + 1}</span>
							</div>
							<div className="mt-5 flex flex-wrap gap-2">
								{group.items.map((item) => (
									<span
										key={item}
										className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-300 transition-colors group-hover:border-sky-400/20"
									>
										{item}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			<div className="mt-24 space-y-6 select-none" aria-hidden>
				<ScrollRow items={rowOne} x={xLeft} />
				<ScrollRow items={rowTwo} x={xRight} outline />
			</div>
		</section>
	);
};
