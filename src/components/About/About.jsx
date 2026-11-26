import {useEffect, useRef} from "react";
import {animate, motion, useInView, useScroll, useTransform} from "motion/react";
import profileImg from "../../assets/profile.png";
import {education, experience, interests, profile, projects} from "../../data/portfolio";
import {GradCapIcon, SparkIcon} from "../ui/Icons";
import {Reveal, SectionHeading} from "../ui/Reveal";

const Counter = ({to, suffix = ""}) => {
	const ref = useRef(null);
	const inView = useInView(ref, {once: true, margin: "-60px 0px"});

	useEffect(() => {
		if (!inView) return;
		const controls = animate(0, to, {
			duration: 1.6,
			ease: [0.22, 1, 0.36, 1],
			onUpdate: (v) => {
				if (ref.current) ref.current.textContent = Math.round(v) + suffix;
			},
		});
		return () => controls.stop();
	}, [inView, to, suffix]);

	return <span ref={ref}>0{suffix}</span>;
};

const stats = [
	{value: projects.length, label: "Projects shipped"},
	{value: projects.filter((p) => p.category === "Backend").length, label: "REST APIs built"},
	{value: experience.length, label: "Professional roles"},
];

export const About = () => {
	const imageRef = useRef(null);
	const {scrollYProgress} = useScroll({target: imageRef, offset: ["start end", "end start"]});
	const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
	const ringRotate = useTransform(scrollYProgress, [0, 1], [-30, 60]);

	return (
		<section id="about" className="relative overflow-x-clip py-28 md:py-36">
			<div className="mx-auto grid max-w-6xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
				<Reveal className="relative mx-auto w-full max-w-sm">
					<motion.div ref={imageRef} style={{y: imageY}} className="relative aspect-square">
						<motion.div
							style={{rotate: ringRotate}}
							className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-sky-400 via-indigo-500 to-transparent opacity-70 blur-sm"
						/>
						<div className="relative h-full overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-200">
							<img
								src={profileImg}
								alt={`Portrait of ${profile.name}`}
								className="h-full w-full scale-[1.15] object-cover"
								loading="lazy"
							/>
						</div>
						<div className="absolute -right-4 -bottom-6 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-2xl backdrop-blur md:-right-8">
							<p className="text-xs tracking-wider text-slate-400 uppercase">Stack</p>
							<p className="font-display text-lg font-semibold text-white">MongoDB · Express · React · Node</p>
						</div>
					</motion.div>
				</Reveal>

				<div>
					<SectionHeading index="01" eyebrow="About me" title="Engineer by training, builder by habit." />
					<Reveal delay={0.2}>
						<p className="mt-6 text-lg leading-relaxed text-slate-400">{profile.summary}</p>
					</Reveal>
					<Reveal delay={0.25}>
						<p className="mt-4 text-lg leading-relaxed text-slate-400">
							Today I work as a {profile.role.toLowerCase()} at{" "}
							<span className="text-slate-200">{profile.current}</span>, after more than a year shipping MERN stack
							features at Spiderhunts Technologies.
						</p>
					</Reveal>

					<div className="mt-10 grid grid-cols-3 gap-3 md:gap-4">
						{stats.map((s, i) => (
							<Reveal key={s.label} delay={0.3 + i * 0.08}>
								<div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
									<p className="font-display text-3xl font-bold text-gradient md:text-4xl">
										<Counter to={s.value} suffix="+" />
									</p>
									<p className="mt-1 text-xs text-slate-400 md:text-sm">{s.label}</p>
								</div>
							</Reveal>
						))}
					</div>

					<Reveal delay={0.4}>
						<div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
							<span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-400/10 text-sky-400">
								<GradCapIcon />
							</span>
							<div className="min-w-0 flex-1">
								<p className="font-semibold text-white">{education.degree}</p>
								<p className="text-sm text-slate-400">{education.school}</p>
							</div>
							<span className="font-mono text-xs text-slate-500 max-sm:hidden">{education.period}</span>
						</div>
					</Reveal>

					<Reveal delay={0.45}>
						<div className="mt-6 flex flex-wrap items-center gap-2">
							<SparkIcon className="h-4 w-4 text-sky-400" />
							{interests.map((item) => (
								<span key={item} className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300">
									{item}
								</span>
							))}
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
};
