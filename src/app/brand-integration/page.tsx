import { AppDownloadBanner } from "@/components/sections/AppDownloadBanner";
import { BrandIntegration } from "@/components/sections/BrandIntegration";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { TrustBar } from "@/components/sections/TrustBar";

const BrandIntegrationPage = () => {
	return (
		<>
			<Navbar />
			<main className="mt-12">
				<BrandIntegration />
			</main>
			<AppDownloadBanner />
			<Footer />
			<TrustBar />
		</>
	);
};

export default BrandIntegrationPage;
