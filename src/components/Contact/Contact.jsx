export const Contact = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-slate-900 pt-[60px] font-[Inter]">
			<div className="w-[800px] mx-[40px] px-[30px] backdrop-blur bg-[rgba(30,41,59,0.7)] border border-[rgba(255,255,255,0.1)] rounded-[20px] mb-[30px]">
				<h1 className="text-white font-bold text-[30px] text-center mt-[40px]">Start a conversation</h1>
				<p className="text-slate-400 text-center">Have a project in mind? Reach out and let's make it happen.</p>
				<div className="flex mt-[40px] gap-[20px]">
					<div className="flex-1">
						<p className="text-slate-400">Full Name</p>
						<input
							type="text"
							className="w-full h-[40px] mt-[10px] bg-slate-800 outline-none border border-[rgba(255,255,255,0.1)] rounded-[8px] px-[10px] text-white"
						/>
					</div>
					<div className="flex-1">
						<p className="text-slate-400">Email Address</p>
						<input
							type="email"
							className="w-full h-[40px] mt-[10px] outline-none bg-slate-800 border border-[rgba(255,255,255,0.1)] rounded-[8px] px-[10px] text-white"
						/>
					</div>
				</div>
				<div className="mt-[40px]">
					<p className="text-slate-400">Your Message</p>
					<textarea
						name=""
						id="messagebox"
						className="w-full h-[100px] mt-[10px] outline-none bg-slate-800 border border-[rgba(255,255,255,0.1)] rounded-[8px] px-[10px] py-[10px] text-white"
					></textarea>
				</div>
				<button className="w-full mt-[20px] bg-sky-500 hover:bg-sky-600 text-white mb-[20px] px-[20px] py-[10px] rounded-[8px] font-semibold transition-all cursor-pointer">
					Send Message
				</button>
			</div>
		</div>
	);
};
