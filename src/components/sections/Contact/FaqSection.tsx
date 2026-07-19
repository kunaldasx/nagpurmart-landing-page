"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/Container";

const faqs = [
	{
		question: "How can I track my order?",
		answer:
			'Once your order ships, we\'ll email and SMS you a tracking link. You can also check your order status anytime from the "My Orders" section of your account.',
	},
	{
		question: "What if I receive a damaged or wrong product?",
		answer:
			"Reach out within 48 hours of delivery with a photo of the item, and our support team will arrange a free replacement or a full refund.",
	},
	{
		question: "How can I return or refund my order?",
		answer:
			"Most items can be returned within 7 days of delivery. Start a return from your account and refunds are processed within 5-7 business days.",
	},
];

export function FaqSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className="py-8">
			<Container>
				<div className="mx-auto max-w-3xl text-center">
					<span className="relative inline-block text-base sm:text-lg font-bold uppercase tracking-wide text-primary-foreground after:absolute after:-bottom-1.5 after:left-1/2 after:h-0.5 after:w-6 after:-translate-x-1/2 after:bg-primary-foreground after:content-['']">
						FAQ
					</span>
					<h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
						Frequently Asked Questions
					</h2>
				</div>

				<div className="mx-auto mt-10 max-w-3xl divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white">
					{faqs.map((faq, index) => {
						const isOpen = openIndex === index;
						return (
							<div key={faq.question}>
								<button
									type="button"
									onClick={() => setOpenIndex(isOpen ? null : index)}
									aria-expanded={isOpen}
									className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
								>
									<span className="font-medium text-gray-900">
										{faq.question}
									</span>
									<ChevronDown
										className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${
											isOpen ? "rotate-180" : ""
										}`}
										aria-hidden="true"
									/>
								</button>
								{isOpen && (
									<p className="px-6 pb-4 text-sm leading-relaxed text-gray-500">
										{faq.answer}
									</p>
								)}
							</div>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
