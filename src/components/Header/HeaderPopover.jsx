export const HeaderPopover = ({isMenuOpen, setIsMenuOpen}) => {
	return (
		<>
			{isMenuOpen && (
				<div className="fixed inset-0 bg-slate-900 z-[1000] md:hidden flex flex-col items-center justify-center">
					<button className="absolute top-4 right-4 text-white text-[24px]" onClick={() => setIsMenuOpen(false)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							className="bi bi-x"
							viewBox="0 0 16 16"
						>
							<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
						</svg>
					</button>
					<div className="flex flex-col items-center space-y-8 text-[18px] font-medium tracking-widest text-slate-300">
						<button className="hover:text-[#38bdf8]" onClick={() => setIsMenuOpen(false)}>
							<a href="#home">HOME</a>
						</button>
						<button className="hover:text-[#38bdf8]" onClick={() => setIsMenuOpen(false)}>
							<a href="#about">ABOUT</a>
						</button>
						<button className="hover:text-[#38bdf8]" onClick={() => setIsMenuOpen(false)}>
							<a href="#work">WORK</a>
						</button>
						<button className="hover:text-[#38bdf8]" onClick={() => setIsMenuOpen(false)}>
							<a href="#contact">CONTACT</a>
						</button>
					</div>
				</div>
			)}
		</>
	);
};
