import type { ComponentType } from "react";
import clsx from "clsx";
import {
	Briefcase,
	Calendar,
	CalendarCheck,
	Eye,
	LayoutGrid,
	Lightbulb,
	MapPin,
	Package,
	Quote,
	Rocket,
	Settings,
	Star,
	Target,
	User,
	UserRound,
	Users,
} from "lucide-react";
import { Container } from "../layout/Container";
import Image from "next/image";
import {
	Info1,
	Info2,
	Info3,
	Journey1,
	Journey2,
	Journey3,
	Journey4,
	Journey5,
	Mission1,
	Mission2,
} from "@/assets/founder";
import FounderBanner from "../ui/FounderBanner";

type IconType = ComponentType<{ className?: string }>;

/* ------------------------------------------------------------------ *
 * Shared placeholder primitives
 * ------------------------------------------------------------------ */

type BadgeTone = "blue" | "white";

const badgeToneClasses: Record<BadgeTone, string> = {
	blue: "bg-blue-100 text-primary-foreground",
	white: "bg-white text-primary-foreground",
};

function IconBadge({
	icon: Icon,
	tone = "blue",
	className,
	iconClassName = "h-5 w-5",
}: {
	icon: IconType;
	tone?: BadgeTone;
	className?: string;
	iconClassName?: string;
}) {
	return (
		<span
			className={clsx(
				"flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
				badgeToneClasses[tone],
				className,
			)}
		>
			<Icon className={iconClassName} />
		</span>
	);
}

/** Stand-in for a real photo — swap for a real `<Image />` once the asset exists. */
function ImagePlaceholder({
	icon: Icon,
	label,
	className,
}: {
	icon: IconType;
	label: string;
	className?: string;
}) {
	return (
		<div
			role="img"
			aria-label={label}
			className={clsx(
				"flex flex-col items-center justify-center gap-2 border-2 border-dashed border-primary-foreground/40 bg-blue-50 p-4 text-primary-foreground/60",
				className,
			)}
		>
			<Icon className="h-10 w-10" />
			<span className="text-center text-xs font-medium leading-tight">
				{label}
			</span>
		</div>
	);
}

function FloatingIcon({
	icon: Icon,
	className,
}: {
	icon: IconType;
	className?: string;
}) {
	return (
		<span
			aria-hidden="true"
			className={clsx(
				"absolute flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white text-primary-foreground shadow-sm",
				className,
			)}
		>
			<Icon className="h-4 w-4" />
		</span>
	);
}

/* ------------------------------------------------------------------ *
 * 1. Founder intro
 * ------------------------------------------------------------------ */

const infoRows: { icon: string; label: string; value: string }[] = [
	{ icon: Info1, label: "Name", value: "Abhishek Thakur" },
	{ icon: Info2, label: "Role", value: "Founder & CEO, Nagpurmart.in" },
	{
		icon: Info3,
		label: "Experience",
		value: "E-commerce & Retail Industry Expert",
	},
];

function FounderPhoto() {
	return (
		<div className="relative w-full max-w-[15rem] shrink-0">
			<div
				aria-hidden="true"
				className="absolute -right-6 -top-2 -z-10 h-56 w-56 rounded-full bg-blue-100"
			/>

			<ImagePlaceholder
				icon={UserRound}
				label="Founder photo"
				className="aspect-[4/5] w-full rounded-[2rem]"
			/>

			<FloatingIcon icon={Settings} className="-left-4 top-6" />
			<FloatingIcon icon={Users} className="-right-3 top-1/4" />
			<FloatingIcon icon={LayoutGrid} className="-left-3 bottom-16" />
			<FloatingIcon icon={Quote} className="-right-4 bottom-6" />
		</div>
	);
}

function FounderIntro() {
	return (
		<section className="py-12 sm:py-16">
			<Container>
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<div>
						<div className="flex flex-col items-start">
							<p className="text-sm font-semibold uppercase tracking-wider">
								Founder
							</p>
							<span className="mt-1 h-0.5 w-18 bg-primary-foreground" />
						</div>
						<h2 className="mt-3 text-[clamp(2rem,3.2vw,3.75rem)] font-bold leading-tight text-[#011d4c]">
							Meet Our Founder
						</h2>
						<p className="text-[clamp(2rem,3.2vw,3.75rem)] font-bold leading-tight text-primary-foreground">
							Abhishek Thakur
						</p>
						<p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
							NagpurMart.in ki shuruaat ek sapne se hui - Nagpur ke logo ko aisa
							platform dena jahan unhe har category ke product best price mein,
							fastest delivery ke sath mil sake.
						</p>

						<dl className="mt-6 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
							{infoRows.map((row) => (
								<div key={row.label} className="flex items-center gap-4 p-4">
									<Image
										src={row.icon}
										alt={row.label}
										width={40}
										height={40}
										className="h-8 w-8"
									/>
									<div>
										<dt className="text-sm font-semibold text-[#011d4c]">
											{row.label}
										</dt>
										<dd className="text-xs text-slate-500">{row.value}</dd>
									</div>
								</div>
							))}
						</dl>
					</div>

					<div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
						<FounderBanner />

						<div className="max-w-[13rem]">
							<Quote
								aria-hidden="true"
								className="h-5 w-5 -scale-x-100 text-blue-200"
							/>
							<p className="mt-2 text-sm leading-relaxed text-slate-600">
								Mera Mission simple hai - Nagpur ke har ghar tak quality
								products ko pahuchana aur shopping ko aur easy banana.
							</p>
							<p className="mt-4 text-sm font-semibold text-primary-foreground">
								- Abhishek Thakur
							</p>
							<p className="text-xs text-slate-500">Founder & CEO</p>
							<p className="text-xs text-slate-500">NagpurMart.in</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 2. Journey timeline
 * ------------------------------------------------------------------ */

const journey: {
	year: string;
	title: string;
	description: string;
	icon: string;
}[] = [
	{
		year: "2019",
		title: "The Idea",
		description:
			"Nagpur ke logo ke liye best shopping experience banane ka idea aaya",
		icon: Journey1,
	},
	{
		year: "2020",
		title: "Planning & Research",
		description:
			"Market research, customer needs samjhe aur strong plan taiyar kiya",
		icon: Journey2,
	},
	{
		year: "2021",
		title: "NagpurMart.in Launched",
		description:
			"NagpurMart.in ko officially launch kiya Nagpur ke logo ke liye",
		icon: Journey3,
	},
	{
		year: "2022",
		title: "Growing Together",
		description:
			"Lakho customer ka trust jeeta aur product range aur service badhayi",
		icon: Journey3,
	},
	{
		year: "2024 & Beyond",
		title: "Bigger Vision",
		description: "Nagpur se bharat tak, hamara mission aur bhi bada hai",
		icon: Journey4,
	},
];

export function Journey() {
	return (
		<section className="border-t border-slate-100 py-12 sm:py-16">
			<Container>
				<p className="text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground sm:text-base">
					My Journey
				</p>
				<h2 className="mt-2 text-center text-2xl font-bold text-[#011d4c] sm:text-3xl">
					Meri Kahani, Aapke Liye
				</h2>

				<div className="relative mt-12">
					{/* Continuous timeline background */}
					<div
						aria-hidden="true"
						className="absolute left-0 right-0 top-[75px] hidden h-0.5 bg-slate-200 lg:block"
					/>

					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-2">
						{journey.map((item) => (
							<div
								key={item.year}
								className="relative flex flex-col items-center text-center"
							>
								{/* Icon */}
								<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-background">
									<Image
										src={item.icon}
										alt={item.title}
										width={48}
										height={48}
										className="relative z-10 h-8 w-8 object-contain"
									/>
								</div>

								{/* Timeline section */}
								<div className="relative mt-3 hidden h-4 w-full items-center justify-center lg:flex">
									{/* Blue line */}
									<div className="absolute left-[25%] right-[25%] top-1/2 h-0.5 -translate-y-1/2 bg-primary-foreground" />

									{/* Center dot */}
									<span className="relative z-10 h-2 w-2 rounded-full bg-primary-foreground" />
								</div>

								{/* Card */}
								<div className="mt-1 flex min-h-[125px] w-full flex-1 flex-col items-center rounded-xl border border-slate-200 bg-white px-3 py-4">
									<p className="text-sm font-bold text-primary-foreground">
										{item.year}
									</p>

									<p className="mt-1 text-sm font-semibold leading-snug">
										{item.title}
									</p>

									<p className="mt-2 text-xs leading-relaxed text-slate-500">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 4. Mission & vision
 * ------------------------------------------------------------------ */

function MissionVision() {
	return (
		<section className="pb-12 sm:pb-16">
			<Container>
				<p className="text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground sm:text-base">
					Mission &amp; Vision
				</p>

				<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div className="flex items-center gap-4 rounded-2xl bg-blue-50 p-6 sm:px-8 sm:py-10">
						{/* Icon */}
						<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-background">
							<Image
								src={Mission1}
								alt="Mission"
								width={48}
								height={48}
								className="h-8 w-8 object-contain"
							/>
						</div>

						{/* Content */}
						<div className="flex flex-col">
							<h3 className="text-base font-bold text-[#011d4c]">
								Our Mission
							</h3>

							<p className="text-sm leading-relaxed text-slate-600">
								Har customer ko best quality products, best prices aur fastest
								delivery provide karna. Shopping ko easy, affordable aur
								reliable banana.
							</p>
						</div>
					</div>

					<div className="flex items-center gap-4 rounded-2xl bg-[#e9f7eb] p-6 sm:px-8 sm:py-10">
						<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-background">
							<Image
								src={Mission2}
								alt="Mission"
								width={48}
								height={48}
								className="h-8 w-8 object-contain"
							/>
						</div>

						<div className="flex flex-col">
							<h3 className="text-base font-bold text-[#011d4c]">Our Vision</h3>
							<p className="text-sm leading-relaxed text-slate-600">
								Nagpur ke sabse trusted aur loved super app banana, aur har ghar
								ki pehli pasand ban jana.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * Composed section
 * ------------------------------------------------------------------ */

export default function FounderSection() {
	return (
		<>
			<FounderIntro />
			<Journey />
			<MissionVision />
		</>
	);
}
