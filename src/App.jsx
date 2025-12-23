import "./App.css";
import {AboutAndSkills} from "./components/AboutAndSkills/AboutAndSkills";
import {Header} from "./components/Header/Header";
import {HeroSection} from "./components/HeroSection/HeroSection";

function App() {
	return (
		<>
			<Header></Header>
			<HeroSection></HeroSection>
			<AboutAndSkills></AboutAndSkills>
		</>
	);
}

export default App;
