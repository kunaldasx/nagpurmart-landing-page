import { AppDownloadBanner } from "@/components/sections/AppDownloadBanner";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import Policy from "@/components/sections/Policy";
import { Clause, Highlight, TocItem } from "@/components/sections/Policy";
import { TrustBar } from "@/components/sections/TrustBar";
import { Lock, RefreshCcw, ShieldCheck, Truck } from "lucide-react";

const heading = "Terms & Conditions";
const description =
	"Nagpurmart.in istemal karne se pehle in terms ko dhyan se padhein — yahi rules hamari website, app aur services par apply hote hain.";

const highlights: Highlight[] = [
	{ title: "Secure Payments", icon: <Lock />, subtitle: "100% Protected" },
	{ title: "Fair Pricing", icon: <ShieldCheck />, subtitle: "No Hidden Fees" },
	{ title: "Easy Returns", icon: <RefreshCcw />, subtitle: "Hassle Free" },
	{ title: "Fast Delivery", icon: <Truck />, subtitle: "As Promised" },
];

const tocItems: TocItem[] = [
	{ id: "acceptance", label: "1. Acceptance of Terms" },
	{ id: "eligibility", label: "2. Eligibility & Account" },
	{ id: "orders-payments", label: "3. Orders, Pricing & Payments" },
	{ id: "delivery", label: "4. Delivery Policy" },
	{ id: "returns-refunds", label: "5. Cancellations, Returns & Refunds" },
	{ id: "pharmacy", label: "6. Pharmacy & Regulated Products" },
	{ id: "conduct", label: "7. User Conduct" },
	{ id: "offers", label: "8. Offers & Promotions" },
	{ id: "ip", label: "9. Intellectual Property" },
	{ id: "liability", label: "10. Limitation of Liability" },
	{ id: "privacy", label: "11. Privacy & Data Protection" },
	{ id: "law", label: "12. Governing Law" },
	{ id: "changes", label: "13. Changes to These Terms" },
	{ id: "contact", label: "14. Contact Us" },
];

const clauses: Clause[] = [
	{
		id: "acceptance",
		title: "1. Acceptance of Terms",
		body: [
			'By accessing or using the Nagpurmart.in website, mobile app, or any related services (the "Platform"), you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue using the Platform.',
			'In these Terms, "we", "us", and "our" refer to Nagpurmart.in, and "you" refers to the person accessing or using the Platform.',
		],
	},
	{
		id: "eligibility",
		title: "2. Eligibility & Account",
		body: [
			"You must be at least 18 years old to register and place orders on the Platform. You agree to provide accurate, current information and to keep your login credentials confidential — you're responsible for all activity under your account.",
		],
	},
	{
		id: "orders-payments",
		title: "3. Orders, Pricing & Payments",
		body: [
			"Prices shown on the Platform include applicable taxes unless stated otherwise, and may change without prior notice. Placing an order is an offer to purchase, which we may decline — for example due to stock unavailability, pricing errors, or suspected fraud.",
			"Payments can be made via the methods listed at checkout, including UPI, cards, net banking, and cash on delivery where available.",
		],
	},
	{
		id: "delivery",
		title: "4. Delivery Policy",
		body: [
			"We aim to deliver within the estimated window shown at checkout, typically 10–20 minutes for eligible pin codes, though actual times may vary with weather, traffic, or order volume. Delivery is limited to serviceable areas in Nagpur — enter your address in the app to check availability.",
		],
	},
	{
		id: "returns-refunds",
		title: "5. Cancellations, Returns & Refunds",
		body: [
			"Orders can be cancelled free of charge before they're packed or dispatched; cancellation may not be possible once an order is out for delivery. Damaged, defective, or incorrect items can be returned within the window shown on the product page, provided they're unused and in original packaging.",
			"Approved refunds are credited to your original payment method or Nagpurmart wallet within 5–7 business days.",
		],
	},
	{
		id: "pharmacy",
		title: "6. Pharmacy & Regulated Products",
		body: [
			"Medicines and healthcare products are fulfilled through licensed pharmacy partners and carry extra conditions. Prescription medicines require a valid prescription from a registered practitioner, submitted at checkout or on delivery — we may refuse an order where documentation is incomplete or the sale would violate applicable law.",
		],
	},
	{
		id: "conduct",
		title: "7. User Conduct",
		body: [
			"You agree not to misuse the Platform — including attempting unauthorised access, placing false or fraudulent orders, harassing delivery partners or support staff, or any unlawful use. We may suspend or terminate accounts that violate these Terms.",
		],
	},
	{
		id: "offers",
		title: "8. Offers & Promotions",
		body: [
			"Discount codes, cashback, and other promotions carry their own validity periods and eligibility conditions, communicated at the time of the offer. We may modify or withdraw any offer at any time without prior notice.",
		],
	},
	{
		id: "ip",
		title: "9. Intellectual Property",
		body: [
			"The Nagpurmart.in name, logo, app design, and all Platform content belong to Nagpurmart.in or its licensors and are protected under applicable law. You may not copy, reproduce, or reuse this content without our prior written consent.",
		],
	},
	{
		id: "liability",
		title: "10. Limitation of Liability",
		body: [
			"To the extent permitted by law, Nagpurmart.in is not liable for indirect or consequential damages arising from your use of the Platform, including delivery delays, product unavailability, or errors by third-party pharmacy partners. Our total liability for any claim is capped at the value of the relevant order.",
		],
	},
	{
		id: "privacy",
		title: "11. Privacy & Data Protection",
		body: [
			"Your use of the Platform is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. Using the Platform means you consent to that collection and use.",
		],
	},
	{
		id: "law",
		title: "12. Governing Law",
		body: [
			"These Terms are governed by the laws of India, and any disputes arising out of them are subject to the exclusive jurisdiction of the courts in Nagpur, Maharashtra.",
		],
	},
	{
		id: "changes",
		title: "13. Changes to These Terms",
		body: [
			"We may update these Terms from time to time to reflect changes in our services or legal requirements. Continued use of the Platform after an update means you accept the revised Terms, so it's worth checking this page occasionally.",
		],
	},
	{
		id: "contact",
		title: "14. Contact Us",
		body: [
			"Questions about these Terms? Reach out at support@nagpurmart.in or through the Help section of the app.",
		],
	},
];

const TermsAndConditions = () => {
	return (
		<>
			<Navbar />
			<main>
				<Policy
					heading={heading}
					description={description}
					highlights={highlights}
					tocItems={tocItems}
					clauses={clauses}
				/>
			</main>
			<AppDownloadBanner />
			<Footer />
			<TrustBar />
		</>
	);
};

export default TermsAndConditions;
