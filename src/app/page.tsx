import Hero from "@/components/sections/Hero";
import { Navbar } from "@/components/layout/Navbar";
import HowItWorks from "@/components/sections/HowItWorks";
import AppDownload from "@/components/sections/AppDownload";
import FounderSection from "@/components/sections/Founder";
import AboutSection from "@/components/sections/AboutSection";
import Features from "@/components/sections/Features";
import CareersSection from "@/components/sections/Careers";
import ContactPage from "@/components/sections/Contact/Contact";

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
				<Features />
				<CareersSection />
				<ContactPage />
			</main>
		</>
	);
}
