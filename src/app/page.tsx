import Hero from "@/components/sections/Hero";
import { Navbar } from "@/components/layout/Navbar";
import HowItWorks from "@/components/sections/HowItWorks";

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<HowItWorks />
			</main>
		</>
	);
}
