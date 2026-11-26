import {useEffect, useState} from "react";
import {AnimatePresence, motion, useMotionValueEvent, useScroll} from "motion/react";
import {navLinks} from "../../data/portfolio";
import {CloseIcon, MenuIcon} from "../ui/Icons";

const useActiveSection = () => {
	const [active, setActive] = useState("home");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
			},
			{rootMargin: "-45% 0px -50% 0px"}
		);
		navLinks.forEach(({id}) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	return active;
};

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const active = useActiveSection();
	const {scrollY} = useScroll();

	useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "";
	}, [isMenuOpen]);

	return (
		<>
			<motion.header
				initial={{y: -80, opacity: 0}}
				animate={{y: 0, opacity: 1}}
				transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
				className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
					scrolled ? "border-b border-white/10 bg-slate-950/70 backdrop-blur-xl" : "border-b border-transparent"
				}`}
			>
				<nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:px-8">
					<a href="#home" className="group flex items-center gap-3">
						<span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 font-display text-sm font-bold text-slate-950 transition-transform duration-300 group-hover:rotate-6">
							SM
						</span>
						<span className="font-display text-lg font-semibold tracking-tight text-white max-sm:hidden">
							Shazaib<span className="text-sky-400">.</span>
						</span>
					</a>

					<ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 max-md:hidden">
						{navLinks.map(({id, label}) => (
							<li key={id}>
								<a
									href={`#${id}`}
									className={`relative isolate block rounded-full px-4 py-1.5 text-sm transition-colors ${
										active === id ? "text-white" : "text-slate-400 hover:text-white"
									}`}
								>
									{active === id && (
										<motion.span
											layoutId="nav-pill"
											className="absolute inset-0 -z-10 rounded-full bg-white/10"
											transition={{type: "spring", stiffness: 380, damping: 32}}
										/>
									)}
									{label}
								</a>
							</li>
						))}
					</ul>

					<a
						href="#contact"
						className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 max-md:hidden"
					>
						Hire me
					</a>

					<button
						className="text-white md:hidden"
						onClick={() => setIsMenuOpen(true)}
						aria-label="Open menu"
						aria-expanded={isMenuOpen}
					>
						<MenuIcon />
					</button>
				</nav>
			</motion.header>

			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className="fixed inset-0 z-[60] flex flex-col bg-slate-950/95 px-6 backdrop-blur-xl md:hidden"
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						transition={{duration: 0.3}}
					>
						<div className="flex h-[72px] items-center justify-end">
							<button className="text-white" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
								<CloseIcon />
							</button>
						</div>
						<ul className="mt-8 flex flex-col gap-2">
							{navLinks.map(({id, label}, i) => (
								<motion.li
									key={id}
									initial={{opacity: 0, x: -30}}
									animate={{opacity: 1, x: 0}}
									transition={{delay: 0.05 + i * 0.06, ease: [0.22, 1, 0.36, 1], duration: 0.5}}
								>
									<a
										href={`#${id}`}
										onClick={() => setIsMenuOpen(false)}
										className={`flex items-baseline gap-4 py-2 font-display text-4xl font-semibold ${
											active === id ? "text-white" : "text-slate-500"
										}`}
									>
										<span className="font-mono text-xs text-sky-400">0{i + 1}</span>
										{label}
									</a>
								</motion.li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
