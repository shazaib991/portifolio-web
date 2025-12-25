import {useState} from "react";
import "./App.css";
import {AboutAndSkills} from "./components/AboutAndSkills/AboutAndSkills";
import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {HeaderPopover} from "./components/Header/HeaderPopover";
import {HeroSection} from "./components/HeroSection/HeroSection";
import {Work} from "./components/Work/Work";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			<HeaderPopover isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			<HeroSection></HeroSection>
			<AboutAndSkills></AboutAndSkills>
			<Work></Work>
			<Contact></Contact>
			<Footer></Footer>
		</>
	);
}

export default App;
