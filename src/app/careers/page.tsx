import CareersSection from "@/components/sections/Careers";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { TrustBar } from "@/components/sections/TrustBar";

const Careers = () => {
	return (
		<>
			<Navbar />
			<main>
				<CareersSection />
			</main>
			<Footer />
			<TrustBar />
		</>
	);
};

export default Careers;
