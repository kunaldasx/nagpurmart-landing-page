"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "../layout/Container";
import { useInView, useParallax } from "@/hooks/useScrollAnimation";
import {
	Feature1,
	Feature2,
	Feature3,
	Feature4,
	Value1,
	Value2,
	Value3,
	Value4,
	Value5,
	BannerBg,
	BannerPhone,
} from "@/assets/about";

interface Feature {
	title: string;
	icon: string;
	subtitle: string;
}

const features: Feature[] = [
	{ title: "Sabse Sasta", icon: Feature1, subtitle: "Best Prices" },
	{ title: "Fast Delivery", icon: Feature2, subtitle: "10-20 Mins" },
	{ title: "Trusted by", icon: Feature3, subtitle: "Nagpur" },
	{ title: "24*7 Support", icon: Feature4, subtitle: "Always Here" },
];

interface Value {
	title: string;
	icon: string;
	description: string;
}

const values: Value[] = [
	{
		title: "Customer First",
		icon: Value1,
		description: "Aapki satisfaction hamari priority hai",
	},
	{
		title: "Quality Assured",
		icon: Value2,
		description: "Har product Quality Check ke baad",
	},
	{
		title: "Best Prices",
		icon: Value3,
		description: "Har din sabse sasta deals aur offers",
	},
	{
		title: "Speed & Reliability",
		icon: Value4,
		description: "Fast delivery, on-time delivery",
	},
	{
		title: "Local & Proud",
		icon: Value5,
		description: "Nagpur ka brand, Nagpur ke liye",
	},
];

function AboutHero() {
	const [loaded, setLoaded] = useState(false);
	const bgRef = useParallax<HTMLDivElement>(0.12);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<Container as="section" className="py-16 sm:py-20">
			<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<div>
					<span
						className={`inline-block border-b-2 border-primary-foreground pb-1.5 text-sm font-bold tracking-wider uppercase transition-all duration-700 ${
							loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
						}`}
					>
						About Us
					</span>

					<h1
						className={`text-[clamp(2rem,3.2vw,3.75rem)] mt-5 text-4xl font-bold leading-tight tracking-tight transition-all duration-700 ${
							loaded
								? "opacity-100 translate-y-0 delay-100"
								: "opacity-0 translate-y-3"
						}`}
					>
						<span className="block">NagpurMart.in</span>
						<span className="block text-primary-foreground">
							Har Zarurat, Ek App.
						</span>
					</h1>

					<p
						className={`mt-5 max-w-md text-sm leading-relaxed text-gray-500 sm:text-base transition-all duration-700 ${
							loaded
								? "opacity-100 translate-y-0 delay-200"
								: "opacity-0 translate-y-3"
						}`}
					>
						NagpurMart.in ek local super app hai jo nagpur ke logo ko groceries,
						electronics, fashion, pharmacy aur bahut kuch best price mein,
						fastest delivery ke saath provide karta hai.
					</p>

					<div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
						{features.map((feature, i) => (
							<div
								key={feature.title}
								className={`group flex flex-col items-center text-center transition-all duration-700 ${
									loaded
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
								style={{
									transitionDelay: loaded ? `${300 + i * 100}ms` : "0ms",
								}}
							>
								<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-background text-white transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:shadow-lg">
									<Image
										src={feature.icon}
										alt={feature.title}
										width={28}
										height={28}
										className="h-8 w-8 transition-transform duration-300 group-hover:rotate-[8deg]"
									/>
								</span>
								<p className="mt-3 text-sm font-semibold text-gray-900">
									{feature.title}
								</p>
								<p className="text-xs text-gray-500">{feature.subtitle}</p>
							</div>
						))}
					</div>
				</div>

				<div
					className={`relative w-full aspect-[1.3/1] overflow-hidden rounded-[48px] bg-gray-100 transition-all duration-1000 ${
						loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
					}`}
				>
					{/* Background — drifts on scroll for a parallax feel */}
					<div ref={bgRef} className="absolute inset-0">
						<Image
							src={BannerBg}
							alt="NagpurMart Banner"
							fill
							priority
							className="object-cover"
						/>
					</div>

					{/* Phone mockup — gentle idle float */}
					<Image
						src={BannerPhone}
						alt="NagpurMart mobile app"
						className="absolute left-1/2 top-[53%] z-10 h-[86%] w-auto -translate-x-1/2 -translate-y-1/2 object-contain animate-float"
					/>
				</div>
			</div>
		</Container>
	);
}

function OurStory() {
	const { ref, inView } = useInView<HTMLDivElement>();

	return (
		<Container as="section" className="py-8">
			<div
				ref={ref}
				className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
					inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
				}`}
			>
				<p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground sm:text-base">
					Our Story
				</p>
				<h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
					Humari Kahani, Aapke Liye
				</h2>
				<p className="mt-6 text-sm leading-relaxed text-gray-500">
					NagpurMart.in ki shuruaat ek simple idea se hui - Nagpur ke logo ko ek
					aisa platform dena jahan unhe har category ke product best price mein,
					aasani se aur bharose ke saath mil sake.
				</p>
				<p className="mt-4 text-sm leading-relaxed text-gray-500">
					Aaj hum ek mission par hain - Har ghar tak quality products pahuchana
					aur shopping ko aur easy banana.
				</p>
			</div>
		</Container>
	);
}

function OurValues() {
	const { ref, inView } = useInView<HTMLDivElement>();

	return (
		<Container as="section" className="py-8">
			<div
				ref={ref}
				className={`text-center transition-all duration-700 ${
					inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
				}`}
			>
				<p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
					What We Believe In
				</p>
				<h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
					Humare Values
				</h2>
			</div>

			<div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
				{values.map((value, i) => (
					<div
						key={value.title}
						className={`group flex flex-col items-center text-center transition-all duration-700 ${
							inView
								? "opacity-100 translate-y-0 scale-100"
								: "opacity-0 translate-y-6 scale-95"
						}`}
						style={{ transitionDelay: inView ? `${i * 100}ms` : "0ms" }}
					>
						<span className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-primary-foreground transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:bg-blue-200 group-hover:shadow-lg">
							<Image
								src={value.icon}
								alt={value.title}
								width={28}
								height={28}
								className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
							/>
						</span>
						<p className="mt-4 text-sm font-semibold text-gray-900">
							{value.title}
						</p>
						<p className="mt-1.5 max-w-40 text-xs leading-normal text-gray-500">
							{value.description}
						</p>
					</div>
				))}
			</div>
		</Container>
	);
}

export default function AboutSection() {
	return (
		<>
			<AboutHero />
			<OurStory />
			<OurValues />
		</>
	);
}
