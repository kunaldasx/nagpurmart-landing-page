import ContactPage from "@/components/sections/Contact/Contact";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { TrustBar } from "@/components/sections/TrustBar";

const Contact = () => {
	return (
		<>
			<Navbar />
			<main>
				<ContactPage />
			</main>
			<Footer />
			<TrustBar />
		</>
	);
};

export default Contact;
