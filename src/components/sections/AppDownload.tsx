import { Fragment, type ComponentType } from "react";
import clsx from "clsx";
import { ArrowRight, Download, QrCode } from "lucide-react";
import {
	Feature1,
	Feature2,
	Feature3,
	Feature4,
	Benefit1,
	Benefit2,
	Benefit3,
	Benefit4,
	Benefit5,
	Benefit6,
	BannerPhone,
	BannerBg,
	BannerItem,
	ShoppingBasket,
	SearchBox,
} from "@/assets/appDownload";
import { Container } from "../layout/Container";
import Image from "next/image";
import { AppStoreBtn } from "../ui/AppStoreBtn";
import { PlayStoreBtn } from "../ui/PlayStoreBtn";

type IconType = ComponentType<{ className?: string }>;

type PlaceholderTone = "blue" | "white" | "warm";

const toneClasses: Record<PlaceholderTone, { fill: string; border: string }> = {
	blue: {
		fill: "bg-blue-50 text-primary-foreground/60",
		border: "border-primary-foreground/40",
	},
	white: { fill: "bg-white text-slate-300", border: "border-slate-300" },
	warm: {
		fill: "bg-gradient-to-br from-orange-50 via-amber-50 to-blue-50 text-orange-300",
		border: "border-orange-200",
	},
};

/** Stand-in for a real photo or graphic — swap for a real `<Image />` once the asset exists. */
function ImagePlaceholder({
	icon: Icon,
	label,
	tone = "blue",
	bordered = true,
	className,
}: {
	icon: IconType;
	label: string;
	tone?: PlaceholderTone;
	bordered?: boolean;
	className?: string;
}) {
	const { fill, border } = toneClasses[tone];
	return (
		<div
			role="img"
			aria-label={label}
			className={clsx(
				"flex flex-col items-center justify-center gap-2 p-3",
				fill,
				bordered && clsx("border-2 border-dashed", border),
				className,
			)}
		>
			<Icon className="h-8 w-8" />
			<span className="text-center text-[11px] font-medium leading-tight">
				{label}
			</span>
		</div>
	);
}

/* ------------------------------------------------------------------ *
 * 1. Hero
 * ------------------------------------------------------------------ */

const heroFeatures: { icon: string; title: string; description: string }[] = [
	{
		icon: Feature1,
		title: "Best Prices",
		description: "Hamesha sabse sasta deals",
	},
	{
		icon: Feature2,
		title: "Fast Delivery",
		description: "10-20 mins mein delivery",
	},
	{
		icon: Feature3,
		title: "Secure Payments",
		description: "100% safe & secure payments",
	},
	{
		icon: Feature4,
		title: "24*7 Support",
		description: "Hum hamesha aapke saath",
	},
];

function PhoneMockup() {
	return (
		<div className="relative mx-auto aspect-[1.15/1] w-full max-w-130 mt-12">
			{/* Blob */}
			<Image
				src={BannerBg}
				alt=""
				aria-hidden
				className="absolute right-30 top-1/2 z-0 w-[72%] -translate-y-1/2 object-contain"
			/>

			{/* Bag */}
			<Image
				src={BannerItem}
				alt="Grocery bag"
				className="absolute bottom-[24%] right-[24%] z-10 w-[38%] object-contain"
			/>

			{/* Phone */}
			<Image
				src={BannerPhone}
				alt="App Screenshot"
				priority
				className="absolute left-[5%] top-[40%] z-20 w-[46%] -translate-y-1/2 object-contain"
			/>
		</div>
	);
}

function AppHero() {
	return (
		<section className="bg-[#f7faff] py-12 sm:py-16">
			<Container>
				<div className="grid grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2 lg:gap-12">
					<div>
						<span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2.5 text-xs font-semibold text-primary-foreground">
							<Download className="h-3.5 w-3.5" />
							Download App
						</span>

						<h1 className="mt-5 text-[clamp(2rem,3.2vw,3.75rem)] font-bold leading-tight sm:text-4xl">
							<span className="text-[#011d4c]">
								Nagpur<span className="text-primary-foreground">mart.in</span>{" "}
								App
							</span>
							<br />
							<span className="text-primary-foreground">
								Har Zarurat, Ek App.
							</span>
						</h1>

						<p className="mt-4 max-w-md text-sm leading-relaxed text-slate-700 sm:text-base">
							Groceries, electronics, fashion, pharmacy aur bahut kuchh - sab
							kuch aapke phone par. Best prices, fastest delivery, trusted by
							Nagpur
						</p>

						<div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
							{heroFeatures.map((feature) => (
								<div
									key={feature.title}
									className="flex flex-col items-start gap-2"
								>
									<Image
										src={feature.icon}
										alt={feature.title}
										width={32}
										height={32}
										className="h-8 w-8 md:h-12 md:w-12 object-contain px-auto"
									/>
									<p className="text-sm font-semibold text-[#011d4c]">
										{feature.title}
									</p>
									<p className="text-xs leading-snug text-slate-500">
										{feature.description}
									</p>
								</div>
							))}
						</div>

						<div className="mt-8 flex flex-wrap items-center gap-3">
							<AppStoreBtn />
							<PlayStoreBtn />
						</div>
					</div>

					<PhoneMockup />
				</div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 2. App benefits
 * ------------------------------------------------------------------ */

const benefits: { icon: string; title: string; description: string }[] = [
	{
		icon: Benefit1,
		title: "Wide Range",
		description: "10,000+ products her category mein",
	},
	{
		icon: Benefit2,
		title: "Best Deals",
		description: "Exclusive offers aur best prices guarantee",
	},
	{
		icon: Benefit3,
		title: "Lightning Fast Delivery",
		description: "10-20 mins mein",
	},
	{
		icon: Benefit4,
		title: "Live Order Tracking",
		description: "Real-time tracking know your order status",
	},
	{
		icon: Benefit5,
		title: "Multiple Payments",
		description: "UPI, Cards, COD, Wallet & more",
	},
	{
		icon: Benefit6,
		title: "24*7 Support",
		description: "Koi bhi sawaal? Hum hamesha sath rehte hai",
	},
];

export function AppBenefits() {
	return (
		<section className="py-12 sm:py-16">
			<Container>
				<p className="text-center text-xs font-semibold uppercase tracking-wider text-primary-foreground">
					Kyun Download Karein?
				</p>
				<h2 className="mt-2 text-center text-2xl font-bold text-[#011d4c] sm:text-3xl">
					Nagpur<span className="text-primary-foreground">mart.in</span> App Ke
					Fayde
				</h2>

				<div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
					{benefits.map((benefit) => (
						<div
							key={benefit.title}
							className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-center"
						>
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-background lg:h-14 lg:w-14">
								<Image
									src={benefit.icon}
									alt={benefit.title}
									width={28}
									height={28}
								/>
							</div>
							<p className="text-sm font-semibold text-[#011d4c]">
								{benefit.title}
							</p>
							<p className="text-xs leading-snug text-slate-500">
								{benefit.description}
							</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 3. Download steps
 * ------------------------------------------------------------------ */

const downloadSteps: { icon: string; scale: string; description: string }[] = [
	{
		icon: "/icons/playstore.svg",
		scale: "w-12 h-12",
		description: "Google Play store ya App store kholein",
	},
	{
		icon: SearchBox,
		scale: "w-24 h-24",
		description: 'Search Krein "NagpurMart"',
	},
	{
		icon: "/images/logo.png",
		scale: "w-12 h-12",
		description: "NagpurMart App Install Karein",
	},
	{
		icon: ShoppingBasket,
		scale: "w-24 h-24",
		description: "Open Karein aur shopping start karein",
	},
];

function StepCard({
	number,
	icon,
	scale,
	description,
}: {
	number: number;
	icon: string;
	scale: string;
	description: string;
}) {
	return (
		<div className="relative flex w-36 flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 pt-5 text-center sm:w-40">
			<span className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground text-xs font-bold text-white">
				{number}
			</span>
			<p className="text-xs font-medium leading-snug text-[#011d4c]">
				{description}
			</p>
			<div className="flex h-24 w-24 items-center justify-center">
				<Image
					src={icon}
					alt="Step icon"
					width={56}
					height={56}
					className={clsx("object-contain", scale)}
				/>
			</div>
		</div>
	);
}

export function DownloadSteps() {
	return (
		<section className="pb-12 pt-2 sm:pb-16">
			<Container>
				<p className="text-center text-xs font-semibold uppercase tracking-wider text-primary-foreground">
					Kaise Download Karien
				</p>
				<h2 className="mt-2 text-center text-2xl font-bold text-[#011d4c] sm:text-3xl">
					Download Karna Hai Bilkul Easy
				</h2>

				<div className="mt-10 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center">
					<div className="flex flex-wrap items-start justify-center gap-x-4 gap-y-10">
						{downloadSteps.map((step, i) => (
							<Fragment key={step.description}>
								<StepCard
									number={i + 1}
									icon={step.icon}
									scale={step.scale}
									description={step.description}
								/>
								{i < downloadSteps.length - 1 && (
									<ArrowRight
										aria-hidden="true"
										className="mt-12 hidden h-5 w-5 shrink-0 text-blue-200 md:block"
									/>
								)}
							</Fragment>
						))}
					</div>

					<div className="flex w-full max-w-xs flex-col items-center gap-4 rounded-3xl bg-primary-foreground p-6 text-center">
						<h3 className="text-base font-bold text-white">
							Scan & Download NagpurMart App
						</h3>
						<ImagePlaceholder
							icon={QrCode}
							label="QR code"
							tone="white"
							className="h-32 w-32 rounded-xl"
						/>
						<p className="text-xs text-blue-100">
							Scan karien aur app instantly download karien
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * Composed section
 * ------------------------------------------------------------------ */

export default function AppDownload() {
	return (
		<>
			<AppHero />
			<AppBenefits />
			<DownloadSteps />
		</>
	);
}
