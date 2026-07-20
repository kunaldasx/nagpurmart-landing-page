"use client";

import { Container } from "@/components/layout/Container";
import clsx from "clsx";
import {
	ArrowRight,
	CheckCircle2,
	FileCheck,
	LocateFixed,
	type LucideIcon,
	MapPin,
	RotateCcw,
	Sparkles,
	Upload,
	User,
	Zap,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Banner from "@/assets/brandIntegration/banner.jpg";
import Image from "next/image";

const LocationPicker = dynamic(() => import("@/components/ui/LocationPicker"), {
	ssr: false,
	loading: () => (
		<div className="h-87.5 rounded-xl bg-gray-100 animate-pulse" />
	),
});

interface RegistrationStep {
	icon: LucideIcon;
	title: string;
	description: string;
}

interface BrandForm {
	sellerName: string;
	mobileNumber: string;
	email: string;
	password: string;
	confirmPassword: string;
	businessLicense: File | null;
	articlesOfIncorporation: File | null;
	locationQuery: string;
	address: string;
	city: string;
	landmark: string;
	state: string;
	zipcode: string;
	country: string;
	latitude: string;
	longitude: string;
}

const registrationSteps: RegistrationStep[] = [
	{
		icon: User,
		title: "Personal Information",
		description: "Your name, contact details, and account credentials.",
	},
	{
		icon: FileCheck,
		title: "Required Documents",
		description: "Business license and articles of incorporation.",
	},
	{
		icon: MapPin,
		title: "Business Address",
		description: "Your store location, so customers can find you.",
	},
];

const bannerFeatures = [
	"Content Marketing",
	"Social Media Marketing",
	"Search Engine Optimization",
];

const initialForm: BrandForm = {
	sellerName: "",
	mobileNumber: "",
	email: "",
	password: "",
	confirmPassword: "",
	businessLicense: null,
	articlesOfIncorporation: null,
	locationQuery: "",
	address: "",
	city: "",
	landmark: "",
	state: "",
	zipcode: "",
	country: "",
	latitude: "",
	longitude: "",
};

const inputClasses =
	"w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100";

const labelClasses = "mb-1.5 block text-sm font-medium text-gray-700";

interface FileFieldProps {
	id: string;
	label: string;
	file: File | null;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FileField({ id, label, file, onChange }: FileFieldProps) {
	return (
		<div>
			<label htmlFor={id} className={labelClasses}>
				{label} <span className="text-red-500">*</span>
			</label>
			<label
				htmlFor={id}
				className={clsx(
					inputClasses,
					"group flex cursor-pointer items-center gap-2.5 text-gray-400 transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50/40",
				)}
			>
				<Upload
					className="h-4 w-4 shrink-0 transition-colors duration-200 group-hover:text-primary-foreground"
					aria-hidden="true"
				/>
				<span className={clsx("truncate", file && "font-medium text-gray-900")}>
					{file ? file.name : "Choose File"}
				</span>
				<input
					id={id}
					name={id}
					type="file"
					required
					onChange={onChange}
					className="sr-only"
				/>
			</label>
		</div>
	);
}

export function BrandIntegration() {
	const [form, setForm] = useState<BrandForm>(initialForm);
	const [locationError, setLocationError] = useState("");
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [searchResults, setSearchResults] = useState<any[]>([]);
	const [showSuggestions, setShowSuggestions] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, files } = e.target;
		setForm((prev) => ({ ...prev, [name]: files?.[0] ?? null }));
	};

	const handleReset = () => {
		setForm(initialForm);
		setLocationError("");
	};

	const searchAddress = async (query: string) => {
		if (!query.trim()) {
			setSearchResults([]);
			return;
		}

		const response = await fetch(
			`https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(
				query,
			)}&addressdetails=1&limit=5`,
		);

		const data = await response.json();

		setSearchResults(data);
		setShowSuggestions(true);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			searchAddress(form.locationQuery);
		}, 500);

		return () => clearTimeout(timer);
	}, [form.locationQuery]);

	const reverseGeocode = async (latitude: number, longitude: number) => {
		const res = await fetch(
			`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
		);

		const data = await res.json();

		if (data.error) {
			setLocationError("No address found for this location.");

			setForm((prev) => ({
				...prev,
				latitude: latitude.toFixed(6),
				longitude: longitude.toFixed(6),

				locationQuery: "",
				address: "",
				city: "",
				landmark: "",
				state: "",
				zipcode: "",
				country: "",
			}));

			return;
		}

		console.log(data);

		setForm((prev) => ({
			...prev,

			latitude: latitude.toFixed(6),
			longitude: longitude.toFixed(6),

			locationQuery: data.display_name ?? "",
			address: data.display_name,

			city:
				data?.address?.city ??
				data?.address?.town ??
				data?.address?.village ??
				"",

			state: data?.address?.state ?? "",

			country: data?.address?.country ?? "",

			zipcode: data?.address?.postcode ?? "",
		}));
	};

	const handleLocateMe = () => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				setForm((prev) => ({
					...prev,
					latitude: coords.latitude.toString(),
					longitude: coords.longitude.toString(),
				}));

				reverseGeocode(coords.latitude, coords.longitude);
			},
			(error) => {
				console.error(error);
			},
			{
				enableHighAccuracy: true,
				timeout: 10000,
			},
		);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (form.password !== form.confirmPassword) {
			return;
		}

		// TODO: wire this up to your brand registration API endpoint
		console.log("Brand registration submitted:", form);

		handleReset();
	};

	const passwordsMismatch =
		form.confirmPassword.length > 0 && form.password !== form.confirmPassword;

	return (
		<section className="py-16 sm:py-20">
			<Container>
				{/* Banner */}
				<div className="relative mb-12 overflow-hidden rounded-2xl bg-primary-background px-6 py-10 shadow-xl sm:px-10 sm:py-14 lg:mb-16">
					{/* Background Image */}
					<Image
						src={Banner}
						alt="Banner"
						fill
						priority
						className="object-cover object-center"
					/>

					{/* Dark Overlay */}
					<div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/25" />

					<div className="relative max-w-2xl">
						<span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-900 sm:text-sm">
							<Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
							Register Your Brand With Us
						</span>

						<h1 className="mt-5 text-[clamp(1.75rem,3.5vw,3rem)] font-bold leading-tight tracking-tight text-white">
							Empowering Your Success with{" "}
							<span className="text-primary-foreground">Nagpurmart.in</span>
						</h1>

						<p className="mt-4 text-sm font-medium text-blue-100 sm:text-base">
							Register your brand with us. Enable online ordering, manage your
							catalog, and connect fulfillment options that fit your operations.
						</p>

						<a
							href="#brand-registration-form"
							className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-2.5 text-sm font-semibold text-gray-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-foreground/70 hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-primary-foreground"
						>
							Register Now
							<ArrowRight
								className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
								aria-hidden="true"
							/>
						</a>
					</div>

					<div className="relative mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6">
						{bannerFeatures.map((feature) => (
							<span
								key={feature}
								className="inline-flex items-center gap-2 text-xs font-semibold text-blue-100 sm:text-sm"
							>
								<Zap
									className="h-3.5 w-3.5 text-primary-foreground"
									aria-hidden="true"
								/>
								{feature}
							</span>
						))}
					</div>
				</div>

				{/* Intro + form */}
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
					{/* Left column: intro + steps */}
					<div>
						<span className="inline-block border-b-2 border-primary-foreground pb-1.5 text-base font-bold uppercase tracking-wider sm:text-lg">
							Brand Registration
						</span>

						<h2 className="text-[clamp(2rem,4vw,4.5rem)] mt-5 text-4xl font-bold leading-tight tracking-tight">
							Register Your{" "}
							<span className="text-primary-foreground">Brand</span>
						</h2>

						<p className="mt-4 max-w-md text-sm font-medium text-gray-500 sm:text-base">
							Join Nagpurmart&apos;s growing network of local sellers. Fill in
							your details once, and our team will help you get set up.
						</p>

						<div className="mt-10 space-y-5">
							{registrationSteps.map(
								({ icon: Icon, title, description }, index) => (
									<div
										key={title}
										className="group flex items-start gap-4 rounded-xl border border-gray-100 bg-white px-4 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-md"
									>
										<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-primary-foreground transition-transform duration-200 group-hover:scale-107">
											<Icon className="h-5 w-5" aria-hidden="true" />
										</span>
										<div>
											<h3 className="font-semibold text-gray-900">{title}</h3>
											<p className="text-sm font-medium text-gray-500">
												{description}
											</p>
										</div>
									</div>
								),
							)}
						</div>
					</div>

					{/* Right column: registration form */}
					<div
						id="brand-registration-form"
						className="scroll-mt-24 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8"
					>
						<h2 className="text-xl font-bold text-gray-900">
							Start Your Registration
						</h2>
						<p className="mt-1 text-sm text-gray-500">
							Complete the form below and our team will review your application
						</p>

						<form className="mt-6 space-y-8" onSubmit={handleSubmit}>
							{/* Personal Information */}
							<fieldset>
								<legend className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-900">
									<User
										className="h-4 w-4 text-primary-foreground"
										aria-hidden="true"
									/>
									Personal Information
								</legend>

								<div className="space-y-5">
									<div>
										<label htmlFor="sellerName" className={labelClasses}>
											Seller Name <span className="text-red-500">*</span>
										</label>
										<input
											id="sellerName"
											name="sellerName"
											type="text"
											required
											value={form.sellerName}
											onChange={handleChange}
											placeholder="Enter your full name"
											className={inputClasses}
										/>
									</div>

									<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
										<div>
											<label htmlFor="mobileNumber" className={labelClasses}>
												Mobile Number <span className="text-red-500">*</span>
											</label>
											<input
												id="mobileNumber"
												name="mobileNumber"
												type="tel"
												required
												value={form.mobileNumber}
												onChange={handleChange}
												placeholder="Enter your mobile number"
												className={inputClasses}
											/>
										</div>
										<div>
											<label htmlFor="email" className={labelClasses}>
												Email Address <span className="text-red-500">*</span>
											</label>
											<input
												id="email"
												name="email"
												type="email"
												required
												value={form.email}
												onChange={handleChange}
												placeholder="Enter your email address"
												className={inputClasses}
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
										<div>
											<label htmlFor="password" className={labelClasses}>
												Password <span className="text-red-500">*</span>
											</label>
											<input
												id="password"
												name="password"
												type="password"
												required
												value={form.password}
												onChange={handleChange}
												placeholder="Create a password"
												className={inputClasses}
											/>
										</div>
										<div>
											<label htmlFor="confirmPassword" className={labelClasses}>
												Confirm Password <span className="text-red-500">*</span>
											</label>
											<input
												id="confirmPassword"
												name="confirmPassword"
												type="password"
												required
												value={form.confirmPassword}
												onChange={handleChange}
												placeholder="Re-enter your password"
												className={clsx(
													inputClasses,
													passwordsMismatch &&
														"border-red-300 focus:border-red-400 focus:ring-red-100",
												)}
											/>
											{passwordsMismatch && (
												<p className="mt-1.5 text-xs font-medium text-red-500">
													Passwords do not match
												</p>
											)}
										</div>
									</div>
								</div>
							</fieldset>

							{/* Required Documents */}
							<fieldset>
								<legend className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-900">
									<FileCheck
										className="h-4 w-4 text-primary-foreground"
										aria-hidden="true"
									/>
									Required Documents
								</legend>

								<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
									<FileField
										id="businessLicense"
										label="Business License"
										file={form.businessLicense}
										onChange={handleFileChange}
									/>
									<FileField
										id="articlesOfIncorporation"
										label="Articles of Incorporation"
										file={form.articlesOfIncorporation}
										onChange={handleFileChange}
									/>
								</div>
							</fieldset>

							{/* Business Address */}
							<fieldset>
								<legend className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-900">
									<MapPin
										className="h-4 w-4 text-primary-foreground"
										aria-hidden="true"
									/>
									Business Address
								</legend>

								<div className="space-y-5">
									<div>
										<div className="relative">
											<input
												type="text"
												value={form.locationQuery}
												onChange={(e) =>
													setForm((prev) => ({
														...prev,
														locationQuery: e.target.value,
													}))
												}
												placeholder="Search address..."
												className={clsx(inputClasses, "pr-11")}
											/>

											<button
												type="button"
												onClick={handleLocateMe}
												className="absolute right-2 top-1/2 -translate-y-1/2"
											>
												<LocateFixed />
											</button>

											{showSuggestions && searchResults.length > 0 && (
												<div className="absolute z-5000 mt-2 w-full rounded-lg border bg-white shadow-lg">
													{searchResults.map((item) => (
														<button
															key={item.place_id}
															type="button"
															onClick={() => {
																reverseGeocode(
																	Number(item.lat),
																	Number(item.lon),
																);

																setSearchResults([]);
																setShowSuggestions(false);
															}}
															className="block w-full border-b p-3 text-left hover:bg-gray-100"
														>
															{item.display_name}
														</button>
													))}
												</div>
											)}
										</div>
										<p className="mt-1.5 text-xs text-gray-400">
											Tap the pin to auto-fill your coordinates, or enter them
											manually below.
										</p>
										{locationError && (
											<p className="mt-1.5 text-xs font-medium text-red-500">
												{locationError}
											</p>
										)}
									</div>

									<div className="mt-5 overflow-hidden rounded-xl z-0">
										<LocationPicker
											latitude={Number(form.latitude || 20.5937)}
											longitude={Number(form.longitude || 78.9629)}
											onLocationChange={(lat, lng) => {
												reverseGeocode(lat, lng);
											}}
										/>
									</div>

									<div>
										<label htmlFor="address" className={labelClasses}>
											Address <span className="text-red-500">*</span>
										</label>
										<input
											id="address"
											name="address"
											type="text"
											required
											value={form.address}
											onChange={handleChange}
											placeholder="e.g. 123, Shree Complex, Station Road"
											className={inputClasses}
										/>
									</div>

									<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
										<div>
											<label htmlFor="city" className={labelClasses}>
												City <span className="text-red-500">*</span>
											</label>
											<input
												id="city"
												name="city"
												type="text"
												required
												value={form.city}
												onChange={handleChange}
												placeholder="e.g. Bhuj"
												className={inputClasses}
											/>
										</div>
										<div>
											<label htmlFor="landmark" className={labelClasses}>
												Landmark <span className="text-red-500">*</span>
											</label>
											<input
												id="landmark"
												name="landmark"
												type="text"
												required
												value={form.landmark}
												onChange={handleChange}
												placeholder="e.g. Near Bus Stand"
												className={inputClasses}
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
										<div>
											<label htmlFor="state" className={labelClasses}>
												State <span className="text-red-500">*</span>
											</label>
											<input
												id="state"
												name="state"
												type="text"
												required
												value={form.state}
												onChange={handleChange}
												placeholder="e.g. Gujarat"
												className={inputClasses}
											/>
										</div>
										<div>
											<label htmlFor="zipcode" className={labelClasses}>
												Zipcode <span className="text-red-500">*</span>
											</label>
											<input
												id="zipcode"
												name="zipcode"
												type="text"
												inputMode="numeric"
												required
												value={form.zipcode}
												onChange={handleChange}
												placeholder="e.g. 370001"
												className={inputClasses}
											/>
										</div>
									</div>

									<div>
										<label htmlFor="country" className={labelClasses}>
											Country <span className="text-red-500">*</span>
										</label>
										<input
											id="country"
											name="country"
											type="text"
											required
											value={form.country}
											onChange={handleChange}
											placeholder="e.g. India"
											className={inputClasses}
										/>
									</div>

									<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
										<div>
											<label htmlFor="latitude" className={labelClasses}>
												Latitude <span className="text-red-500">*</span>
											</label>
											<input
												id="latitude"
												name="latitude"
												type="text"
												inputMode="decimal"
												required
												value={form.latitude}
												onChange={handleChange}
												placeholder="e.g. 23.241999"
												className={inputClasses}
											/>
										</div>
										<div>
											<label htmlFor="longitude" className={labelClasses}>
												Longitude <span className="text-red-500">*</span>
											</label>
											<input
												id="longitude"
												name="longitude"
												type="text"
												inputMode="decimal"
												required
												value={form.longitude}
												onChange={handleChange}
												placeholder="e.g. 69.666881"
												className={inputClasses}
											/>
										</div>
									</div>
								</div>
							</fieldset>

							{/* Actions */}
							<div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
								<button
									type="button"
									onClick={handleReset}
									className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gray-100"
								>
									<RotateCcw className="h-4 w-4" aria-hidden="true" />
									Reset
								</button>
								<button
									type="submit"
									className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
								>
									Register
									<CheckCircle2
										className="h-4 w-4 transition-transform duration-200 group-hover:scale-110"
										aria-hidden="true"
									/>
								</button>
							</div>
						</form>
					</div>
				</div>
			</Container>
		</section>
	);
}
