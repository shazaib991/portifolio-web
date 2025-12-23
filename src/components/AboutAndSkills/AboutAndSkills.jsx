export const AboutAndSkills = () => {
	return (
		<div className="flex min-h-screen justify-between bg-slate-900 pt-[60px] font-[Inter]">
			<div className="ml-[120px] mt-[100px]">
				<h1 className="text-white font-bold text-[30px]">About Me</h1>
				<p className="text-slate-400 w-[85%] mt-[20px]">
					With over 2 years of experience in the tech industry, I've had the privilege of working with startups to bring
					complex ideas to life. I believe that great software is built at the intersection of usability and
					performance.
				</p>
				<div className="flex mt-[30px]">
					<div className="h-[80] w-[250px] flex flex-col justify-center mr-[20px] backdrop-blur bg-[rgba(30,41,59,0.7)] border border-[rgba(255,255,255,0.1)] rounded-[10px] pl-[20px]">
						<p className="text-[25px] font-bold bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">
							5+
						</p>
						<p className="text-slate-500 text-[12px]">PROJECTS COMPLETED</p>
					</div>
					<div className="h-[80px] w-[250px] flex flex-col justify-center backdrop-blur bg-[rgba(30,41,59,0.7)] border border-[rgba(255,255,255,0.1)] rounded-[10px] pl-[20px]">
						<p className="text-[25px] font-bold bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">
							5+
						</p>
						<p className="text-slate-500 text-[12px]">CLIENTS HAPPY</p>
					</div>
				</div>
			</div>
			<div className="w-full mr-[120px] flex flex-col text-white mt-[140px]">
				<h1 className="text-[20px]">Technical Proficiency</h1>
				<div className="mt-[30px]">
					<div className="flex flex-col">
						<div className="flex justify-between text-[15px]">
							<p>Html/Css</p>
							<p>95%</p>
						</div>
						<div className="w-full h-[8px] bg-[#334155] mt-[7px] rounded-full relative">
							<div className="w-[95%] h-[8px] absolute top-0 left-0 bg-[#38bdf8] rounded-l-full"></div>
						</div>
					</div>
					<div className="flex flex-col mt-[20px]">
						<div className="flex justify-between text-[15px]">
							<p>React</p>
							<p>85%</p>
						</div>
						<div className="w-full h-[8px] bg-[#334155] mt-[7px] rounded-full relative">
							<div className="w-[85%] h-[8px] absolute top-0 left-0 bg-[#38bdf8] rounded-l-full"></div>
						</div>
					</div>
					<div className="flex flex-col mt-[20px]">
						<div className="flex justify-between text-[15px]">
							<p>Javascript</p>
							<p>80%</p>
						</div>
						<div className="w-full h-[8px] bg-[#334155] mt-[7px] rounded-full relative">
							<div className="w-[80%] h-[8px] absolute top-0 left-0 bg-[#38bdf8] rounded-l-full"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
