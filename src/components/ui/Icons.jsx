const base = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.8,
	strokeLinecap: "round",
	strokeLinejoin: "round",
	"aria-hidden": true,
};

export const GithubIcon = ({className = "h-5 w-5"}) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
		<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
	</svg>
);

export const LinkedinIcon = ({className = "h-5 w-5"}) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
		<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
	</svg>
);

export const MailIcon = ({className = "h-5 w-5"}) => (
	<svg {...base} className={className}>
		<rect x="3" y="5" width="18" height="14" rx="2" />
		<path d="m3 7 9 6 9-6" />
	</svg>
);

export const ArrowUpRight = ({className = "h-4 w-4"}) => (
	<svg {...base} className={className}>
		<path d="M7 17 17 7M8 7h9v9" />
	</svg>
);

export const ArrowDown = ({className = "h-4 w-4"}) => (
	<svg {...base} className={className}>
		<path d="M12 5v14M6 13l6 6 6-6" />
	</svg>
);

export const ArrowUp = ({className = "h-4 w-4"}) => (
	<svg {...base} className={className}>
		<path d="M12 19V5M6 11l6-6 6 6" />
	</svg>
);

export const MenuIcon = ({className = "h-6 w-6"}) => (
	<svg {...base} className={className}>
		<path d="M4 7h16M4 12h16M4 17h10" />
	</svg>
);

export const CloseIcon = ({className = "h-6 w-6"}) => (
	<svg {...base} className={className}>
		<path d="M6 6l12 12M18 6 6 18" />
	</svg>
);

export const GradCapIcon = ({className = "h-5 w-5"}) => (
	<svg {...base} className={className}>
		<path d="M22 10 12 5 2 10l10 5 10-5Z" />
		<path d="M6 12v5c3 2 9 2 12 0v-5" />
	</svg>
);

export const PhoneIcon = ({className = "h-6 w-6"}) => (
	<svg {...base} className={className}>
		<rect x="7" y="2" width="10" height="20" rx="2.5" />
		<path d="M11 18h2" />
	</svg>
);

export const GlobeIcon = ({className = "h-6 w-6"}) => (
	<svg {...base} className={className}>
		<circle cx="12" cy="12" r="9" />
		<path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
	</svg>
);

export const ServerIcon = ({className = "h-6 w-6"}) => (
	<svg {...base} className={className}>
		<rect x="3" y="4" width="18" height="7" rx="2" />
		<rect x="3" y="13" width="18" height="7" rx="2" />
		<path d="M7 7.5h.01M7 16.5h.01" />
	</svg>
);

export const SparkIcon = ({className = "h-5 w-5"}) => (
	<svg {...base} className={className}>
		<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
	</svg>
);
