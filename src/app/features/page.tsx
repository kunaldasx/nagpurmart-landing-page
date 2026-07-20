import { AppDownloadBanner } from "@/components/sections/AppDownloadBanner";
import Features from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { TrustBar } from "@/components/sections/TrustBar";

const Feature = () => {
	return (
		<>
			<Navbar />
			<main className="mt-20">
				<Features />
			</main>
			<AppDownloadBanner />
			<Footer />
			<TrustBar />
		</>
	);
};

export default Feature;
