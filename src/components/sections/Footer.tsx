"use client";

import { Facebook, Instagram, WhatsApp, X } from "@/assets/footer";
import { Container } from "@/components/layout/Container";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const companyLinks = [
	{
		label: "About Us",
		link: "/about",
	},
	{
		label: "Careers",
		link: "/careers",
	},
	{
		label: "Features",
		link: "/features",
	},
	{
		label: "Contact Us",
		link: "/contact",
	},
];

const supportLinks = [
	{
		label: "FAQ",
		link: "/faq",
	},
	{
		label: "Shipping Policy",
		link: "/shipping-policy",
	},
	{
		label: "Return & Refund Policy",
		link: "/return-and-refund-policy",
	},
	{
		label: "Terms & Conditions",
		link: "/terms-and-conditions",
	},
	{
		label: "Privacy Policy",
		link: "/privacy-policy",
	},
];

const legalLinks = [
	{
		label: "Terms & Conditions",
		link: "/terms-and-conditions",
	},
	{
		label: "Cancellation Policy",
		link: "/cancellation-policy",
	},
	{
		label: "Refund Policy",
		link: "/refund-policy",
	},
	{
		label: "Privacy Policy",
		link: "/privacy-policy",
	},
];

const socialLinks = [
	{ icon: WhatsApp, label: "WhatsApp" },
	{ icon: Facebook, label: "Facebook" },
	{ icon: Instagram, label: "Instagram" },
	{ icon: X, label: "X" },
];

function FooterColumn({
	title,
	links,
}: {
	title: string;
	links: { label: string; link: string }[];
}) {
	return (
		<div>
			<h3 className="font-semibold text-gray-900">{title}</h3>
			<ul className="mt-4 space-y-2.5">
				{links.map((link) => (
					<li key={link.label}>
						<Link
							href={link.link}
							className="text-sm text-gray-500 transition-colors hover:text-primary-foreground"
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export function Footer() {
	return (
		<footer className="border-t border-gray-100">
			<Container>
				<div className="relative grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:grid-cols-3 lg:grid-cols-5">
					{/* Brand column */}
					<div className="col-span-2 sm:col-span-3 lg:col-span-1">
						<div className="flex items-center gap-2">
							<span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground">
								<Image
									src="/images/logo-light.png"
									alt="logo"
									height={20}
									width={20}
									className="h-6 w-6 object-cover"
									aria-hidden="true"
								/>
							</span>
							<span className="text-lg font-bold text-gray-900">
								nagpur<span className="text-primary-foreground">mart.in</span>
							</span>
						</div>
						<p className="mt-4 text-sm text-gray-500">
							Har Chiz, Sabse Sasta, Sabse Accha
						</p>
						<p className="mt-4 text-xs text-gray-400">
							&copy; 2026 NagpurMart&apos;s Pvt Ltd. All Rights Reserved.
						</p>
					</div>
					<FooterColumn title="Company" links={companyLinks} />
					<FooterColumn title="Help & Support" links={supportLinks} />
					<FooterColumn title="Legal" links={legalLinks} />
					{/* Social column */}
					<div>
						<h3 className="font-semibold text-gray-900">Follow Us</h3>
						<div className="mt-4 flex items-center gap-3">
							{socialLinks.map(({ icon: Icon, label }) => (
								<a
									key={label}
									href="#"
									aria-label={label}
									className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-primary-background hover:text-primary-foreground"
								>
									<Image
										src={Icon}
										alt={label}
										width={16}
										height={16}
										className="h-6 w-6"
										aria-hidden="true"
									/>
								</a>
							))}
						</div>
						<p className="mt-4 flex items-center gap-1.5 text-xs text-gray-500 sm:text-sm">
							<span>Made with</span>
							<Heart
								className="h-3.5 w-3.5 fill-red-500 text-red-500"
								aria-hidden="true"
							/>
							<span>in Nagpur</span>
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
}
