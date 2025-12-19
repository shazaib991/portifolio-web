export const HeroSection = () => {
	return (
		<div id="home" className="min-h-screen w-full flex flex-col items-center pt-[60px] font-[Inter] bg-slate-900">
			<h2 className="text-sky-400 tracking-widest text-[13px] animate-pulse mt-[60px]">AVAILABLE FOR WORK</h2>
			<h1 className="w-[60%] text-center text-[70px] font-bold leading-[70px] text-white mt-[20px]">
				Crafting digital{" "}
				<span className="bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">experiences</span>{" "}
				that matter.
			</h1>
			<p className="text-slate-400 text-[20px] w-[50%] text-center mt-[30px]">
				I'm a Front-end-web Developer specializing in building exceptional digital products that combine clean code with
				elegant design.
			</p>
			<div className="mt-[45px] flex flex-wrap justify-center">
				<a
					href="#projects"
					className="bg-sky-500 hover:bg-sky-600 text-white px-[35px] py-[12px] rounded-full font-semibold transition-all transform hover:-translate-y-1 mr-[20px]"
				>
					View My Work
				</a>
				<a
					href="#contact"
					className="text-white border border-slate-700 hover:bg-slate-800 px-[35px] py-[12px] rounded-full font-semibold transition-all"
				>
					Let's Talk
				</a>
			</div>
		</div>
	);
};
