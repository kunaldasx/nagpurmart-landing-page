"use client";

import { useRef, type MouseEvent } from "react";
import {
	motion,
	useMotionValue,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
	type Variants,
} from "motion/react";
import Image from "next/image";
import { Container } from "../layout/Container";
import { Feature1, Feature2, Feature3, Feature4, Banner } from "@/assets/hero";
import { AppStoreBtn } from "../ui/AppStoreBtn";
import { PlayStoreBtn } from "../ui/PlayStoreBtn";
import { FLOATING_ITEMS, FloatingIcon, HeroBlob } from "../ui/HeroDecor";

const features = [
	{ icon: Feature1, title: "Sabse Sasta", subtitle: "Best Price" },
	{ icon: Feature2, title: "Fast Delivery", subtitle: "10–20 mins" },
	{ icon: Feature3, title: "Trusted by", subtitle: "Nagpur" },
	{ icon: Feature4, title: "24×7 Support", subtitle: "Always Here" },
];

// Fade + rise entrance for individual elements
const fadeUp = (reduced: boolean): Variants => ({
	hidden: { opacity: 0, y: reduced ? 0 : 22 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: reduced ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] },
	},
});

// Orchestrates a staggered reveal of children
const stagger = (reduced: boolean): Variants => ({
	hidden: {},
	show: {
		transition: {
			staggerChildren: reduced ? 0 : 0.12,
			delayChildren: reduced ? 0 : 0.1,
		},
	},
});

export default function Hero() {
	const reduced = !!useReducedMotion();

	// Scroll-linked parallax: banner drifts as the hero scrolls past
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});
	const bannerY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 90]);

	// Mouse-tilt parallax for the whole banner scene — the phone tilts and
	// the floating icons drift with it, read off the same mouseX/mouseY.
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const rotateX = useSpring(
		useTransform(mouseY, [-0.5, 0.5], reduced ? [0, 0] : [10, -10]),
		{ stiffness: 150, damping: 20 },
	);
	const rotateY = useSpring(
		useTransform(mouseX, [-0.5, 0.5], reduced ? [0, 0] : [-10, 10]),
		{ stiffness: 150, damping: 20 },
	);

	function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
		const rect = e.currentTarget.getBoundingClientRect();
		mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
		mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
	}
	function handleMouseLeave() {
		mouseX.set(0);
		mouseY.set(0);
	}

	return (
		<section
			ref={sectionRef}
			className="flex min-h-dvh items-center pb-8 pt-(--nav-h) md:pb-4"
		>
			<Container>
				<div className="grid w-full items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
					{/* Left */}
					<motion.div
						variants={stagger(reduced)}
						initial="hidden"
						animate="show"
						className="order-2 md:order-1 max-w-xl"
					>
						<motion.h1
							variants={fadeUp(reduced)}
							className="text-[clamp(2rem,4vw,4.5rem)] mt-5 text-4xl font-bold leading-tight tracking-tight"
						>
							Nagpur Ka Apna
							<br />
							<span className="text-blue-700">Shopping Partner</span>
						</motion.h1>

						<motion.p
							variants={fadeUp(reduced)}
							className="mt-5 text-[16px] font-semibold text-neutral-900 sm:text-lg"
						>
							Her Chiz, Sabse Sasta, Sabse Accha!
						</motion.p>

						<motion.p
							variants={fadeUp(reduced)}
							className="mt-3 text-sm leading-snug font-medium text-neutral-500 sm:text-base"
						>
							Groceries, Electronics, Fashion, Pharmacy & more —
							<br className="hidden sm:block" />
							sab kuch aapke doorstep par, best price ke sath.
						</motion.p>

						{/* Features */}
						<motion.div
							variants={stagger(reduced)}
							className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:gap-6"
						>
							{features.map(({ icon, title, subtitle }) => (
								<motion.div
									key={title}
									variants={fadeUp(reduced)}
									whileHover={reduced ? undefined : { y: -2 }}
									transition={{ type: "spring", stiffness: 300, damping: 20 }}
									className="group text-center"
								>
									<motion.div
										whileHover={
											reduced ? undefined : { scale: 1.07, rotate: 4 }
										}
										transition={{ type: "spring", stiffness: 300, damping: 15 }}
										className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground lg:h-14 lg:w-14"
									>
										<Image
											src={icon}
											alt={title}
											width={24}
											height={24}
											className="h-8 w-8 object-cover lg:h-12 lg:w-12"
										/>
									</motion.div>
									<h3 className="mt-2 text-sm font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-blue-700 lg:text-base">
										{title}
									</h3>
									<p className="text-xs text-neutral-500 lg:text-sm">
										{subtitle}
									</p>
								</motion.div>
							))}
						</motion.div>

						{/* Download */}
						<motion.h2
							variants={fadeUp(reduced)}
							className="mt-8 text-lg font-medium tracking-tight text-neutral-900 sm:text-lg lg:mt-10 lg:text-xl"
						>
							Download the{" "}
							<span className="relative text-primary-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary-foreground after:transition-all after:duration-300 hover:after:w-full">
								Nagpurmart.in
							</span>{" "}
							App Now!
						</motion.h2>

						<motion.div
							variants={fadeUp(reduced)}
							className="mt-6 flex flex-col gap-3 sm:flex-row"
						>
							<motion.div
								whileHover={reduced ? undefined : { scale: 1.04 }}
								whileTap={reduced ? undefined : { scale: 0.96 }}
							>
								<AppStoreBtn />
							</motion.div>
							<motion.div
								whileHover={reduced ? undefined : { scale: 1.04 }}
								whileTap={reduced ? undefined : { scale: 0.96 }}
							>
								<PlayStoreBtn />
							</motion.div>
						</motion.div>
					</motion.div>

					{/* Right */}
					<motion.div
						style={{ y: bannerY }}
						initial={{ opacity: 0, x: reduced ? 0 : 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: reduced ? 0.2 : 0.7,
							ease: [0.22, 1, 0.36, 1],
							delay: reduced ? 0 : 0.15,
						}}
						className="order-1 flex justify-center md:order-2"
					>
						<div
							onMouseMove={handleMouseMove}
							onMouseLeave={handleMouseLeave}
							className="relative flex items-center justify-center"
						>
							<HeroBlob reduced={reduced} />

							{FLOATING_ITEMS.map((item) => (
								<FloatingIcon
									key={item.id}
									item={item}
									reduced={reduced}
									mouseX={mouseX}
									mouseY={mouseY}
								/>
							))}

							<motion.div
								animate={reduced ? undefined : { y: [0, -14, 0] }}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								style={{ rotateX, rotateY, transformPerspective: 1000 }}
								className="relative z-10 h-80 w-50 sm:h-100 sm:w-60 md:h-120 md:w-70 lg:h-150 lg:w-87.5"
							>
								<Image
									src={Banner}
									alt="Nagpurmart App"
									fill
									className="object-contain"
									priority
								/>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	);
}
