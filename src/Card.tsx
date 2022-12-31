import Input from "./Input";
import Icon from "./Icon";
import facebook from "./assets/facebook-f.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";
import dashboard from "./assets/illustration-dashboard.png";
import logo from "./assets/logo.svg";

const Card = () => {
	return (
		<div className="font-sans text-Gray font-semibold w-11/12 h-5/6 text-center flex flex-col items-center">
			<img className="w-1/6" src={logo} alt="" />
			<h1 className="text-3xl font-light relative pt-12">
				{" "}
				We are launching{" "}
				<span className="font-bold text-Very_Dark_Blue">soon!</span>
			</h1>

			<p className="pt-4 text-Very_Dark_Blue font-light">Subscribe and get notified</p>

			<div className="w-5/6 pt-8">
				{" "}
				<Input />
			</div>

			<img className="pt-16" src={dashboard} alt="" />
			<div className="flex gap-x-4 pt-20">
				<Icon src={facebook} />
				<Icon src={twitter} />
				<Icon src={instagram} />
			</div>
			<p className="pt-8">&copy; Copyright Ping. All rights reserved.</p>
		</div>
	);
};

export default Card;
