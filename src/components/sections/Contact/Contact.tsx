import { AppDownloadBanner } from "./AppDownloadBanner";
import { ContactHero } from "./ContactHero";
import { FaqSection } from "./FaqSection";
import { OfficeMapSection } from "./OfficeMapSection";

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
