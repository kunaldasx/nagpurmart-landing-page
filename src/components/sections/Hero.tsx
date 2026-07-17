import { Container } from "../layout/Container";
import Image from "next/image";
import { Feature1, Feature2, Feature3, Feature4, Banner } from "@/assets/hero";
import { AppStoreBtn } from "../ui/AppStoreBtn";
import { PlayStoreBtn } from "../ui/PlayStoreBtn";

const features = [
	{ icon: Feature1, title: "Sabse Sasta", subtitle: "Best Price" },
	{ icon: Feature2, title: "Fast Delivery", subtitle: "10–20 mins" },
	{ icon: Feature3, title: "Trusted by", subtitle: "Nagpur" },
	{ icon: Feature4, title: "24×7 Support", subtitle: "Always Here" },
];

export default function Hero() {
	return (
		<section className="flex min-h-dvh items-center pb-8 pt-(--nav-h) md:pb-4">
			<Container>
				<div className="grid w-full items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
					{/* Left */}
					<div className="order-2 md:order-1 max-w-xl">
						<h1 className="text-[clamp(2rem,3.2vw,3.75rem)] font-bold leading-[1.2] tracking-tight text-neutral-900">
							Nagpur Ka Apna
							<br />
							<span className="text-blue-700">Shopping Partner</span>
						</h1>

						<p className="mt-5 text-[16px] font-medium text-neutral-900 sm:text-lg">
							Her Chiz, Sabse Sasta, Sabse Accha!
						</p>

						<p className="mt-3 text-sm leading-snug text-neutral-500 sm:text-base">
							Groceries, Electronics, Fashion, Pharmacy & more —
							<br className="hidden sm:block" />
							sab kuch aapke doorstep par, best price ke sath.
						</p>

						{/* Features */}
						<div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:gap-6">
							{features.map(({ icon, title, subtitle }) => (
								<div key={title} className="text-center">
									<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground lg:h-14 lg:w-14">
										<Image
											src={icon}
											alt={title}
											width={24}
											height={24}
											className="h-6 w-6 object-cover lg:h-12 lg:w-12"
										/>
									</div>
									<h3 className="mt-2 text-sm font-semibold text-neutral-900 lg:text-base">
										{title}
									</h3>
									<p className="text-xs text-neutral-500 lg:text-sm">
										{subtitle}
									</p>
								</div>
							))}
						</div>

						{/* Download */}
						<h2 className="mt-8 text-lg font-medium tracking-tight text-neutral-900 sm:text-lg lg:mt-10 lg:text-xl">
							Download the{" "}
							<span className="text-primary-foreground">Nagpurmart.in</span> App
							Now!
						</h2>

						<div className="mt-6 flex flex-col gap-3 sm:flex-row">
							<AppStoreBtn />
							<PlayStoreBtn />
						</div>
					</div>

					{/* Right */}
					<div className="order-1 flex justify-center md:order-2">
						<div className="relative h-80 w-50 sm:h-100 sm:w-60 md:h-120 md:w-70 lg:h-150 lg:w-87.5">
							<Image
								src={Banner}
								alt="NagpurMart App"
								fill
								className="object-contain"
								priority
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
