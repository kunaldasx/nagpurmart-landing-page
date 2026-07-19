import AboutSection from "@/components/sections/AboutSection";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { TrustBar } from "@/components/sections/TrustBar";

const About = () => {
	return (
		<>
			<Navbar />
			<main>
				<AboutSection />
			</main>
			<Footer />
			<TrustBar />
		</>
	);
};

export default About;
