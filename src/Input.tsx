const Input = () => {
	const handleBtnOnClick = (e: React.BaseSyntheticEvent) => {
		let ok: Boolean = /^\w+@[a-z]+\.[a-z]+$/.test(
			e.target.parentElement.getElementsByTagName("input")[0].value
		);
		if (ok) return;
		if (!e.target.parentElement.classList.contains("error")) {
			e.target.parentElement.classList.add("error");
		}
	};
	const handleInputOnClick = (e: React.BaseSyntheticEvent) => {
		e.target.parentElement.classList.remove("error");
	};
	return (
		<div className="flex flex-col w-full gap-4 sm:flex-row relative">
			<input
				type="text"
				onClick={handleInputOnClick}
				placeholder="Your email address"
				className="pl-10 sm:w-3/5 border-[1px] outline-none border-solid border-Blue w-full h-12 rounded-full"
			/>
			<i className="sm:absolute sm:top-14 sm:left-6 hidden text-sm relative bottom-3 text-Light_Red font-light">
				Please provide a valid email address
			</i>
			<button
				type="button"
				onClick={handleBtnOnClick}
				className="hover:brightness-125 transition-all w-full sm:w-2/5 text-white bg-Blue h-12 rounded-full"
			>
				Notify Me
			</button>
		</div>
	);
};
export default Input;
