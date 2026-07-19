"use client";

import clsx from "clsx";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import {
	motion,
	useReducedMotion,
	useScroll,
	useTransform,
} from "framer-motion";
import {
	FounderImg,
	Background,
	Icon1,
	Icon2,
	Icon3,
	Icon4,
	Icon5,
	Icon6,
	Icon7,
} from "@/assets/founder";

interface FloatingIconProps {
	src: StaticImageData | string;
	alt: string;
	className?: string;
	size?: number;
	variant?: "badge" | "bare";
	delay?: number;
	floatOffset?: number;
	floatDuration?: number;
}

function FloatingIcon({
	src,
	alt,
	className,
	size = 22,
	variant = "badge",
	delay = 0,
	floatOffset = 8,
	floatDuration = 3,
}: FloatingIconProps) {
	const shouldReduceMotion = useReducedMotion();

	const wrapperClassName =
		variant === "bare"
			? clsx("pointer-events-none absolute z-20", className)
			: clsx(
					"absolute z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)]",
					className,
				);

	return (
		<motion.div
			className={wrapperClassName}
			initial={{ opacity: 0, scale: 0.5, y: shouldReduceMotion ? 0 : 14 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			viewport={{ once: true, amount: 0.4 }}
			whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
			transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
		>
			{/* Separate inner layer so the continuous float doesn't fight the entrance animation */}
			<motion.div
				animate={shouldReduceMotion ? undefined : { y: [0, -floatOffset, 0] }}
				transition={{
					duration: floatDuration,
					repeat: Infinity,
					ease: "easeInOut",
					delay,
				}}
			>
				<Image
					src={src}
					alt={alt}
					width={size}
					height={size}
					className="object-contain"
				/>
			</motion.div>
		</motion.div>
	);
}

export default function FounderBanner() {
	const shouldReduceMotion = useReducedMotion();
	const containerRef = useRef<HTMLDivElement>(null);

	// Whole illustration drifts gently against the scroll for a subtle
	// parallax feel as it passes through the viewport.
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});
	const y = useTransform(
		scrollYProgress,
		[0, 1],
		shouldReduceMotion ? [0, 0] : [-20, 20],
	);

	return (
		<motion.div
			ref={containerRef}
			style={{ y }}
			initial={{ opacity: 0, scale: 0.94 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
			className="relative mx-auto aspect-4/5 w-full max-w-100"
		>
			{/* Background blob */}
			<Image
				src={Background}
				alt="background blob"
				aria-hidden="true"
				fill
				className="pointer-events-none absolute z-0 object-contain"
			/>

			{/* Founder */}
			<Image
				src={FounderImg}
				alt="Founder of NagpurMart.in"
				priority
				className="absolute bottom-0 left-1/2 z-10 h-[88%] w-auto max-w-[82%] -translate-x-1/2 object-contain object-bottom"
			/>

			{/* Left top - Bag */}
			<FloatingIcon
				src={Icon1}
				alt="icon"
				variant="bare"
				className="left-[20%] top-[15%]"
				delay={0}
				floatOffset={8}
				floatDuration={3.2}
			/>

			{/* Right top - Price Tag */}
			<FloatingIcon
				src={Icon2}
				alt="icon"
				variant="bare"
				className="right-[25%] top-[7%]"
				delay={0.15}
				floatOffset={6}
				floatDuration={2.6}
			/>

			{/* Left middle - Phone */}
			<FloatingIcon
				src={Icon3}
				alt="icon"
				size={24}
				variant="bare"
				className="left-[8%] top-[30%]"
				delay={0.3}
				floatOffset={9}
				floatDuration={3.6}
			/>

			{/* Left bottom - Truck */}
			<FloatingIcon
				src={Icon4}
				alt="icon"
				variant="bare"
				className="left-[25%] top-[42%]"
				delay={0.1}
				floatOffset={7}
				floatDuration={2.8}
			/>

			{/* Right middle - Person */}
			<FloatingIcon
				src={Icon5}
				alt="icon"
				variant="bare"
				size={30}
				className="right-[2%] top-[30%]"
				delay={0.25}
				floatOffset={10}
				floatDuration={3.4}
			/>

			{/* Right middle - Calender */}
			<FloatingIcon
				src={Icon6}
				alt="icon"
				variant="bare"
				size={26}
				className="right-[20%] top-[20%]"
				delay={0.35}
				floatOffset={6}
				floatDuration={3}
			/>

			{/* Right bottom - Quote */}
			<FloatingIcon
				src={Icon7}
				alt="icon"
				variant="bare"
				size={30}
				className="right-[22%] bottom-[55%]"
				delay={0.2}
				floatOffset={8}
				floatDuration={2.9}
			/>
		</motion.div>
	);
}
