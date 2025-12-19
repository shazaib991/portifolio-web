export const Header = () => {
	return (
		<div className="h-[60px] fixed w-full flex justify-between items-center backdrop-blur bg-[rgba(30,41,59,0.7)] font-[Inter]">
			<a href="#" className="text-[20px] font-bold tracking-tighter text-white ml-[120px]">
				SHAZAIB<span className="text-sky-400">.</span>MUNAWAR
			</a>
			<div className="flex text-[15px] font-medium tracking-widest text-slate-300 mr-[120px]">
				<a href="#home" className="hover:text-[#38bdf8] mr-[30px]">
					HOME
				</a>
				<a href="#about" className="hover:text-[#38bdf8] mr-[30px]">
					ABOUT
				</a>
				<a href="#projects" className="hover:text-[#38bdf8] mr-[30px]">
					WORK
				</a>
				<a href="#contact" className="hover:text-[#38bdf8]">
					CONTACT
				</a>
			</div>
			<button className="md:hidden text-[20px]" id="menuBtn">
				<i className="fas fa-bars"></i>
			</button>
		</div>
	);
};
