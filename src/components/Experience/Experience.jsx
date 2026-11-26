import {useRef} from "react";
import {motion, useScroll, useSpring} from "motion/react";
import {experience} from "../../data/portfolio";
import {Reveal, SectionHeading} from "../ui/Reveal";

export const Experience = () => {
	const listRef = useRef(null);
	const {scrollYProgress} = useScroll({target: listRef, offset: ["start 70%", "end 60%"]});
	const lineScale = useSpring(scrollYProgress, {stiffness: 120, damping: 30});

	return (
		<section id="experience" className="relative py-28 md:py-36">
			<div className="mx-auto max-w-6xl px-5 md:px-8">
				<SectionHeading
					index="02"
					eyebrow="Experience"
					title="Where I've worked."
					subtitle="From a paid internship to MERN stack development, and now a role in the UAE."
				/>

				<div ref={listRef} className="relative mt-16 md:mt-20">
					{/* Track + animated progress line */}
					<div className="absolute top-2 bottom-2 left-[7px] w-px bg-white/10 md:left-[calc(30%+7px)]" />
					<motion.div
						style={{scaleY: lineScale}}
						className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-sky-400 to-indigo-500 md:left-[calc(30%+7px)]"
					/>

					<ol className="space-y-14">
						{experience.map((job, i) => (
							<li key={job.company} className="relative grid gap-3 pl-10 md:grid-cols-[30%_1fr] md:gap-0 md:pl-0">
								<Reveal delay={0.05} className="md:pr-12 md:text-right">
									<p className="font-mono text-sm text-sky-400">{job.period}</p>
									<p className="mt-1 text-sm text-slate-500">{job.location}</p>
								</Reveal>

								{/* Observe the unscaled wrapper so the trigger area does not depend on the dot's own scale. */}
								<motion.span
									initial="hidden"
									whileInView="show"
									viewport={{once: true, margin: "-40px 0px"}}
									className="absolute top-1 left-0 h-[15px] w-[15px] md:left-[30%]"
								>
									<motion.span
										variants={{hidden: {scale: 0}, show: {scale: 1}}}
										transition={{type: "spring", stiffness: 300, damping: 18, delay: 0.1}}
										className={`grid h-full w-full place-items-center rounded-full border-2 border-slate-950 ${
											job.current ? "bg-emerald-400" : "bg-sky-400"
										}`}
									>
										{job.current && (
											<span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/60" />
										)}
									</motion.span>
								</motion.span>

								<Reveal delay={0.1 + i * 0.02} className="md:pl-12">
									<div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-sky-400/30 hover:bg-white/[0.05] md:p-7">
										<div className="flex flex-wrap items-center gap-3">
											<h3 className="font-display text-2xl font-semibold text-white">{job.role}</h3>
											{job.current && (
												<span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
													Current
												</span>
											)}
										</div>
										<p className="mt-1 text-slate-300">{job.company}</p>
										<ul className="mt-4 space-y-2">
											{job.points.map((pt) => (
												<li key={pt} className="flex gap-3 text-slate-400">
													<span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sky-400" />
													{pt}
												</li>
											))}
										</ul>
									</div>
								</Reveal>
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
};
