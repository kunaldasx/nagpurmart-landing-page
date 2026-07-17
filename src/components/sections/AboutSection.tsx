import { Container } from "../layout/Container";

/* Placeholder icon — swap with real icons (e.g. lucide-react) per slot */
function IconPlaceholder({ className = "h-5 w-5" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			className={className}
			aria-hidden="true"
		>
			<circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
			<circle cx="12" cy="12" r="2.25" fill="currentColor" />
		</svg>
	);
}

interface Feature {
	title: string;
	subtitle: string;
}

const features: Feature[] = [
	{ title: "Sabse Sasta", subtitle: "Best Prices" },
	{ title: "Fast Delivery", subtitle: "10-20 Mins" },
	{ title: "Trusted by", subtitle: "Nagpur" },
	{ title: "24*7 Support", subtitle: "Always Here" },
];

interface Stat {
	value: string;
	label: string;
}

const stats: Stat[] = [
	{ value: "1K+", label: "Happy Customers" },
	{ value: "1000+", label: "Products" },
	{ value: "50+", label: "Areas in Nagpur" },
	{ value: "4.7", label: "Average Rating" },
];

interface Value {
	title: string;
	description: string;
}

const values: Value[] = [
	{
		title: "Customer First",
		description: "Aapki satisfaction hamari priority hai",
	},
	{
		title: "Quality Assured",
		description: "Har product Quality Check ke baad",
	},
	{ title: "Best Prices", description: "Har din sabse sasta deals aur offers" },
	{
		title: "Speed & Reliability",
		description: "Fast delivery, on-time delivery",
	},
	{ title: "Local & Proud", description: "Nagpur ka brand, Nagpur ke liye" },
];

function AboutHero() {
	return (
		<Container as="section" className="py-16 sm:py-20">
			<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<div>
					<span className="inline-block border-b-2 border-primary-foreground pb-1.5 text-sm font-bold tracking-wider uppercase">
						About Us
					</span>

					<h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
						<span className="block text-gray-900">NagpurMart.in</span>
						<span className="block text-primary-foreground">
							Har Zarurat, Ek App.
						</span>
					</h1>

					<p className="mt-5 max-w-md text-sm leading-relaxed text-gray-500">
						NagpurMart.in ek local super app hai jo nagpur ke logo ko groceries,
						electronics, fashion, pharmacy aur bahut kuch best price mein,
						fastest delivery ke saath provide karta hai.
					</p>

					<div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="flex flex-col items-center text-center"
							>
								<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground text-white">
									<IconPlaceholder className="h-5 w-5" />
								</span>
								<p className="mt-3 text-sm font-semibold text-gray-900">
									{feature.title}
								</p>
								<p className="text-xs text-gray-500">{feature.subtitle}</p>
							</div>
						))}
					</div>
				</div>

				<div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gray-100">
					<img
						src="https://placehold.co/720x900?text=App+Preview"
						alt="NagpurMart app preview"
						className="h-full w-full object-cover"
					/>
				</div>
			</div>
		</Container>
	);
}

function OurStory() {
	return (
		<Container as="section" className="py-16 sm:py-20">
			<div className="mx-auto max-w-2xl text-center">
				<p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
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

			<div className="mt-12 rounded-2xl bg-blue-50 px-6 py-8 sm:px-10">
				<div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="flex items-center justify-center gap-3"
						>
							<IconPlaceholder className="h-5 w-5 shrink-0 text-primary-foreground" />
							<div className="text-left">
								<p className="text-lg font-bold text-gray-900">{stat.value}</p>
								<p className="text-xs text-gray-500">{stat.label}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
}

function OurValues() {
	return (
		<Container as="section" className="py-16 sm:py-20">
			<div className="text-center">
				<p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
					What We Believe In
				</p>
				<h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
					Humare Values
				</h2>
			</div>

			<div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
				{values.map((value) => (
					<div
						key={value.title}
						className="flex flex-col items-center text-center"
					>
						<span className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-primary-foreground">
							<IconPlaceholder className="h-7 w-7" />
						</span>
						<p className="mt-4 text-sm font-semibold text-gray-900">
							{value.title}
						</p>
						<p className="mt-1.5 max-w-[10rem] text-xs leading-relaxed text-gray-500">
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
