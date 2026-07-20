import CareersSection from "@/components/sections/Careers";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { TrustBar } from "@/components/sections/TrustBar";

const Careers = () => {
	return (
		<>
			<Navbar />
			<main className="mt-8 sm:mt-12">
				<CareersSection />
			</main>
			<Footer />
			<TrustBar />
		</>
	);
};

export default Careers;
