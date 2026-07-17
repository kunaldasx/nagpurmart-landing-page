import Hero from "@/components/sections/Hero";
import { Navbar } from "@/components/layout/Navbar";
import HowItWorks from "@/components/sections/HowItWorks";
import AppDownload from "@/components/sections/AppDownload";
import FounderSection from "@/components/sections/Founder";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<HowItWorks />
				<FounderSection />
				<AppDownload />
				<AboutSection />
			</main>
		</>
	);
}
