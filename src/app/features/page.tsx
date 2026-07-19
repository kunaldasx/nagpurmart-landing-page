import Features from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { TrustBar } from "@/components/sections/TrustBar";

const Feature = () => {
	return (
		<>
			<Navbar />
			<main>
				<Features />
			</main>
			<Footer />
			<TrustBar />
		</>
	);
};

export default Feature;
