import clsx from "clsx";
import Image, { type StaticImageData } from "next/image";
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
}

function FloatingIcon({
	src,
	alt,
	className,
	size = 22,
	variant = "badge",
}: FloatingIconProps) {
	if (variant === "bare") {
		return (
			<Image
				src={src}
				alt={alt}
				width={size}
				height={size}
				className={clsx(
					"pointer-events-none absolute z-20 object-contain",
					className,
				)}
			/>
		);
	}

	return (
		<div
			className={clsx(
				"absolute z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)]",
				className,
			)}
		>
			<Image
				src={src}
				alt={alt}
				width={size}
				height={size}
				className="object-contain"
			/>
		</div>
	);
}

export default function FounderBanner() {
	return (
		<div className="relative mx-auto aspect-[4/5] w-full max-w-[400px]">
			{/* Background blob */}
			<Image
				src={Background}
				alt=""
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
			/>

			{/* Right top - Price Tag */}
			<FloatingIcon
				src={Icon2}
				alt="icon"
				variant="bare"
				className="right-[25%] top-[7%]"
			/>

			{/* Left middle - Phone */}
			<FloatingIcon
				src={Icon3}
				alt="icon"
				size={24}
				variant="bare"
				className="left-[8%] top-[30%]"
			/>

			{/* Left bottom - Truck */}
			<FloatingIcon
				src={Icon4}
				alt="icon"
				variant="bare"
				className="left-[25%] top-[42%]"
			/>

			{/* Right middle - Person */}
			<FloatingIcon
				src={Icon5}
				alt="icon"
				variant="bare"
				size={30}
				className="right-[2%] top-[30%]"
			/>

			{/* Right middle - Calender */}
			<FloatingIcon
				src={Icon6}
				alt="icon"
				variant="bare"
				size={26}
				className="right-[20%] top-[20%]"
			/>

			{/* Right bottom - Quote */}
			<FloatingIcon
				src={Icon7}
				alt="icon"
				variant="bare"
				size={30}
				className="right-[22%] bottom-[55%]"
			/>
		</div>
	);
}
