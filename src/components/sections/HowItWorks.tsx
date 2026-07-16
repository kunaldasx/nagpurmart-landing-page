/**
 * "How it works" + brand story + stats + app download + trust section
 * ---------------------------------------------------------------------
 * Recreates the supplied design — layout, type scale, and brand colors
 * match the reference. Every image and icon is a clearly-marked
 * placeholder standing in for a real asset.
 *
 * Before shipping:
 * - `npm i lucide-react` if it isn't already a dependency — every icon
 *   here is a stand-in for the final icon set.
 * - Fix the `Container` import path below if yours lives elsewhere.
 * - Replace the `ImagePlaceholder` instances (founder photo, landmark
 *   photo, QR code) with real assets, and swap the App Store / Play
 *   Store buttons for the official badge images before release — both
 *   platforms have brand guidelines for those.
 * - The Hindi copy in `OurStory` is a best-effort read of a screenshot —
 *   check it against your source copy. A few obvious typos in the
 *   reference ("Coustomers", "Familes", "Amezing", "Aoo") were corrected.
 * - Brand blue (#0061ff) and ink (#011d4c) are sampled from the design
 *   and used as one-off Tailwind arbitrary values below — worth
 *   promoting to `theme.colors.brand` in tailwind.config if you'll
 *   reuse them elsewhere on the site.
 */

import { Fragment, type ComponentType } from "react";
import clsx from "clsx";
import { ArrowRight, QrCode } from "lucide-react";
import { Container } from "../layout/Container";
import Image from "next/image";

type IconType = ComponentType<{ className?: string }>;

type PlaceholderTone = "blue" | "white" | "warm";

const toneClasses: Record<PlaceholderTone, string> = {
	blue: "border-2 border-dashed border-primary-foreground/40 bg-blue-50 text-primary-foreground/60",
	white: "border-2 border-dashed border-slate-300 bg-white text-slate-300",
	warm: "border-2 border-dashed border-orange-200 bg-gradient-to-br from-[#b6937e]/15 via-amber-50 to-blue-50 text-orange-300",
};

/** Stand-in for a real photo or graphic — swap for a real `<Image />` once the asset exists. */
function ImagePlaceholder({
	icon: Icon,
	label,
	tone = "blue",
	className,
}: {
	icon: IconType;
	label: string;
	tone?: PlaceholderTone;
	className?: string;
}) {
	return (
		<div
			role="img"
			aria-label={label}
			className={clsx(
				"flex flex-col items-center justify-center gap-2 p-4",
				toneClasses[tone],
				className,
			)}
		>
			<Icon className="h-9 w-9" />
			<span className="text-center text-xs font-medium leading-tight">
				{label}
			</span>
		</div>
	);
}

/* ------------------------------------------------------------------ *
 * 1. How it works
 * ------------------------------------------------------------------ */

const steps: { icon: string; title: string; description: string }[] = [
	{
		icon: "/howItWorks/shopping-cart.svg",
		title: "Choose Product",
		description: "Browse from your favorite categories",
	},
	{
		icon: "/howItWorks/shopping-cart.svg",
		title: "Add to Cart",
		description: "Add items to cart in one tap",
	},
	{
		icon: "/howItWorks/vector.svg",
		title: "Enter Address",
		description: "Enter your delivery location",
	},
	{
		icon: "/howItWorks/wallet.svg",
		title: "Secure Payment",
		description: "Pay securely using multiple options",
	},
	{
		icon: "/howItWorks/truck.svg",
		title: "Fast Delivery",
		description: "Get your order at your doorstep",
	},
];

export function Working() {
	return (
		<section className="pb-12 pt-12 sm:pb-16">
			<Container>
				<h2 className="text-center text-2xl font-bold text-[#011d4c] sm:text-3xl">
					How <span className="text-primary-foreground">Nagpurmart.in</span>{" "}
					Works?
				</h2>

				<div className="mt-12 flex flex-wrap items-start justify-center gap-x-4 gap-y-10 md:flex-nowrap md:justify-between">
					{steps.map((step, i) => (
						<Fragment key={step.title}>
							<div className="flex w-32 flex-col items-center text-center sm:w-36">
								<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-background lg:h-14 lg:w-14">
									<Image
										src={step.icon}
										alt={step.title}
										width={24}
										height={24}
										className="h-6 w-6 object-cover lg:h-8 lg:w-8"
									/>
								</div>
								<h3 className="mt-4 text-sm font-semibold text-[#011d4c] sm:text-base">
									{step.title}
								</h3>
								<p className="mt-1 text-xs text-slate-500 sm:text-sm">
									{step.description}
								</p>
							</div>
							{i < steps.length - 1 && (
								<ArrowRight
									aria-hidden="true"
									className="mt-6 hidden h-5 w-5 shrink-0 md:block"
								/>
							)}
						</Fragment>
					))}
				</div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 2. Brand's story
 * ------------------------------------------------------------------ */

export function BrandStory() {
	return (
		<section className="py-6 sm:py-8">
			<Container>
				<div className="flex flex-col items-center gap-8 bg-blue-50 md:flex-row p-8 sm:p-10 lg:p-12">
					<Image
						src="/howItWorks/founder.png"
						alt="Founder photo"
						width={160}
						height={160}
						className="h-full w-80 object-cover md:h-80"
					/>

					<div>
						<h3 className="text-2xl font-bold text-[#011d4c]">
							Brand&apos;s Story
						</h3>
						<p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
							We created Nagpurmart.in with one simple idea - to make everyday
							grocery shopping effortless. From fresh fruits and vegetables to
							daily essentials, every product is carefully selected to deliver
							trusted quality at fair prices.
						</p>
						<p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
							We believe your time is valuable, that&apos;s why we focus on{" "}
							<span className="font-semibold text-primary-foreground">
								fast delivery, fresh products, transparent pricing
							</span>
							, and a seamless shopping experience.
						</p>
						<p className="mt-6 font-semibold text-primary-foreground">
							- Pankaj Agrawal
						</p>
						<p className="text-sm text-slate-500">Founder, Nagpurmart.in</p>
					</div>
				</div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 3. Our brand story
 * ------------------------------------------------------------------ */

export function OurStory() {
	return (
		<section className="py-6 sm:py-8">
			<Container>
				<div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
					<div>
						<h3 className="text-2xl font-bold text-[#011d4c]">
							Our Brand Story
						</h3>
						<p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
							NagpurMart.in ki shuruaat ek simple idea se hui - Nagpur ke logo
							ko ek bharosemand, sasta aur fast shopping experience dena.
						</p>
						<p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
							Aaj hum groceries se lekar electronics, fashion se lekar pharmacy
							tak, har ek cheez aapke saath hain.
						</p>
						<p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
							Humara commitment simple hai - Sabse Sasta, Sabse Accha, Hamesha
							Aapke Saath.
						</p>
					</div>

					<Image
						src="/howItWorks/landmark.png"
						alt="Nagpur landmark photo"
						height={160}
						width={160}
						className="h-full w-full object-cover"
					/>
				</div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 4. Stats
 * ------------------------------------------------------------------ */

const stats: { icon: string; value: string; label: string }[] = [
	{ icon: "/howItWorks/user.svg", value: "1K+", label: "Happy Customers" },
	{ icon: "/howItWorks/package.svg", value: "1000+", label: "Products" },
	{ icon: "/howItWorks/mapPin.svg", value: "50+", label: "Areas in Nagpur" },
	{ icon: "/howItWorks/star.svg", value: "4.7", label: "Average Rating" },
];

export function StatsBar() {
	return (
		<section className="py-6 sm:py-8">
			<Container>
				<div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-blue-100 bg-primary-background py-4 rounded-xl px-6">
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="flex items-center justify-start md:justify-center gap-2 px-4"
						>
							<Image
								src={stat.icon}
								alt={stat.label}
								width={40}
								height={40}
								className="h-10 w-10"
							/>
							<div>
								<p className="text-lg font-normal text-primary-foreground sm:text-xl">
									{stat.value}
								</p>
								<p className="text-xs text-slate-500">{stat.label}</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 5. App download banner
 * ------------------------------------------------------------------ */

function StoreButton({
	icon,
	eyebrow,
	label,
}: {
	icon: string;
	eyebrow: string;
	label: string;
}) {
	return (
		<a
			href="#"
			className="flex items-center gap-3 rounded-xl bg-black px-4 py-2 text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-foreground"
		>
			<Image
				src={icon}
				alt={label}
				width={24}
				height={24}
				className="h-6 w-6 shrink-0"
			/>
			<span className="flex flex-col leading-tight">
				<span className="text-[10px] text-white/70">{eyebrow}</span>
				<span className="text-sm font-semibold">{label}</span>
			</span>
		</a>
	);
}

export function AppDownload() {
	return (
		<section className="py-6 sm:py-8">
			<Container>
				<div className="flex flex-col items-center gap-8 rounded-3xl bg-primary-foreground p-8 text-center sm:p-10 md:flex-row md:justify-between md:text-left lg:p-12">
					<div className="max-w-lg">
						<h3 className="text-xl font-bold text-white sm:text-2xl">
							Download NagpurMart App
						</h3>
						<p className="max-w-xs mt-2 text-sm text-blue-100 sm:text-base">
							Aur paayein Best Price, Fast Delivery aur Amazing Offers!
						</p>
					</div>

					<ImagePlaceholder
						icon={QrCode}
						label="QR code"
						tone="white"
						className="h-28 w-28 shrink-0 rounded-2xl"
					/>

					<div className="flex flex-col gap-3">
						<StoreButton
							icon="/icons/appstore.svg"
							eyebrow="Download on the"
							label="App Store"
						/>
						<StoreButton
							icon="/icons/playstore.svg"
							eyebrow="Get it on"
							label="Play Store"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 6. Trust badges
 * ------------------------------------------------------------------ */

const trustBadges: { icon: string; title: string; subtitle: string }[] = [
	{
		icon: "/howItWorks/trust-1.svg",
		title: "Best Prices",
		subtitle: "Everyday",
	},
	{
		icon: "/howItWorks/trust-2.svg",
		title: "Secure Payments",
		subtitle: "100% Safe",
	},
	{
		icon: "/howItWorks/trust-3.svg",
		title: "On Time Delivery",
		subtitle: "Always",
	},
	{
		icon: "/howItWorks/trust-4.svg",
		title: "Easy Returns",
		subtitle: "Hassle Free",
	},
	{
		icon: "/howItWorks/trust-5.svg",
		title: "24*7 Support",
		subtitle: "We are Here",
	},
];

export function TrustBadges() {
	return (
		<section className="py-12 sm:py-16">
			<Container>
				<h3 className="text-center text-xl font-normal text-[#011d4c] sm:text-2xl">
					Trusted by Thousands of Families in Nagpur
				</h3>

				<div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-8">
					{trustBadges.map((badge) => (
						<div
							key={badge.title}
							className="flex w-32 items-center gap-2 text-center sm:w-40"
						>
							<Image
								src={badge.icon}
								alt={badge.title}
								width={28}
								height={28}
								className="h-7 w-7"
							/>
							<div className="w-full flex flex-col items-start leading-tight">
								<p className="text-sm font-semibold text-[#011d4c]">
									{badge.title}
								</p>
								<p className="text-xs text-slate-500">{badge.subtitle}</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * Composed section
 * ------------------------------------------------------------------ */

export default function HowItWorks() {
	return (
		<>
			<Working />
			<BrandStory />
			<OurStory />
			<StatsBar />
			<AppDownload />
			<TrustBadges />
		</>
	);
}
