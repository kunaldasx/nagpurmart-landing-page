import ContactPage from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { TrustBar } from "@/components/sections/TrustBar";

const Contact = () => {
	return (
		<>
			<Navbar />
			<main className="mt-8 sm:mt-20">
				<ContactPage />
			</main>
			<Footer />
			<TrustBar />
		</>
	);
};

export default Contact;
