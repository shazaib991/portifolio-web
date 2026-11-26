import {useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import {projectCategories, projects} from "../../data/portfolio";
import {ArrowUpRight, GithubIcon, GlobeIcon, PhoneIcon, ServerIcon} from "../ui/Icons";
import {SectionHeading} from "../ui/Reveal";

const hostOf = (url) => new URL(url).hostname.replace(/^www\./, "");

const Preview = ({project}) => {
	if (project.image) {
		return (
			<img
				src={project.image}
				alt={`${project.title} screenshot`}
				loading="lazy"
				className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
			/>
		);
	}

	if (project.category === "Backend") {
		return (
			<div className="flex h-full flex-col bg-slate-950 p-5 font-mono text-[13px]">
				<div className="flex gap-1.5">
					<span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
					<span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
					<span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
				</div>
				<p className="mt-5 text-slate-500">$ curl</p>
				<p className="mt-2 break-all text-sky-300">{project.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}</p>
				<p className="mt-2 text-slate-600">// REST API</p>
				<ServerIcon className="mt-auto ml-auto h-9 w-9 text-slate-700 transition-colors duration-500 group-hover:text-sky-400" />
			</div>
		);
	}

	const Icon = project.category === "Mobile" ? PhoneIcon : GlobeIcon;
	return (
		<div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950">
			<div className="grid-bg absolute inset-0 opacity-60" />
			<div className="relative flex flex-col items-center gap-3 text-center">
				<span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sky-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
					<Icon className="h-7 w-7" />
				</span>
				<span className="font-mono text-sm text-slate-400">{hostOf(project.live)}</span>
			</div>
		</div>
	);
};

const ProjectCard = ({project}) => (
	<motion.article
		layout
		initial={{opacity: 0, y: 30, scale: 0.97}}
		whileInView={{opacity: 1, y: 0, scale: 1}}
		viewport={{once: true, margin: "-60px 0px"}}
		exit={{opacity: 0, scale: 0.95}}
		transition={{duration: 0.45, ease: [0.22, 1, 0.36, 1]}}
		className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-sky-400/30"
	>
		<a
			href={project.live}
			target="_blank"
			rel="noreferrer"
			className="relative block aspect-[16/10] overflow-hidden border-b border-white/10"
			aria-label={`Open ${project.title}`}
		>
			<Preview project={project} />
			<span className="absolute top-3 left-3 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
				{project.category}
			</span>
		</a>

		<div className="flex flex-1 flex-col p-6">
			<h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
			<p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>
			<div className="mt-4 flex flex-wrap gap-1.5">
				{project.tags.map((tag) => (
					<span key={tag} className="rounded-md bg-sky-400/10 px-2 py-0.5 font-mono text-xs text-sky-300">
						{tag}
					</span>
				))}
			</div>
			<div className="mt-5 flex items-center gap-5 border-t border-white/10 pt-4 text-sm font-medium">
				<a
					href={project.live}
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-sky-400"
				>
					{project.liveLabel ?? (project.category === "Backend" ? "Live API" : "Live site")}
					<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
				</a>
				{project.code && (
					<a
						href={project.code}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
					>
						<GithubIcon className="h-4 w-4" />
						Source
					</a>
				)}
			</div>
		</div>
	</motion.article>
);

export const Work = () => {
	const [filter, setFilter] = useState("All");
	const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
	const countFor = (c) => (c === "All" ? projects.length : projects.filter((p) => p.category === c).length);

	return (
		<section id="work" className="relative py-28 md:py-36">
			<div className="mx-auto max-w-6xl px-5 md:px-8">
				<div className="flex flex-col gap-10">
					<SectionHeading
						index="04"
						eyebrow="Selected work"
						title="Things I've built."
						subtitle="Front ends, APIs, a mobile app and client WordPress sites — every project from my CV, live."
					/>

					<div className="-mx-5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:px-0">
						<div className="flex w-max gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
							{projectCategories.map((c) => (
								<button
									key={c}
									onClick={() => setFilter(c)}
									className={`relative isolate rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors ${
										filter === c ? "text-slate-950" : "text-slate-400 hover:text-white"
									}`}
								>
									{filter === c && (
										<motion.span
											layoutId="work-filter"
											className="absolute inset-0 -z-10 rounded-full bg-sky-400"
											transition={{type: "spring", stiffness: 380, damping: 32}}
										/>
									)}
									{c}
									<span className={`ml-1.5 text-xs ${filter === c ? "text-slate-800" : "text-slate-600"}`}>
										{countFor(c)}
									</span>
								</button>
							))}
						</div>
					</div>
				</div>

				<motion.div layout className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					<AnimatePresence mode="popLayout">
						{visible.map((project) => (
							<ProjectCard key={project.title} project={project} />
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
};
