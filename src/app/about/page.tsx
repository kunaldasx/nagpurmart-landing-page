import AboutSection from "@/components/sections/AboutSection";
import { AppDownloadBanner } from "@/components/sections/AppDownloadBanner";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { TrustBar } from "@/components/sections/TrustBar";

const About = () => {
	return (
		<>
			<Navbar />
			<main className="mt-8 sm:mt-20">
				<AboutSection />
			</main>
			<AppDownloadBanner />
			<Footer />
			<TrustBar />
		</>
	);
};

export default About;
