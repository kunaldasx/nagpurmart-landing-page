"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import { Container } from "../layout/Container";
import { APPSTORE_URL } from "@/constants";

const navigation = [
	{ label: "Home", href: "/" },
	{ label: "About Us", href: "/about" },
	{ label: "Feature", href: "/features" },
	{ label: "Careers", href: "/careers" },
	{ label: "Contact Us", href: "/contact" },
];

export function Navbar() {
	const pathname = usePathname();

	const [hidden, setHidden] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const lastScroll = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const current = window.scrollY;

			setIsScrolled(current > 8);

			if (current < 80) {
				setHidden(false);
			} else if (current > lastScroll.current) {
				setHidden(true);
				setMobileOpen(false);
			} else {
				setHidden(false);
			}

			lastScroll.current = current;
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setMobileOpen(false);
	}, [pathname]);

	const showPill = isScrolled || mobileOpen;

	return (
		<header
			className={clsx(
				"fixed inset-x-0 top-0 z-9999 transition-transform duration-300 motion-reduce:transition-none",
				hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0",
			)}
		>
			<Container className="py-3">
				<div
					className={clsx(
						"flex h-16 items-center justify-between rounded-3xl transition-all duration-300",
						showPill
							? "border border-neutral-200 bg-white/50 shadow-sm backdrop-blur-xl px-4"
							: "border border-transparent bg-transparent shadow-none",
					)}
				>
					{/* Logo */}
					<Link
						href="/"
						className="flex shrink-0 items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
					>
						<Image
							src="/images/logo.png"
							alt="NagpurMart"
							width={40}
							height={40}
							priority
						/>
						<Image
							src="/images/logo-text.png"
							alt="NagpurMart"
							width={100}
							height={100}
							priority
							className="w-full object-contain block sm:hidden"
						/>
					</Link>

					{/* Desktop navigation */}
					<nav className="hidden items-center gap-8 sm:flex xl:gap-10">
						{navigation.map((item) => {
							const active = pathname === item.href;
							return (
								<Link
									key={item.href}
									href={item.href}
									className={clsx(
										"group relative rounded text-[12px] font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 md:text-[15px] xl:text-[17px]",
										active
											? "text-primary-foreground"
											: "text-neutral-800 hover:text-primary-foreground",
									)}
								>
									{item.label}
									<span
										className={clsx(
											"absolute -bottom-1 left-0 h-0.5 bg-primary-foreground transition-all duration-300",
											active ? "w-full" : "w-0 group-hover:w-full",
										)}
									/>
								</Link>
							);
						})}
					</nav>

					{/* CTA + mobile toggle */}
					<div className="flex items-center gap-2 sm:gap-3">
						<a
							href={APPSTORE_URL}
							target="_blank"
							className="hidden items-center gap-2 rounded-full bg-primary-foreground px-3 py-2.5 text-sm font-semibold text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 sm:flex lg:px-6 lg:py-3 lg:text-base"
						>
							<ArrowDownToLine className="h-5 w-5" />
							Download App
						</a>

						<button
							type="button"
							onClick={() => setMobileOpen((v) => !v)}
							aria-label="Toggle menu"
							aria-expanded={mobileOpen}
							className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 sm:hidden"
						>
							{mobileOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile panel */}
				<div
					className={clsx(
						"overflow-hidden transition-all duration-300 motion-reduce:transition-none sm:hidden",
						mobileOpen
							? "mt-2 max-h-96 opacity-100"
							: "pointer-events-none max-h-0 opacity-0",
					)}
				>
					<div className="flex flex-col gap-1 rounded-3xl border border-neutral-200 bg-white/90 p-4 shadow-sm backdrop-blur-xl">
						{navigation.map((item) => {
							const active = pathname === item.href;
							return (
								<Link
									key={item.href}
									href={item.href}
									className={clsx(
										"rounded-xl px-3 py-2.5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground",
										active
											? "bg-blue-50 text-primary-foreground"
											: "text-neutral-800 hover:bg-neutral-50",
									)}
								>
									{item.label}
								</Link>
							);
						})}
						<a
							href={APPSTORE_URL}
							target="_blank"
							className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 font-semibold text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 sm:hidden"
						>
							<ArrowDownToLine className="h-4 w-4" />
							Download App
						</a>
					</div>
				</div>
			</Container>
		</header>
	);
}
