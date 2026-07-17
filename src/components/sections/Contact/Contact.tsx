import { AppDownloadBanner } from "./AppDownloadBanner";
import { ContactHero } from "./ContactHero";
import { FaqSection } from "./FaqSection";
import { OfficeMapSection } from "./OfficeMapSection";
import { SiteFooter } from "./SiteFooter";
import { TrustBar } from "./TrustBar";

/**
 * Full "Contact Us" page: intro + contact methods + message form,
 * office map, FAQ, app download banner, footer, and trust bar.
 *
 * Each section is also exported individually from its own file if you
 * need to reuse just the footer or trust bar elsewhere.
 */
export function ContactPage() {
	return (
		<main>
			<ContactHero />
			<OfficeMapSection />
			<FaqSection />
			<AppDownloadBanner />
			<SiteFooter />
			<TrustBar />
		</main>
	);
}

export default ContactPage;
