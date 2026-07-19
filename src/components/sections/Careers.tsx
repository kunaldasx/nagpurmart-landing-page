"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Clock, BriefcaseBusiness } from "lucide-react";
import {
	Banner,
	Perk1,
	Perk2,
	Perk3,
	Perk4,
	Perk5,
	Perk6,
	Opening1,
	Opening2,
	Opening3,
	Opening4,
	Opening5,
} from "@/assets/careers";
import Image from "next/image";
import { Container } from "../layout/Container";
import { fadeUp, staggerContainer } from "@/lib/motion";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const perks = [
	{
		icon: Perk1,
		title: "Make an Impact",
		description:
			"Your work directly impacts thousands of customers across Nagpur.",
	},
	{
		icon: Perk2,
		title: "Growing Together",
		description: "Learn, grow and build your career with a fast-growing team.",
	},
	{
		icon: Perk3,
		title: "Great Culture",
		description: "Open, friendly and inclusive work environment.",
	},
	{
		icon: Perk4,
		title: "Best Benefits",
		description: "Competitive salary, health benefits and performance rewards.",
	},
	{
		icon: Perk5,
		title: "Work-Life Balance",
		description: "Flexible work hours and a healthy work-life balance.",
	},
	{
		icon: Perk6,
		title: "Recognition",
		description: "We appreciate your efforts and celebrate your achievements.",
	},
];

const openings = [
	{
		icon: Opening1,
		title: "Delivery Partner",
		department: "Operations",
		location: "Nagpur",
		type: "Full Time",
		tag: "High Demand",
	},
	{
		icon: Opening2,
		title: "Customer Support Executive",
		department: "Customer Support",
		location: "Nagpur",
		type: "Full Time",
	},
	{
		icon: Opening3,
		title: "Marketing Executive",
		department: "Marketing",
		location: "Nagpur",
		type: "Full Time",
	},
	{
		icon: Opening4,
		title: "Warehouse Executive",
		department: "Operations",
		location: "Nagpur",
		type: "Full Time",
	},
	{
		icon: Opening5,
		title: "Mobile App Developer",
		department: "Technology",
		location: "Nagpur",
		type: "Full Time",
	},
];

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function CareersSection() {
	const heroRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});
	const imageY = useTransform(scrollYProgress, [0, 1], [0, 40]);

	return (
		<div className="bg-white py-8">
			{/* Careers Hero */}
			<section ref={heroRef} className="bg-[#F8FAFC] py-12 sm:py-16 lg:py-20">
				<Container>
					<div className="grid items-center justify-center gap-8 lg:grid-cols-2">
						{/* Left Content */}
						<motion.div
							className="order-2 lg:order-1"
							initial="hidden"
							animate="visible"
							variants={staggerContainer(0.12)}
						>
							<motion.div variants={fadeUp} className="inline-flex flex-col">
								<span className="inline-block border-b-2 border-primary-foreground pb-1.5 text-sm font-bold tracking-wider uppercase">
									Careers
								</span>
							</motion.div>

							<motion.h1
								variants={fadeUp}
								className="text-[clamp(2rem,3.2vw,3.75rem)] mt-5 text-4xl font-bold leading-tight tracking-tight"
							>
								Build Your Career.
								<span className="mt-1 block text-primary-foreground">
									Build Nagpurmart.in
								</span>
							</motion.h1>

							<motion.div
								variants={fadeUp}
								className="mt-7 max-w-125 space-y-4 text-sm leading-relaxed sm:text-base"
							>
								<p>
									At NagpurMart.in, we are on a mission to make shopping simple,
									affordable and fast for every household in Nagpur.
								</p>

								<p>
									Join our growing team and be a part of a journey
									<br className="hidden sm:block" />
									that is touching lives every day.
								</p>
							</motion.div>

							<motion.a
								href="#open-positions"
								variants={fadeUp}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.96 }}
								className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:text-base"
							>
								<BriefcaseBusiness className="h-5 w-5" />
								Explore Opportunities
							</motion.a>
						</motion.div>

						{/* Right Image */}
						<motion.div
							className="order-1 lg:order-2"
							initial={{ opacity: 0, scale: 0.94 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
						>
							<div className="relative aspect-16/10 w-full overflow-hidden rounded-4xl sm:rounded-[40px]">
								<motion.div
									style={{ y: imageY, scale: 1.15 }}
									className="absolute inset-0"
								>
									<Image
										src={Banner}
										alt="NagpurMart team"
										height={100}
										width={100}
										className="h-full w-full object-cover"
									/>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</Container>
			</section>

			{/* Why work with us */}
			<Container className="text-center py-16">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					variants={fadeUp}
				>
					<p className="text-sm font-semibold uppercase tracking-wide text-primary-foreground sm:text-base">
						Why Work With Us?
					</p>
					<h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
						More the
						<span className="underline decoration-primary-foreground decoration-2 underline-offset-4">
							n J
						</span>
						ust a Job
					</h2>
					<p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
						We believe in growing together and celebrating every success.
					</p>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={staggerContainer(0.08)}
					className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
				>
					{perks.map((perk) => (
						<motion.div
							key={perk.title}
							variants={fadeUp}
							whileHover={{ y: -6 }}
							className="group flex flex-col items-center rounded-xl border border-gray-100 bg-white px-4 py-4 shadow-sm transition-shadow duration-300 hover:shadow-xl"
						>
							<div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
								<Image
									src={perk.icon}
									alt={perk.title}
									width={20}
									height={20}
									className="h-12 w-12 text-primary-foreground"
								/>
							</div>
							<h3 className="mt-4 text-sm font-semibold text-gray-900">
								{perk.title}
							</h3>
							<p className="mt-2 text-xs leading-relaxed text-gray-500">
								{perk.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</Container>

			{/* Current openings */}
			<Container className="mt-12 text-center">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					variants={fadeUp}
				>
					<p className="text-sm font-semibold uppercase tracking-wide text-primary-foreground sm:text-base">
						Open Positions
					</p>
					<h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
						Current Openings
					</h2>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
					variants={staggerContainer(0.08)}
					className="mt-10 flex flex-col gap-3 text-left"
				>
					{openings.map((job) => (
						<motion.div
							key={job.title}
							variants={fadeUp}
							whileHover={{ y: -4 }}
							className="group grid grid-cols-1 gap-5 rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-blue-200 hover:shadow-md sm:px-8 lg:grid-cols-[1.4fr_1fr_auto] lg:items-center lg:gap-8"
						>
							{/* Job Info */}
							<div className="flex min-w-0 items-center gap-5">
								<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-blue-50 transition-transform duration-300 group-hover:scale-105">
									<Image
										src={job.icon}
										alt={job.title}
										width={48}
										height={48}
										className="h-12 w-12 object-contain"
									/>
								</div>

								<div className="min-w-0">
									<div className="flex flex-wrap items-center gap-2">
										<h3 className="text-sm font-semibold text-gray-900 sm:text-base">
											{job.title}
										</h3>

										{job.tag && (
											<motion.span
												animate={{ scale: [1, 1.06, 1] }}
												transition={{
													duration: 2,
													repeat: Infinity,
													ease: "easeInOut",
												}}
												className="whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-[10px] font-medium text-green-700"
											>
												{job.tag}
											</motion.span>
										)}
									</div>

									<p className="mt-0.5 text-xs text-gray-400 sm:text-sm">
										{job.department}
									</p>
								</div>
							</div>

							{/* Location & Job Type */}
							<div className="flex items-center gap-6 pl-19 lg:justify-start lg:pl-0">
								<div className="flex items-center gap-2 whitespace-nowrap text-xs text-gray-500 sm:text-sm">
									<MapPin className="h-4 w-4 shrink-0 text-gray-400" />
									<span>{job.location}</span>
								</div>

								<div className="flex items-center gap-2 whitespace-nowrap text-xs text-gray-500 sm:text-sm">
									<Clock className="h-4 w-4 shrink-0 text-gray-400" />
									<span>{job.type}</span>
								</div>
							</div>

							{/* Action */}
							<div className="pl-19 lg:justify-self-end lg:pl-0">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.96 }}
									className="w-full whitespace-nowrap rounded-full border border-blue-200 px-6 py-2.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-blue-50 sm:w-auto sm:text-sm"
								>
									View Details
								</motion.button>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={fadeUp}
				>
					<p className="mt-10 text-sm text-gray-500">
						Don&apos;t see the right role?{" "}
						<a
							href="#send-resume"
							className="font-medium text-primary-foreground hover:underline"
						>
							send us your resume
						</a>
					</p>
					<div className="mt-4 flex justify-center">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.96 }}
							className="rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
						>
							Send Your Resume
						</motion.button>
					</div>
				</motion.div>
			</Container>
		</div>
	);
}
