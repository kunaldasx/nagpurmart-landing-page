"use client";

import { Container } from "@/components/layout/Container";
import clsx from "clsx";
import { ChevronDown, Send } from "lucide-react";
import { Contact1, Contact2, Contact3, Contact4 } from "@/assets/contact";
import Image from "next/image";
import { useState } from "react";
import { SUPPORT_EMAIL, SUPPORT_PHONE } from "@/constants";

interface ContactMethod {
	icon: string;
	title: string;
	lines: string[];
}

const contactMethods: ContactMethod[] = [
	{
		icon: Contact1,
		title: "Call Us",
		lines: [`+91 ${SUPPORT_PHONE}`, "Mon - Fri, 9:00 AM - 6PM"],
	},
	{
		icon: Contact2,
		title: "Email Us",
		lines: [SUPPORT_EMAIL, "We reply within 24 hours"],
	},
	{
		icon: Contact3,
		title: "Visit Us",
		lines: ["Nagpurmart's H.No 43, Sitabuldi, Nagpur - 440001, Maharashtra"],
	},
	{
		icon: Contact4,
		title: "Customer Support",
		lines: ["24/7 Support", "We are always here for you"],
	},
];

const subjectOptions = [
	"General Inquiry",
	"Order Support",
	"Returns & Refunds",
	"Partnership",
	"Other",
];

const inputClasses =
	"w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100";

export function ContactHero() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const whatsappMessage = `*New Contact Form Submission*
*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Subject:* ${form.subject}
	
*Message:*
${form.message}`;

		window.open(
			`https://wa.me/91${SUPPORT_PHONE}?text=${encodeURIComponent(whatsappMessage)}`,
			"_blank",
		);

		setForm({
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		});
	};

	return (
		<section className="py-16">
			<Container>
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
					{/* Left column: intro + contact methods */}
					<div>
						<span className="inline-block border-b-2 border-primary-foreground pb-1.5 text-base font-bold tracking-wider uppercase">
							Contact Us
						</span>

						<h1 className="text-[clamp(2rem,4vw,4.5rem)]  mt-5 text-4xl font-bold leading-tight tracking-tight">
							We&apos;re Here to{" "}
							<span className="text-primary-foreground">Help!</span>
						</h1>

						<p className="mt-4 max-w-md text-sm font-medium text-gray-500 sm:text-base">
							Have a question, suggestion or need help? Our team is always here
							to assist you. Reach out to us anytime!
						</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
							{contactMethods.map(({ icon: Icon, title, lines }) => (
								<div
									key={title}
									className="group flex items-center justify-start gap-4 rounded-xl border border-gray-100 bg-white px-4 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-md"
								>
									<Image
										src={Icon}
										alt={title}
										width={28}
										height={28}
										className="h-12 w-12 object-cover transition-transform duration-200 group-hover:scale-107"
										aria-hidden="true"
									/>

									<div>
										<h3 className="font-semibold text-gray-900">{title}</h3>
										{lines.map((line) => (
											<p
												key={line}
												className="text-sm font-medium text-gray-500"
											>
												{line}
											</p>
										))}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right column: message form */}
					<div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8">
						<h2 className="text-xl font-bold text-gray-900">
							Send Us a Message
						</h2>
						<p className="mt-1 text-sm text-gray-500">
							Fill in below and we will get back to you
						</p>

						<form className="mt-6 space-y-5" onSubmit={handleSubmit}>
							<div>
								<label
									htmlFor="name"
									className="mb-1.5 block text-sm font-medium text-gray-700"
								>
									Your Name
								</label>
								<input
									id="name"
									name="name"
									type="text"
									value={form.name}
									onChange={handleChange}
									placeholder="Enter Your Name"
									className={inputClasses}
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="mb-1.5 block text-sm font-medium text-gray-700"
								>
									Email Address
								</label>
								<input
									id="email"
									name="email"
									type="email"
									value={form.email}
									onChange={handleChange}
									placeholder="Enter Your Email"
									className={inputClasses}
								/>
							</div>

							<div>
								<label
									htmlFor="phone"
									className="mb-1.5 block text-sm font-medium text-gray-700"
								>
									Phone Number
								</label>
								<input
									id="phone"
									name="phone"
									type="tel"
									value={form.phone}
									onChange={handleChange}
									placeholder="Enter Your Phone"
									className={inputClasses}
								/>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="mb-1.5 block text-sm font-medium text-gray-700"
								>
									Subject
								</label>
								<div className="group relative">
									<select
										id="subject"
										name="subject"
										value={form.subject}
										onChange={handleChange}
										className={clsx(inputClasses, "appearance-none pr-10")}
									>
										<option value="" disabled>
											Select a Subject
										</option>
										{subjectOptions.map((subject) => (
											<option key={subject} value={subject}>
												{subject}
											</option>
										))}
									</select>
									<ChevronDown
										className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-hover:text-primary-foreground"
										aria-hidden="true"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="message"
									className="mb-1.5 block text-sm font-medium text-gray-700"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={4}
									value={form.message}
									onChange={handleChange}
									placeholder="Type your message here..."
									className={clsx(inputClasses, "resize-none")}
								/>
							</div>

							<button
								type="submit"
								className="group inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
							>
								Send Message
								<Send
									className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
									aria-hidden="true"
								/>
							</button>
						</form>
					</div>
				</div>
			</Container>
		</section>
	);
}
