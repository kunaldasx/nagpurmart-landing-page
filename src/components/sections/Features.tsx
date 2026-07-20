"use client";

import {
	Feature1,
	Feature2,
	Feature3,
	Feature4,
	TopFeature1,
	TopFeature2,
	TopFeature3,
	TopFeature4,
	TopFeature5,
	TopFeature6,
	TopFeature7,
	TopFeature8,
	Trust1,
	Trust2,
	Trust3,
	Trust4,
	Trust5,
	Trust6,
	Banner1,
	Banner2,
	Banner3,
} from "@/assets/features";
import Image from "next/image";
import {
	motion,
	useMotionValue,
	useReducedMotion,
	useSpring,
	useTransform,
} from "framer-motion";

import { Container } from "../layout/Container";
import { MouseEvent } from "react";

// ─────────────────────────────────────────────────────────
// Shared animation variants
// ─────────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: EASE },
	},
};

const staggerContainer = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.09, delayChildren: 0.05 },
	},
};

function ProductShowcase() {
	const shouldReduceMotion = useReducedMotion();

	const mvX = useMotionValue(0);
	const mvY = useMotionValue(0);
	const springX = useSpring(mvX, { stiffness: 150, damping: 20, mass: 0.4 });
	const springY = useSpring(mvY, { stiffness: 150, damping: 20, mass: 0.4 });

	// Each layer drifts by a different amount so the group reads as depth,
	// not a single flat image moving together.
	const phoneX = useTransform(springX, [-1, 1], [-8, 8]);
	const phoneY = useTransform(springY, [-1, 1], [-6, 6]);
	const headphonesX = useTransform(springX, [-1, 1], [12, -12]);
	const headphonesY = useTransform(springY, [-1, 1], [8, -8]);
	const productX = useTransform(springX, [-1, 1], [16, -16]);
	const productY = useTransform(springY, [-1, 1], [-10, 10]);

	function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
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
			className="relative mx-auto aspect-1.25/1 w-full max-w-150"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
		>
			{/* Left - App Phone */}
			<motion.div
				className="absolute bottom-[5%] left-[3%] top-[5%] w-[43%]"
				style={{ x: phoneX, y: phoneY }}
			>
				<motion.div
					className="relative h-full w-full"
					animate={shouldReduceMotion ? undefined : { y: [0, -5, 0] }}
					transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
				>
					<Image
						src={Banner1}
						alt="NagpurMart mobile app"
						fill
						priority
						sizes="(max-width: 768px) 43vw, 260px"
						className="object-contain drop-shadow-xl"
					/>
				</motion.div>
			</motion.div>

			{/* Top Right - Headphones */}
			<motion.div
				className="absolute right-[15%] top-[2%] h-[45%] w-[48%]"
				style={{ x: headphonesX, y: headphonesY }}
			>
				<motion.div
					className="relative h-full w-full"
					animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 0.4,
					}}
				>
					<Image
						src={Banner3}
						alt="Headphones"
						fill
						sizes="(max-width: 768px) 48vw, 290px"
						className="object-contain drop-shadow-xl"
					/>
				</motion.div>
			</motion.div>

			{/* Bottom Right - Product */}
			<motion.div
				className="absolute bottom-[4%] right-[15%] h-[43%] w-[48%]"
				style={{ x: productX, y: productY }}
			>
				<motion.div
					className="relative h-full w-full"
					animate={shouldReduceMotion ? undefined : { y: [0, -4, 0] }}
					transition={{
						duration: 4.5,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 0.8,
					}}
				>
					<Image
						src={Banner2}
						alt="Smartphone"
						fill
						sizes="(max-width: 768px) 48vw, 290px"
						className="object-contain drop-shadow-xl"
					/>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

const badges = [
	{ icon: Feature1, title: "Sabse Sasta", subtitle: "Best Prices" },
	{ icon: Feature2, title: "Fast Delivery", subtitle: "10-20 Mins" },
	{ icon: Feature3, title: "Trusted by", subtitle: "Nagpur" },
	{ icon: Feature4, title: "24*7 Support", subtitle: "Always Here" },
];

export function Hero() {
	return (
		<section className="bg-linear-to-b from-blue-50 to-white py-16">
			<Container>
				<div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						animate="visible"
					>
						<motion.span
							variants={fadeUp}
							className="inline-block border-b-2 border-primary-foreground pb-1.5 text-base font-bold tracking-wider uppercase"
						>
							Features
						</motion.span>
						<motion.h1
							variants={fadeUp}
							className="text-[clamp(2rem,4vw,4.5rem)] mt-5 text-4xl font-bold leading-tight tracking-tight"
						>
							Har Zarurat, Ek App.
							<br />
							<span className="text-blue-600">Nagpurmart.in</span>
						</motion.h1>
						<motion.p
							variants={fadeUp}
							className="mt-5 max-w-md text-sm font-medium leading-relaxed text-gray-500 sm:text-base"
						>
							NagpurMart.in aapko deta hai best quality products, best prices
							aur fastest delivery ka vaada.
						</motion.p>

						<motion.div
							variants={staggerContainer}
							className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-5"
						>
							{badges.map(({ icon, title, subtitle }) => (
								<motion.div
									key={title}
									variants={fadeUp}
									whileHover={{
										y: -2,
										transition: { duration: 0.25, ease: "easeOut" },
									}}
									className="flex flex-col items-center text-center"
								>
									<motion.div
										whileHover={{
											scale: 1.07,
											rotate: -4,
											transition: {
												type: "spring",
												stiffness: 300,
												damping: 15,
											},
										}}
										className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-foreground"
									>
										<Image
											src={icon}
											alt={title}
											width={28}
											height={28}
											className="h-6 w-6 object-cover"
										/>
									</motion.div>
									<p className="mt-3 text-sm font-semibold text-gray-900">
										{title}
									</p>
									<p className="text-xs font-medium text-gray-400">
										{subtitle}
									</p>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					<ProductShowcase />
				</div>
			</Container>
		</section>
	);
}

const topFeatures = [
	{
		icon: TopFeature1,
		title: "Wide Range of Products",
		desc: "Groceries, electronics, fashion, pharmacy aur bahut kuch- sab ek hi app par.",
	},
	{
		icon: TopFeature2,
		title: "Best Prices",
		desc: "Roz ke use ki cheezein sabse kam daam par. Best prices, always.",
	},
	{
		icon: TopFeature3,
		title: "Fast Delivery",
		desc: "10-20 minutes mein aapke order ki fast delivery.",
	},
	{
		icon: TopFeature4,
		title: "Trusted & Secure",
		desc: "100% secure payments aur trusted shopping experience.",
	},
	{
		icon: TopFeature5,
		title: "Live Order Tracking",
		desc: "Apne order ki har update real-time track karein.",
	},
	{
		icon: TopFeature6,
		title: "Multiple Payment option",
		desc: "UPI, Cards, COD aur wallet - pay the way you want.",
	},
	{
		icon: TopFeature7,
		title: "Exciting Offers",
		desc: "Roz naya deals, offers aur discounts ka faayda uthayein.",
	},
	{
		icon: TopFeature8,
		title: "24*7 Customer Support",
		desc: "Koi bhi sawaal? Hum hamesha aapke saath hain.",
	},
];

const trustPoints = [
	{ icon: Trust1, title: "Local & Reliable", desc: "Proudly serving Nagpur" },
	{
		icon: Trust2,
		title: "Support Local",
		desc: "Local businesses aur vendors ka support",
	},
	{ icon: Trust3, title: "Easy Returns", desc: "Hassle-free returns policy." },
	{
		icon: Trust4,
		title: "Data Security",
		desc: "Aapki personal details 100% safe.",
	},
	{
		icon: Trust5,
		title: "Quality Assured",
		desc: "Best quality products ki guarantee.",
	},
	{
		icon: Trust6,
		title: "Sustainable Future",
		desc: "Better shopping better tomorrow.",
	},
];

export function TopFeatured() {
	return (
		<section className="bg-white py-8">
			<Container>
				<motion.h2
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
				>
					Nagpur<span className="text-blue-600">mart.in</span>{" "}
					<span className="border-b-2 border-blue-600">App</span> Ki Top
					Featured
				</motion.h2>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
				>
					{topFeatures.map(({ icon, title, desc }) => (
						<motion.div
							key={title}
							variants={fadeUp}
							whileHover={{
								y: -4,
								transition: { duration: 0.25, ease: "easeOut" },
							}}
							className="rounded-2xl bg-gray-50 p-6 border border-slate-200 text-center flex flex-col items-center justify-center transition-colors duration-300 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-lg"
						>
							<motion.div
								whileHover={{
									scale: 1.07,
									rotate: -4,
									transition: { type: "spring", stiffness: 300, damping: 15 },
								}}
								className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-background text-white"
							>
								<Image
									src={icon}
									alt={title}
									width={28}
									height={28}
									className="h-8 w-8 object-contain mx-auto"
								/>
							</motion.div>
							<h3 className="mt-4 text-sm font-semibold text-gray-900">
								{title}
							</h3>
							<p className="mt-2 text-xs font-medium leading-relaxed text-gray-500">
								{desc}
							</p>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="mt-6 rounded-3xl bg-blue-100 px-6 py-6 sm:px-10"
				>
					<motion.div
						variants={staggerContainer}
						className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6"
					>
						{trustPoints.map(({ icon, title, desc }) => (
							<motion.div
								key={title}
								variants={fadeUp}
								whileHover={{
									y: -2,
									transition: { duration: 0.2, ease: "easeOut" },
								}}
								className="flex flex-col items-center text-center"
							>
								<motion.div
									whileHover={{
										scale: 1.07,
										transition: {
											type: "spring",
											stiffness: 300,
											damping: 15,
										},
									}}
								>
									<Image
										src={icon}
										alt={title}
										width={28}
										height={28}
										className="h-8 w-8 object-contain"
									/>
								</motion.div>
								<h4 className="mt-3 text-sm font-semibold text-gray-900">
									{title}
								</h4>
								<p className="mt-1 text-xs font-medium text-gray-500">{desc}</p>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</Container>
		</section>
	);
}

export default function Features() {
	return (
		<>
			<Hero />
			<TopFeatured />
		</>
	);
}
