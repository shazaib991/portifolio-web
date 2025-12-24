export const Work = () => {
	return (
		<div className="flex flex-col items-center min-h-screen bg-slate-900 pt-[60px] font-[Inter]">
			<div className="mt-[85px]">
				<h1 className="text-white text-center text-[38px] font-bold">Selected Projects</h1>
				<p className="text-slate-400 text-center">A showcase of things I've built with passion.</p>
			</div>
			<div className="flex flex-wrap gap-8 mt-[60px]">
				<div className="flex flex-col justify-end transition-all h-[200px] w-[350px] border border-[rgba(255,255,255,0.1)] rounded-[15px] bg-[url(./assets/ebay-clone.png)] bg-cover bg-no-repeat group">
					<h1 className="text-white text-[20px] font-bold ml-[15px]">Ebay clone</h1>
					<p className="text-sky-400 ml-[15px] text-[14px]">React • Tailwindcss • Redux</p>
					<button className="self-start invisible group-hover:visible group-hover:opacity-100 opacity-0 transition-all duration-300 mb-[15px] group-hover:mb-[30px] ml-[15px] text-white font-bold">
						<a href="https://ebay-clone-ashy.vercel.app/" target="_blank">
							View Project &gt;
						</a>
						<a href="https://github.com/shazaib991/ebay-clone" target="_blank" className="ml-[5px]">
							View Source code &gt;
						</a>
					</button>
				</div>
				<div className="flex flex-col justify-end transition-all h-[200px] w-[350px] border border-[rgba(255,255,255,0.1)] rounded-[15px] bg-[url(./assets/youtube-clone.png)] bg-cover bg-no-repeat group">
					<h1 className="text-white text-[20px] font-bold ml-[15px]">Youtube clone</h1>
					<p className="text-sky-400 ml-[15px] text-[14px]">React • Tailwindcss • Redux</p>
					<button className="self-start invisible group-hover:visible group-hover:opacity-100 opacity-0 transition-all duration-300 mb-[15px] group-hover:mb-[30px] ml-[15px] text-white font-bold">
						<a href="https://react-youtube-clone-woad.vercel.app/" target="_blank">
							View Project &gt;
						</a>
						<a href="https://github.com/shazaib991/react-youtube-clone" target="_blank" className="ml-[5px]">
							View Source code &gt;
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};
