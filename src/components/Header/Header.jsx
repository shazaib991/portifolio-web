export const Header = () => {
	return (
		<div className="h-[60px] fixed w-full border border-[rgba(255,255,255,0.1)] backdrop-blur bg-[rgba(30,41,59,0.7)] font-[Inter] z-[999]">
			<div className="h-full flex justify-between items-center max-w-[83%] mx-auto">
				<a href="#" className="text-[20px] font-bold tracking-tighter text-white">
					SHAZAIB<span className="text-sky-400">.</span>MUNAWAR
				</a>
				<div className="flex text-[14px] font-medium tracking-widest text-slate-300 max-md:hidden">
					<button className="hover:text-[#38bdf8] mr-[30px]">
						<a href="#home">HOME</a>
					</button>
					<button className="hover:text-[#38bdf8] mr-[30px]">
						<a href="#about">ABOUT</a>
					</button>
					<button className="hover:text-[#38bdf8] mr-[30px]">
						<a href="#work">WORK</a>
					</button>
					<button className="hover:text-[#38bdf8]">
						<a href="#contact">CONTACT</a>
					</button>
				</div>
				<button className="max-md:block hidden text-[20px] text-white" id="menuBtn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-list"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};
