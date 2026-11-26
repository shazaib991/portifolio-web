import ebayImg from "../assets/ebay-clone.png";
import youtubeImg from "../assets/youtube-clone.png";
import drCeramicImg from "../assets/dr-ceramic.png";
import elmoImg from "../assets/elmo.png";
import jnImg from "../assets/jn.png";

export const profile = {
	name: "Shazaib Munawar",
	role: "Software Developer",
	stack: "MERN Stack",
	current: "Almerak, UAE",
	email: "shazaib424647@gmail.com",
	github: "https://github.com/shazaib991",
	linkedin: "https://www.linkedin.com/in/shazaib-munawar-ba2372255/",
	summary:
		"Motivated software engineering student with a strong interest in artificial intelligence and modern software development practices. Passionate about learning, problem-solving, and contributing to collaborative projects.",
};

export const navLinks = [
	{id: "home", label: "Home"},
	{id: "about", label: "About"},
	{id: "experience", label: "Experience"},
	{id: "skills", label: "Skills"},
	{id: "work", label: "Work"},
	{id: "contact", label: "Contact"},
];

export const education = {
	degree: "BS Software Engineering",
	school: "Islamia University, Bahawalpur",
	period: "2022 – 2026",
};

export const interests = ["Artificial Intelligence", "AI Software Development", "Continuous Learning", "Vibe Coding"];

export const experience = [
	{
		role: "Software Developer",
		company: "Almerak",
		location: "UAE",
		period: "Present",
		current: true,
		points: ["Currently working here as a software developer."],
	},
	{
		role: "MERN Stack Developer",
		company: "Spiderhunts Technologies (Pvt) Ltd",
		location: "Pakistan",
		period: "Feb 2025 – Mar 2026",
		points: [
			"Worked on software development tasks, bug fixing, and collaborative projects across the MERN stack.",
			"Recognised by the CEO for sincerity, dedication and hard work. Experience letter available.",
		],
	},
	{
		role: "Intern / Junior Developer",
		company: "Syslify",
		location: "Online · Paid",
		period: "3 Months",
		points: ["Worked on software development tasks, bug fixing, and collaborative projects."],
	},
];

export const skillGroups = [
	{title: "Programming", items: ["JavaScript", "React"]},
	{title: "Web", items: ["HTML", "CSS", "JavaScript", "React", "Express", "TailwindCSS"]},
	{title: "Databases", items: ["Firebase", "MongoDB", "Mongoose"]},
	{title: "Tools", items: ["Git", "GitHub", "VS Code", "GitHub Copilot", "Vibe Coding"]},
	{title: "AI", items: ["Claude Code", "Claude Opus 5.5", "AI-assisted development"]},
	{title: "CMS", items: ["WordPress", "Custom Plugins", "Elementor"]},
];

export const projectCategories = ["All", "Frontend", "Backend", "Mobile", "WordPress"];

export const projects = [
	// Frontend
	{
		title: "React eBay Clone",
		category: "Frontend",
		description: "A marketplace UI modelled on eBay, built in React with Redux for state management.",
		tags: ["React", "TypeScript", "Tailwind", "Redux"],
		image: ebayImg,
		live: "https://ebay-clone-ashy.vercel.app/",
		code: "https://github.com/shazaib991/ebay-clone",
	},
	{
		title: "React YouTube Clone",
		category: "Frontend",
		description: "A video platform UI modelled on YouTube, powered by its own companion API.",
		tags: ["React", "Tailwind", "Redux"],
		image: youtubeImg,
		live: "https://react-youtube-clone-woad.vercel.app/",
		code: "https://github.com/shazaib991/react-youtube-clone",
	},
	{
		title: "Dr. Ceramic Car Detailer",
		category: "Frontend",
		description: "Marketing site for a ceramic coating and car detailing studio.",
		tags: ["HTML", "CSS", "JavaScript"],
		image: drCeramicImg,
		live: "https://dr-ceramic.vercel.app/",
		code: "https://github.com/shazaib991/dr-ceramic",
	},
	{
		title: "JN Car Detailer",
		category: "Frontend",
		description: "Responsive service website for a car detailing business.",
		tags: ["React", "Tailwind"],
		image: jnImg,
		live: "https://jn-car-detailer.vercel.app/",
		code: "https://github.com/shazaib991/jn-car-detailer",
	},
	{
		title: "Elmo Detailing",
		category: "Frontend",
		description: "Landing page for a car detailing brand.",
		tags: ["HTML", "CSS", "JavaScript"],
		image: elmoImg,
		live: "https://elmo-detailing.vercel.app/",
		code: "https://github.com/shazaib991/elmo-detailing",
	},
	{
		title: "Optic Car Detailer",
		category: "Frontend",
		description: "Business website for a car detailing service.",
		tags: ["HTML", "CSS"],
		live: "https://optic-car-detailer.vercel.app/",
		code: "https://github.com/shazaib991/car-detailer",
	},
	// Backend
	{
		title: "YouTube Clone API",
		category: "Backend",
		description: "REST API powering the YouTube clone front end.",
		tags: ["Node.js", "Express", "MongoDB"],
		live: "https://youtube-clone-api-gamma.vercel.app/",
		code: "https://github.com/shazaib991/youtube-clone-api",
	},
	{
		title: "eBay Clone API",
		category: "Backend",
		description: "REST API serving products and data for the eBay clone.",
		tags: ["Node.js", "Express", "MongoDB"],
		live: "https://ebay-clone-api.vercel.app/",
		code: "https://github.com/shazaib991/ebay-clone-api",
	},
	{
		title: "Subscription Tracker API",
		category: "Backend",
		description: "Versioned REST API for tracking recurring subscriptions.",
		tags: ["Node.js", "Express", "MongoDB"],
		live: "https://subscription-tracker-taupe-eight.vercel.app/api/v1",
		code: "https://github.com/shazaib991/app1",
	},
	{
		title: "Health Tickets API",
		category: "Backend",
		description: "REST API for managing health tickets.",
		tags: ["Node.js", "Express", "MongoDB"],
		live: "https://health-tickets.vercel.app/api",
		code: "https://github.com/shazaib991/app2",
	},
	// Mobile
	{
		title: "Sustainable Support for Women",
		category: "Mobile",
		description: "Mobile app offering sustainable support resources for women.",
		tags: ["Mobile App"],
		live: "https://drive.google.com/file/d/1mDDizIkeSrxb3WlONrmRzpbFij-OhjeB/view?usp=sharing",
		liveLabel: "View App",
	},
	// WordPress
	{
		title: "SS4W",
		category: "WordPress",
		description: "Custom WordPress plugin built for the SS4W website.",
		tags: ["WordPress", "Custom Plugin"],
		live: "https://www.ss4w.com",
	},
	{
		title: "Ozmark Global",
		category: "WordPress",
		description: "Custom WordPress plugin for Ozmark Global.",
		tags: ["WordPress", "Custom Plugin"],
		live: "https://www.ozmarkglobal.com",
	},
	{
		title: "Malangi Shop",
		category: "WordPress",
		description: "Website with a custom WordPress plugin and Elementor-built pages.",
		tags: ["WordPress", "Custom Plugin", "Elementor"],
		live: "https://www.malangishop.com",
	},
	{
		title: "JaifyStore",
		category: "WordPress",
		description: "Online store designed with custom Elementor drag-and-drop layouts.",
		tags: ["WordPress", "Elementor"],
		live: "https://www.jaifystore.com",
	},
	{
		title: "Best Team Metal Coating",
		category: "WordPress",
		description: "Company website built with Elementor drag-and-drop.",
		tags: ["WordPress", "Elementor"],
		live: "https://bestteammetalcoating.com/",
	},
	{
		title: "Al Nouras",
		category: "WordPress",
		description: "Business website for a UAE company built with Elementor.",
		tags: ["WordPress", "Elementor"],
		live: "https://alnouras.ae/",
	},
];
