"use client";

import { Fragment, useEffect, useState } from "react";
import clsx from "clsx";
import { ArrowRight, Download } from "lucide-react";
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
import { DisplayQrCode } from "../ui/OrCode";
import { useInView } from "@/hooks/useScrollAnimation";
import {
	motion,
	useMotionValue,
	useReducedMotion,
	useSpring,
	useTransform,
} from "motion/react";

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

function PhoneBanner() {
	const shouldReduceMotion = useReducedMotion();

	const mvX = useMotionValue(0);
	const mvY = useMotionValue(0);

	const springX = useSpring(mvX, {
		stiffness: 140,
		damping: 22,
		mass: 0.5,
	});

	const springY = useSpring(mvY, {
		stiffness: 140,
		damping: 22,
		mass: 0.5,
	});

	// Slight depth difference between layers
	const phoneX = useTransform(springX, [-1, 1], [-6, 6]);
	const phoneY = useTransform(springY, [-1, 1], [-5, 5]);

	const bagX = useTransform(springX, [-1, 1], [8, -8]);
	const bagY = useTransform(springY, [-1, 1], [6, -6]);

	const blobX = useTransform(springX, [-1, 1], [4, -4]);
	const blobY = useTransform(springY, [-1, 1], [3, -3]);

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
		if (shouldReduceMotion) return;

		const rect = e.currentTarget.getBoundingClientRect();

		mvX.set((e.clientX - rect.left) / rect.width - 0.5);
		mvY.set((e.clientY - rect.top) / rect.height - 0.5);
	}

	function handleMouseLeave() {
		mvX.set(0);
		mvY.set(0);
	}

	return (
		<motion.div
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="relative mx-auto mt-12 translate-y-[-40%] aspect-square w-full max-w-130"
			initial={{ opacity: 0, scale: 0.94 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			}}
		>
			{/* Background Blob */}
			<motion.div
				className="absolute right-[30%] top-1/2 z-0 w-[72%]"
				style={{
					x: blobX,
					y: blobY,
				}}
			>
				<motion.div
					animate={
						shouldReduceMotion
							? undefined
							: {
									y: [0, -2, 0],
									scale: [1, 1.02, 1],
								}
					}
					transition={{
						duration: 7,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<Image
						src={BannerBg}
						alt=""
						aria-hidden
						className="h-auto w-full object-contain will-change-transform"
					/>
				</motion.div>
			</motion.div>

			{/* Grocery Bag */}
			<motion.div
				className="absolute bottom-[-10%] right-[24%] z-10 w-[38%]"
				style={{
					x: bagX,
					y: bagY,
				}}
			>
				<motion.div
					animate={
						shouldReduceMotion
							? undefined
							: {
									y: [0, -4, 0],
									rotate: [0, 1.5, 0],
								}
					}
					transition={{
						duration: 5.5,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 0.4,
					}}
				>
					<Image
						src={BannerItem}
						alt="Grocery Bag"
						className="h-auto w-full object-contain will-change-transform"
					/>
				</motion.div>
			</motion.div>

			{/* Phone */}
			<motion.div
				className="absolute left-[5%] top-[45%] z-20 w-[46%]"
				style={{
					x: phoneX,
					y: phoneY,
				}}
			>
				<motion.div
					animate={
						shouldReduceMotion
							? undefined
							: {
									y: [0, -5, 0],
								}
					}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<Image
						src={BannerPhone}
						alt="App Screenshot"
						priority
						className="h-auto w-full object-contain will-change-transform"
					/>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

function AppHero() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const frame = requestAnimationFrame(() => setMounted(true));
		return () => cancelAnimationFrame(frame);
	}, []);

	return (
		<section className="bg-[#f7faff] py-12 sm:py-16">
			<Container>
				<div className="grid grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2 lg:gap-12">
					<div>
						<span
							className={clsx(
								"inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-700 ease-out",
								mounted
									? "opacity-100 translate-y-0"
									: "opacity-0 -translate-y-2",
							)}
						>
							<Download className="h-4 w-4" />
							Download App
						</span>

						<h1
							className={clsx(
								"text-[clamp(2rem,4vw,4.5rem)] mt-5 text-4xl font-bold leading-tight tracking-tight transition-all duration-700 ease-out",
								mounted
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4",
							)}
							style={{ transitionDelay: mounted ? "80ms" : "0ms" }}
						>
							<span>
								Nagpur<span className="text-primary-foreground">mart.in</span>{" "}
								App
							</span>
							<br />
							<span className="text-primary-foreground">
								Har Zarurat, Ek App.
							</span>
						</h1>

						<p
							className={clsx(
								"mt-4 max-w-md text-sm font-medium leading-relaxed text-slate-700 transition-all duration-700 ease-out sm:text-base",
								mounted
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4",
							)}
							style={{ transitionDelay: mounted ? "160ms" : "0ms" }}
						>
							Groceries, electronics, fashion, pharmacy aur bahut kuchh - sab
							kuch aapke phone par. Best prices, fastest delivery, trusted by
							Nagpur
						</p>

						<div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
							{heroFeatures.map((feature, i) => (
								<div
									key={feature.title}
									className={clsx(
										"group flex flex-col items-start gap-2 transition-all duration-700 ease-out",
										mounted
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-4",
									)}
									style={{
										transitionDelay: mounted ? `${240 + i * 80}ms` : "0ms",
									}}
								>
									<Image
										src={feature.icon}
										alt={feature.title}
										width={32}
										height={32}
										className="h-8 w-8 object-contain px-auto transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-107 md:h-12 md:w-12"
									/>
									<p className="text-sm font-semibold text-[#011d4c]">
										{feature.title}
									</p>
									<p className="text-xs font-medium leading-snug text-slate-500">
										{feature.description}
									</p>
								</div>
							))}
						</div>

						<div
							className={clsx(
								"mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center transition-all duration-700 ease-out",
								mounted
									? "translate-y-0 opacity-100"
									: "translate-y-4 opacity-0",
							)}
							style={{ transitionDelay: mounted ? "560ms" : "0ms" }}
						>
							<div className="w-full sm:w-auto transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:scale-105">
								<AppStoreBtn />
							</div>

							<div className="w-full sm:w-auto transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:scale-105">
								<PlayStoreBtn />
							</div>
						</div>
					</div>

					<PhoneBanner />
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
	const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>();
	const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>(0.1);

	return (
		<section className="py-12 sm:py-16">
			<Container>
				<div
					ref={headerRef}
					className={clsx(
						"transition-all duration-700 ease-out",
						headerInView
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-6",
					)}
				>
					<p className="text-center text-base font-bold uppercase tracking-wider text-primary-foreground sm:text-lg">
						Kyun Download Karein?
					</p>
					<h2 className="mt-2 text-center text-2xl font-bold text-[#011d4c] sm:text-3xl">
						Nagpur<span className="text-primary-foreground">mart.in</span> App
						Ke Fayde
					</h2>
				</div>

				<div
					ref={gridRef}
					className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
				>
					{benefits.map((benefit, i) => (
						<div
							key={benefit.title}
							className={clsx(
								"transition-all duration-700 ease-out",
								gridInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-6",
							)}
							style={{
								transitionDelay: gridInView
									? `${Math.min(i * 60, 420)}ms`
									: "0ms",
							}}
						>
							<div className="group flex h-full flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary-foreground/40 hover:shadow-lg">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-background transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6 lg:h-14 lg:w-14">
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
						</div>
					))}
				</div>
			</Container>
			s
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
	index,
	inView,
}: {
	number: number;
	icon: string;
	scale: string;
	description: string;
	index: number;
	inView: boolean;
}) {
	return (
		<div
			className="transition-all duration-700 ease-out"
			style={{
				opacity: inView ? 1 : 0,
				transform: inView ? "translateY(0)" : "translateY(24px)",
				transitionDelay: inView ? `${index * 120}ms` : "0ms",
			}}
		>
			<div className="group relative flex w-36 flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 pt-5 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg sm:w-40">
				<span
					className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground text-xs font-bold text-white transition-transform duration-500"
					style={{
						transform: inView ? "scale(1)" : "scale(0)",
						transitionDelay: inView ? `${index * 120 + 250}ms` : "0ms",
						transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
					}}
				>
					{number}
				</span>
				<p className="text-sm font-medium leading-snug text-[#011d4c]">
					{description}
				</p>
				<div className="flex h-24 w-24 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110">
					<Image
						src={icon}
						alt="Step icon"
						width={56}
						height={56}
						className={clsx("object-contain", scale)}
					/>
				</div>
			</div>
		</div>
	);
}

export function DownloadSteps() {
	const { ref: stepsRef, inView: stepsInView } = useInView<HTMLDivElement>(0.1);

	return (
		<section className="pb-12 pt-2 sm:pb-16">
			<Container>
				<p className="text-center text-base font-bold sm:text-lg uppercase tracking-wider text-primary-foreground">
					Kaise Download Karien
				</p>
				<h2 className="mt-2 text-center text-2xl font-bold text-[#011d4c] sm:text-3xl">
					Download Karna Hai Bilkul Easy
				</h2>

				<div className="mt-10 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center">
					<div
						ref={stepsRef}
						className="flex flex-wrap items-start justify-center gap-x-4 gap-y-10"
					>
						{downloadSteps.map((step, i) => (
							<Fragment key={step.description}>
								<StepCard
									number={i + 1}
									icon={step.icon}
									scale={step.scale}
									description={step.description}
									index={i}
									inView={stepsInView}
								/>
								{i < downloadSteps.length - 1 && (
									<ArrowRight
										aria-hidden="true"
										className="nm-arrow-flow mt-12 hidden h-6 w-6 shrink-0 text-blue-400 md:block"
										style={{ animationDelay: `${i * 0.15}s` }}
									/>
								)}
							</Fragment>
						))}
					</div>

					<div className="flex w-full max-w-xs flex-col items-center gap-4 rounded-3xl bg-primary-foreground p-6 text-center transition-transform duration-300 ease-out hover:scale-[1.03]">
						<h3 className="text-base font-bold text-white">
							Scan & Download NagpurMart App
						</h3>
						<div className="nm-pulse-ring rounded-2xl">
							<DisplayQrCode />
						</div>
						<p className="text-xs font-medium text-blue-100">
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
