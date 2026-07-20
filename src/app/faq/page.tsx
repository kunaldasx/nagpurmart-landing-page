import { AppDownloadBanner } from "@/components/sections/AppDownloadBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { TrustBar } from "@/components/sections/TrustBar";

const FAQ = () => {
	return (
		<>
			<Navbar />
			<main className="mt-20">
				<FaqSection />
			</main>
			<AppDownloadBanner />
			<Footer />
			<TrustBar />
		</>
	);
};

export default FAQ;
