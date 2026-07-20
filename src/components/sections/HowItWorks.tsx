"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import {
	motion,
	useInView,
	useReducedMotion,
	useScroll,
	useTransform,
	Variants,
} from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import Image from "next/image";
import {
	Step1,
	Step2,
	Step3,
	Step4,
	Step5,
	Stat1,
	Stat2,
	Stat3,
	Stat4,
	Trust1,
	Trust2,
	Trust3,
	Trust4,
	Trust5,
	Founder,
	LandMark,
} from "@/assets/howItWorks";
import { DisplayQrCode } from "../ui/OrCode";
import { AppStoreBtn } from "../ui/AppStoreBtn";
import { PlayStoreBtn } from "../ui/PlayStoreBtn";

const MotionArrowRight = motion(ArrowRight);

/* ------------------------------------------------------------------ *
 * 1. How it works
 * ------------------------------------------------------------------ */

const steps: { icon: string; title: string; description: string }[] = [
	{
		icon: Step1,
		title: "Choose Product",
		description: "Browse from your favorite categories",
	},
	{
		icon: Step2,
		title: "Add to Cart",
		description: "Add items to cart in one tap",
	},
	{
		icon: Step3,
		title: "Enter Address",
		description: "Enter your delivery location",
	},
	{
		icon: Step4,
		title: "Secure Payment",
		description: "Pay securely using multiple options",
	},
	{
		icon: Step5,
		title: "Fast Delivery",
		description: "Get your order at your doorstep",
	},
];

export function Working() {
	const shouldReduceMotion = useReducedMotion();

	const stepsContainerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: shouldReduceMotion ? 0 : 0.15,
				delayChildren: 0.05,
			},
		},
	};

	const EASE_OUT = [0.22, 1, 0.36, 1] as const;

	const stepVariants: Variants = {
		hidden: {
			opacity: 0,
			y: shouldReduceMotion ? 0 : 20,
			scale: shouldReduceMotion ? 1 : 0.94,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: shouldReduceMotion ? 0.01 : 0.55,
				ease: EASE_OUT,
			},
		},
	};

	const easeOut = [0.22, 1, 0.36, 1] as const;

	const arrowVariants: Variants = {
		hidden: {
			opacity: 0,
			x: shouldReduceMotion ? 0 : -10,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: shouldReduceMotion ? 0.01 : 0.4,
				ease: easeOut,
			},
		},
	};

	return (
		<section className="pb-12 pt-12 sm:pb-16">
			<Container>
				<motion.h2
					initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.6 }}
					transition={{
						duration: shouldReduceMotion ? 0.01 : 0.5,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="text-center text-2xl font-bold text-[#011d4c] sm:text-3xl"
				>
					How <span className="text-primary-foreground">Nagpurmart.in</span>{" "}
					Works?
				</motion.h2>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={stepsContainerVariants}
					className="mt-12 flex flex-wrap items-start justify-center gap-x-4 gap-y-10 md:flex-nowrap md:justify-between"
				>
					{steps.map((step, i) => (
						<Fragment key={step.title}>
							<motion.div
								variants={stepVariants}
								whileHover={shouldReduceMotion ? undefined : { y: -2 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
								className="group flex w-32 flex-col items-center text-center sm:w-36"
							>
								<motion.div
									whileHover={shouldReduceMotion ? undefined : { scale: 1.07 }}
									transition={{ type: "spring", stiffness: 300, damping: 15 }}
									className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-background transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-primary-foreground/20 lg:h-14 lg:w-14"
								>
									<Image
										src={step.icon}
										alt={step.title}
										width={24}
										height={24}
										className="h-6 w-6 object-cover lg:h-8 lg:w-8"
									/>
								</motion.div>
								<h3 className="mt-4 text-sm font-semibold text-[#011d4c] sm:text-base">
									{step.title}
								</h3>
								<p className="mt-1 text-xs text-slate-500 sm:text-sm">
									{step.description}
								</p>
							</motion.div>
							{i < steps.length - 1 && (
								<MotionArrowRight
									aria-hidden="true"
									variants={arrowVariants}
									className="mt-6 hidden h-5 w-5 shrink-0 md:block"
								/>
							)}
						</Fragment>
					))}
				</motion.div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 2. Brand's story
 * ------------------------------------------------------------------ */

export function BrandStory() {
	const shouldReduceMotion = useReducedMotion();
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const y = useTransform(
		scrollYProgress,
		[0, 1],
		shouldReduceMotion ? [0, 0] : [-20, 20],
	);

	return (
		<section className="py-6 sm:py-8">
			<Container>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{
						duration: shouldReduceMotion ? 0.01 : 0.6,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="flex flex-col items-center gap-8 rounded-2xl bg-primary-background p-8 sm:p-10 lg:p-12 md:flex-row"
				>
					<div className="relative h-64 w-full md:h-80 md:w-1/2 lg:w-[40%]">
						<motion.div
							style={{ y }}
							whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
							transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
							className="absolute inset-0"
						>
							<Image
								src={Founder}
								alt="Founder photo"
								fill
								className="object-contain"
							/>
						</motion.div>
					</div>

					<div>
						<h3 className="text-2xl font-bold text-[#011d4c]">
							Brand&apos;s Story
						</h3>
						<p className="mt-4 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
							We created Nagpurmart.in with one simple idea - to make everyday
							grocery shopping effortless. From fresh fruits and vegetables to
							daily essentials, every product is carefully selected to deliver
							trusted quality at fair prices.
						</p>
						<p className="mt-4 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
							We believe your time is valuable, that&apos;s why we focus on{" "}
							<span className="font-semibold text-primary-foreground">
								fast delivery, fresh products, transparent pricing
							</span>
							, and a seamless shopping experience.
						</p>
						<p className="mt-6 font-semibold text-primary-foreground">
							- Pankaj Agrawal
						</p>
						<p className="text-sm font-medium text-slate-500">
							Founder, Nagpurmart.in
						</p>
					</div>
				</motion.div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 3. Our brand story
 * ------------------------------------------------------------------ */

export function OurStory() {
	const shouldReduceMotion = useReducedMotion();
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const y = useTransform(
		scrollYProgress,
		[0, 1],
		shouldReduceMotion ? [0, 0] : [20, -20],
	);

	return (
		<section className="py-6 sm:py-8">
			<Container>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{
						duration: shouldReduceMotion ? 0.01 : 0.6,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2"
				>
					<div>
						<h3 className="text-2xl font-bold text-[#011d4c]">
							Our Brand Story
						</h3>
						<p className="mt-4 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
							Nagpurmart.in ki shuruaat ek simple idea se hui - Nagpur ke logo
							ko ek bharosemand, sasta aur fast shopping experience dena.
						</p>
						<p className="mt-4 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
							Aaj hum groceries se lekar electronics, fashion se lekar pharmacy
							tak, har ek cheez aapke saath hain.
						</p>
						<p className="mt-4 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
							Humara commitment simple hai - Sabse Sasta, Sabse Accha, Hamesha
							Aapke Saath.
						</p>
					</div>

					<div className="relative h-full w-full overflow-hidden">
						<motion.div
							style={{ y }}
							whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
							transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
							className="absolute -top-10 -bottom-10 left-0 right-0"
						>
							<Image
								src={LandMark}
								alt="Nagpur landmark photo"
								height={160}
								width={160}
								className="h-full w-full object-cover"
							/>
						</motion.div>
					</div>
				</motion.div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 4. Stats
 * ------------------------------------------------------------------ */

const stats: {
	icon: string;
	label: string;
	target: number;
	decimals?: number;
	suffix?: string;
}[] = [
	{ icon: Stat1, target: 1, suffix: "K+", label: "Happy Customers" },
	{ icon: Stat2, target: 1000, suffix: "+", label: "Products" },
	{ icon: Stat3, target: 50, suffix: "+", label: "Areas in Nagpur" },
	{ icon: Stat4, target: 4.7, decimals: 1, label: "Average Rating" },
];

function useCountUp(
	target: number,
	isInView: boolean,
	options?: { duration?: number; delay?: number },
) {
	const { duration = 1.4, delay = 0 } = options ?? {};
	const [value, setValue] = useState(0);

	useEffect(() => {
		if (!isInView) return;
		if (duration <= 0) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setValue(target);
			return;
		}

		let frame: number;
		const timeout = setTimeout(() => {
			let start: number | null = null;
			const step = (timestamp: number) => {
				if (start === null) start = timestamp;
				const progress = Math.min((timestamp - start) / (duration * 1000), 1);
				const eased = 1 - Math.pow(1 - progress, 3);
				setValue(target * eased);
				if (progress < 1) frame = requestAnimationFrame(step);
			};
			frame = requestAnimationFrame(step);
		}, delay);

		return () => {
			clearTimeout(timeout);
			cancelAnimationFrame(frame);
		};
	}, [isInView, target, duration, delay]);

	return value;
}

function StatItem({
	stat,
	isInView,
	index,
	shouldReduceMotion,
}: {
	stat: (typeof stats)[number];
	isInView: boolean;
	index: number;
	shouldReduceMotion: boolean;
}) {
	const raw = useCountUp(stat.target, isInView, {
		duration: shouldReduceMotion ? 0 : 1.4,
		delay: shouldReduceMotion ? 0 : index * 120,
	});
	const display = stat.decimals
		? raw.toFixed(stat.decimals)
		: `${Math.round(raw)}`;

	return (
		<motion.div
			whileHover={shouldReduceMotion ? undefined : { y: -4 }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			className="flex items-center justify-start gap-2 rounded-lg px-4 transition-colors duration-300 hover:bg-white/60 md:justify-center"
		>
			<Image
				src={stat.icon}
				alt={stat.label}
				width={40}
				height={40}
				className="h-8 w-8 md:h-10 md:w-10"
			/>
			<div>
				<p className="text-lg font-semibold text-primary-foreground sm:text-xl">
					{display}
					{stat.suffix ?? ""}
				</p>
				<p className="text-xs font-medium text-slate-500">{stat.label}</p>
			</div>
		</motion.div>
	);
}

export function StatsBar() {
	const shouldReduceMotion = useReducedMotion();
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, amount: 0.4 });

	return (
		<section className="py-6 sm:py-8">
			<Container>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{
						duration: shouldReduceMotion ? 0.01 : 0.5,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-blue-100 bg-primary-background py-4 rounded-xl px-6"
				>
					{stats.map((stat, index) => (
						<StatItem
							key={stat.label}
							stat={stat}
							isInView={isInView}
							index={index}
							shouldReduceMotion={!!shouldReduceMotion}
						/>
					))}
				</motion.div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 5. App download banner
 * ------------------------------------------------------------------ */

export function AppDownload() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="py-6 sm:py-8">
			<Container>
				<motion.div
					initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{
						duration: shouldReduceMotion ? 0.01 : 0.6,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="flex flex-col items-center gap-8 rounded-3xl bg-primary-foreground p-8 text-center sm:p-10 md:flex-row md:justify-between md:text-left lg:p-12"
				>
					<div className="max-w-lg">
						<h3 className="text-xl font-bold text-white sm:text-2xl">
							Download Nagpurmart App
						</h3>
						<p className="max-w-xs mt-2 text-sm font-medium text-blue-100 sm:text-base">
							Aur paayein Best Price, Fast Delivery aur Amazing Offers!
						</p>
					</div>

					<div className="nm-pulse-ring rounded-2xl">
						<DisplayQrCode />
					</div>

					<div className="max-sm:w-full flex flex-col gap-3">
						<AppStoreBtn />
						<PlayStoreBtn />
					</div>
				</motion.div>
			</Container>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * 6. Trust badges
 * ------------------------------------------------------------------ */

const trustBadges: { icon: string; title: string; subtitle: string }[] = [
	{
		icon: Trust1,
		title: "Best Prices",
		subtitle: "Everyday",
	},
	{
		icon: Trust2,
		title: "Secure Payments",
		subtitle: "100% Safe",
	},
	{
		icon: Trust3,
		title: "On Time Delivery",
		subtitle: "Always",
	},
	{
		icon: Trust4,
		title: "Easy Returns",
		subtitle: "Hassle Free",
	},
	{
		icon: Trust5,
		title: "24*7 Support",
		subtitle: "We are Here",
	},
];

export function TrustBadges() {
	const shouldReduceMotion = useReducedMotion();

	const badgesContainerVariants = {
		hidden: {},
		visible: {
			transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
		},
	};

	const badgeVariants = {
		hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: shouldReduceMotion ? 0.01 : 0.45,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	return (
		<section className="py-12 sm:py-16">
			<Container>
				<motion.h3
					initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.6 }}
					transition={{
						duration: shouldReduceMotion ? 0.01 : 0.5,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="text-center text-xl font-semibold text-[#011d4c] sm:text-2xl"
				>
					Trusted by Thousands of Families in Nagpur
				</motion.h3>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={badgesContainerVariants}
					className="mt-10 flex flex-wrap justify-center gap-x-4 sm:gap-x-10 gap-y-8"
				>
					{trustBadges.map((badge) => (
						<motion.div
							key={badge.title}
							variants={badgeVariants}
							whileHover={shouldReduceMotion ? undefined : { y: -4 }}
							transition={{ type: "spring", stiffness: 300, damping: 20 }}
							className="flex w-32 items-center gap-2 text-center sm:w-40"
						>
							<motion.div
								whileHover={
									shouldReduceMotion ? undefined : { rotate: -8, scale: 1.15 }
								}
								transition={{ type: "spring", stiffness: 300, damping: 12 }}
							>
								<Image
									src={badge.icon}
									alt={badge.title}
									width={28}
									height={28}
									className="h-8 w-8"
								/>
							</motion.div>
							<div className="w-full flex flex-col items-start leading-tight">
								<p className="text-sm font-semibold text-start text-[#011d4c]">
									{badge.title}
								</p>
								<p className="text-xs font-medium text-slate-500">
									{badge.subtitle}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
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
