import { AppDownloadBanner } from "../ui/AppDownloadBanner";
import { ContactHero } from "../ui/ContactHero";
import { FaqSection } from "../ui/FaqSection";
import { OfficeMapSection } from "../ui/OfficeMapSection";

export function ContactPage() {
	return (
		<main>
			<ContactHero />
			<OfficeMapSection />
			<FaqSection />
			<AppDownloadBanner />
		</main>
	);
}

export default ContactPage;
