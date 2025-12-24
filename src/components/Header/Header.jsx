export const Header = () => {
	return (
		<div className="h-[60px] fixed w-full border border-[rgba(255,255,255,0.1)] flex justify-between items-center backdrop-blur bg-[rgba(30,41,59,0.7)] font-[Inter] z-[999]">
			<a href="#" className="text-[20px] font-bold tracking-tighter text-white ml-[120px]">
				SHAZAIB<span className="text-sky-400">.</span>MUNAWAR
			</a>
			<div className="flex text-[14px] font-medium tracking-widest text-slate-300 mr-[120px]">
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
			<button className="md:hidden text-[20px]" id="menuBtn">
				<i className="fas fa-bars"></i>
			</button>
		</div>
	);
};
