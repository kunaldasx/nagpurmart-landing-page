"use client";

import { Quote } from "lucide-react";
import { Container } from "../layout/Container";
import Image from "next/image";
import { useRef } from "react";
import {
	motion,
	useReducedMotion,
	useScroll,
	useTransform,
	type Variants,
} from "framer-motion";
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

/* ------------------------------------------------------------------ *
 * Shared motion helpers
 * ------------------------------------------------------------------ */

// Fade-and-rise reveal for individual elements. Travel distance collapses
// to 0 for anyone who's asked their OS for reduced motion.
function fadeInUp(shouldReduceMotion: boolean | null, delay = 0): Variants {
	return {
		hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
		},
	};
}

// Shorthand for the initial/whileInView/viewport trio every scroll reveal
// needs. Lower `amount` for tall elements, higher for small ones.
function revealOnScroll(amount = 0.4) {
	return {
		initial: "hidden" as const,
		whileInView: "visible" as const,
		viewport: { once: true, amount },
	};
}

// Pair with `staggerChildren` so children using `fadeInUp` reveal one
// after another instead of all at once.
const staggerParent: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.12, delayChildren: 0.05 },
	},
};

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

function FounderIntro() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="py-12 sm:py-16">
			<Container>
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<div>
						<div className="flex flex-col items-start">
							<motion.p
								{...revealOnScroll(0.4)}
								variants={fadeInUp(shouldReduceMotion)}
								className="text-sm font-semibold uppercase tracking-wider"
							>
								Founder
							</motion.p>
							<motion.span
								className="mt-1 h-0.5 w-18 origin-left bg-primary-foreground"
								initial={{ scaleX: 0 }}
								whileInView={{ scaleX: 1 }}
								viewport={{ once: true, amount: 0.4 }}
								transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
							/>
						</div>
						<motion.h2
							{...revealOnScroll(0.4)}
							variants={fadeInUp(shouldReduceMotion, 0.08)}
							className="text-[clamp(2rem,3.2vw,3.75rem)] mt-5 text-4xl font-bold leading-tight tracking-tight"
						>
							Meet Our Founder
						</motion.h2>
						<motion.p
							{...revealOnScroll(0.4)}
							variants={fadeInUp(shouldReduceMotion, 0.14)}
							className="text-[clamp(2rem,3.2vw,3.75rem)] font-bold leading-tight tracking-tight text-primary-foreground"
						>
							Abhishek Thakur
						</motion.p>
						<motion.p
							{...revealOnScroll(0.4)}
							variants={fadeInUp(shouldReduceMotion, 0.2)}
							className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base"
						>
							NagpurMart.in ki shuruaat ek sapne se hui - Nagpur ke logo ko aisa
							platform dena jahan unhe har category ke product best price mein,
							fastest delivery ke sath mil sake.
						</motion.p>

						<motion.dl
							{...revealOnScroll(0.2)}
							variants={staggerParent}
							className="mt-6 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white"
						>
							{infoRows.map((row) => (
								<motion.div
									key={row.label}
									variants={fadeInUp(shouldReduceMotion)}
									whileHover={{
										x: 6,
										transition: { duration: 0.2, ease: "easeOut" },
									}}
									className="flex items-center gap-4 p-4"
								>
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
								</motion.div>
							))}
						</motion.dl>
					</div>

					<div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
						<FounderBanner />

						<motion.div
							className="max-w-52"
							initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{
								duration: 0.6,
								delay: 0.15,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
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
						</motion.div>
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
		icon: Journey4,
	},
	{
		year: "2024 & Beyond",
		title: "Bigger Vision",
		description: "Nagpur se bharat tak, hamara mission aur bhi bada hai",
		icon: Journey5,
	},
];

export function Journey() {
	const shouldReduceMotion = useReducedMotion();
	const timelineRef = useRef<HTMLDivElement>(null);

	// The colored line "draws" itself left-to-right as the timeline scrolls
	// through the viewport - literally tracing the founder's journey.
	const { scrollYProgress } = useScroll({
		target: timelineRef,
		offset: ["start end", "end start"],
	});
	const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<section className="border-t border-slate-100 py-12 sm:py-16">
			<Container>
				<motion.p
					{...revealOnScroll(0.6)}
					variants={fadeInUp(shouldReduceMotion)}
					className="text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground sm:text-base"
				>
					My Journey
				</motion.p>
				<motion.h2
					{...revealOnScroll(0.6)}
					variants={fadeInUp(shouldReduceMotion, 0.08)}
					className="mt-2 text-center text-2xl font-bold text-[#011d4c] sm:text-3xl"
				>
					Meri Kahani, Aapke Liye
				</motion.h2>

				<div ref={timelineRef} className="relative mt-12">
					{/* Continuous timeline background */}
					<div
						aria-hidden="true"
						className="absolute left-0 right-0 top-18.75 hidden h-0.5 bg-slate-200 lg:block"
					/>
					{/* Animated progress line layered on top of it */}
					<motion.div
						aria-hidden="true"
						style={{ scaleX: shouldReduceMotion ? 1 : lineProgress }}
						className="absolute left-0 top-18.75 hidden h-0.5 w-full origin-left bg-primary-foreground lg:block"
					/>

					<motion.div
						{...revealOnScroll(0.1)}
						variants={staggerParent}
						className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-2"
					>
						{journey.map((item) => (
							<motion.div
								key={item.year}
								variants={fadeInUp(shouldReduceMotion)}
								whileHover={{
									y: -6,
									transition: { duration: 0.25, ease: "easeOut" },
								}}
								className="relative flex flex-col items-center text-center"
							>
								{/* Icon */}
								<motion.div
									whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
									className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-background"
								>
									<Image
										src={item.icon}
										alt={item.title}
										width={48}
										height={48}
										className="relative z-10 h-8 w-8 object-contain"
									/>
								</motion.div>

								{/* Timeline section */}
								<div className="relative mt-3 hidden h-4 w-full items-center justify-center lg:flex">
									{/* Blue line */}
									<div className="absolute left-[25%] right-[25%] top-1/2 h-0.5 -translate-y-1/2 bg-primary-foreground" />

									{/* Center dot */}
									<motion.span
										className="relative z-10 h-2 w-2 rounded-full bg-primary-foreground"
										animate={
											shouldReduceMotion ? { scale: 1 } : { scale: [1, 1.3, 1] }
										}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "easeInOut",
										}}
									/>
								</div>

								{/* Card */}
								<div className="mt-1 flex min-h-31.25 w-full flex-1 flex-col items-center rounded-xl border border-slate-200 bg-white px-3 py-4 transition-shadow duration-300 hover:shadow-lg">
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
							</motion.div>
						))}
					</motion.div>
				</div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 4. Mission & vision
 * ------------------------------------------------------------------ */

function MissionVision() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="pb-12 sm:pb-16">
			<Container>
				<motion.p
					{...revealOnScroll(0.6)}
					variants={fadeInUp(shouldReduceMotion)}
					className="text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground sm:text-base"
				>
					Mission &amp; Vision
				</motion.p>

				<motion.div
					{...revealOnScroll(0.3)}
					variants={staggerParent}
					className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
				>
					<motion.div
						variants={fadeInUp(shouldReduceMotion)}
						whileHover={{
							y: -6,
							transition: { duration: 0.25, ease: "easeOut" },
						}}
						className="flex items-center gap-4 rounded-2xl bg-blue-50 p-6 transition-shadow duration-300 hover:shadow-lg sm:px-8 sm:py-10"
					>
						{/* Icon */}
						<motion.div
							whileHover={{
								scale: 1.1,
								rotate: 6,
								transition: { duration: 0.25 },
							}}
							className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-background"
						>
							<Image
								src={Mission1}
								alt="Mission"
								width={48}
								height={48}
								className="h-8 w-8 object-contain"
							/>
						</motion.div>

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
					</motion.div>

					<motion.div
						variants={fadeInUp(shouldReduceMotion)}
						whileHover={{
							y: -6,
							transition: { duration: 0.25, ease: "easeOut" },
						}}
						className="flex items-center gap-4 rounded-2xl bg-[#e9f7eb] p-6 transition-shadow duration-300 hover:shadow-lg sm:px-8 sm:py-10"
					>
						<motion.div
							whileHover={{
								scale: 1.1,
								rotate: -6,
								transition: { duration: 0.25 },
							}}
							className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-background"
						>
							<Image
								src={Mission2}
								alt="Mission"
								width={48}
								height={48}
								className="h-8 w-8 object-contain"
							/>
						</motion.div>

						<div className="flex flex-col">
							<h3 className="text-base font-bold text-[#011d4c]">Our Vision</h3>
							<p className="text-sm leading-relaxed text-slate-600">
								Nagpur ke sabse trusted aur loved super app banana, aur har ghar
								ki pehli pasand ban jana.
							</p>
						</div>
					</motion.div>
				</motion.div>
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
