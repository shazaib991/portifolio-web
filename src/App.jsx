import "./App.css";
import {AboutAndSkills} from "./components/AboutAndSkills/AboutAndSkills";
import {Contact} from "./components/Contact/Contact";
import {Header} from "./components/Header/Header";
import {HeroSection} from "./components/HeroSection/HeroSection";
import {Work} from "./components/Work/Work";

function App() {
	return (
		<>
			<Header></Header>
			<HeroSection></HeroSection>
			<AboutAndSkills></AboutAndSkills>
			<Work></Work>
			<Contact></Contact>
		</>
	);
}

export default App;
