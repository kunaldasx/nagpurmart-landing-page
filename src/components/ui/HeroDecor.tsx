"use client";

import type { ComponentType } from "react";
import {
	motion,
	useSpring,
	useTransform,
	type MotionValue,
} from "motion/react";

type IconProps = { className?: string };

// Placeholder — replace with a grocery basket icon.
function BasketIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 64 64" className={className} aria-hidden="true">
			<path
				d="M20 26 A12 14 0 0 1 44 26"
				fill="none"
				stroke="#1D4ED8"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<path
				d="M14 26 L50 26 L46 54 A4 4 0 0 1 42 58 L22 58 A4 4 0 0 1 18 54 Z"
				fill="#60A5FA"
				stroke="#1D4ED8"
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M20.5 30 L23.5 54"
				stroke="#1D4ED8"
				strokeWidth="1.5"
				opacity="0.45"
			/>
			<path
				d="M32 30 L32 54"
				stroke="#1D4ED8"
				strokeWidth="1.5"
				opacity="0.45"
			/>
			<path
				d="M43.5 30 L40.5 54"
				stroke="#1D4ED8"
				strokeWidth="1.5"
				opacity="0.45"
			/>
			<circle cx="24" cy="19" r="6.5" fill="#EF4444" />
			<circle cx="36" cy="16" r="7.5" fill="#22C55E" />
			<circle cx="46.5" cy="20" r="5.5" fill="#F59E0B" />
		</svg>
	);
}

// Placeholder — replace with a milk bottle / carton icon.
function MilkIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 64 64" className={className} aria-hidden="true">
			<rect x="24" y="2" width="16" height="6" rx="2" fill="#1D4ED8" />
			<rect x="26" y="8" width="12" height="8" fill="#93C5FD" />
			<path
				d="M26 14 L38 14 L46 26 L46 54 A4 4 0 0 1 42 58 L22 58 A4 4 0 0 1 18 54 L18 26 Z"
				fill="#EFF6FF"
				stroke="#1D4ED8"
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<rect x="18" y="36" width="28" height="10" fill="#1D4ED8" />
		</svg>
	);
}

// Placeholder — replace with a shopping bag icon.
function BagIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 64 64" className={className} aria-hidden="true">
			<path
				d="M24 18 L24 10 A8 8 0 0 1 40 10 L40 18"
				fill="none"
				stroke="#1D4ED8"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<path
				d="M16 18 L48 18 L52 56 A4 4 0 0 1 48 60 L16 60 A4 4 0 0 1 12 56 Z"
				fill="#DBEAFE"
				stroke="#1D4ED8"
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<line
				x1="16"
				y1="27"
				x2="48"
				y2="27"
				stroke="#1D4ED8"
				strokeWidth="1.5"
				opacity="0.35"
			/>
			<path d="M40 18 L40 24 L45 21 Z" fill="#F59E0B" />
		</svg>
	);
}

// Placeholder — replace with a leafy greens / veggie icon.
function LeafIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 64 64" className={className} aria-hidden="true">
			<g transform="rotate(-8 32 32)">
				<path
					d="M32 48 Q31 58 32 60"
					stroke="#16A34A"
					strokeWidth="7"
					strokeLinecap="round"
					fill="none"
				/>
				<path
					d="M32 9 C34 14 46 22 46 32 C46 42 34 50 32 55 C30 50 18 42 18 32 C18 22 30 14 32 9 Z"
					fill="#22C55E"
				/>
				<ellipse cx="27" cy="28" rx="5" ry="13" fill="#4ADE80" />
				<path
					d="M32 15 Q34 32 32 49"
					stroke="#16A34A"
					strokeWidth="2"
					strokeLinecap="round"
					fill="none"
				/>
			</g>
		</svg>
	);
}

// ─────────────────────────────────────────────────────────────────────────
// Layout config — one entry per floating item. Position/size are Tailwind
// classes so they read next to each other; everything is relative to the
// phone image's own box (the wrapper in Hero.tsx hugs the phone exactly).
// ─────────────────────────────────────────────────────────────────────────

type FloatingItem = {
	id: string;
	Icon: ComponentType<IconProps>;
	position: string;
	size: string;
	duration: number;
	delay: number;
	depth: number; // how far it drifts with the mouse, in px
	rotateRange: number; // degrees of bob-rotation each way
	behindPhone?: boolean; // render behind the phone image instead of in front
};

export const FLOATING_ITEMS: FloatingItem[] = [
	{
		id: "basket",
		Icon: BasketIcon,
		position: "left-[-13%] top-[3%] md:left-[-13%] md:top-[7%]",
		size: "h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24",
		duration: 5,
		delay: 0,
		depth: 14,
		rotateRange: 5,
		behindPhone: false,
	},
	{
		id: "milk",
		Icon: MilkIcon,
		position: "right-[-2%] top-[28%] md:right-[-11%] md:top-[27%]",
		size: "h-11 w-11 sm:h-13 sm:w-13 md:h-16 md:w-16",
		duration: 4.5,
		delay: 0.5,
		depth: 11,
		rotateRange: 6,
	},
	{
		id: "bag",
		Icon: BagIcon,
		position: "right-[0%] bottom-[10%] md:right-[-9%] md:bottom-[12%]",
		size: "h-13 w-13 sm:h-16 sm:w-16 md:h-18 md:w-18",
		duration: 5.5,
		delay: 1,
		depth: 16,
		rotateRange: 6,
	},
	{
		id: "leaf",
		Icon: LeafIcon,
		position: "left-[-2%] bottom-[15%] md:left-[-7%] md:bottom-[17%]",
		size: "h-10 w-10 md:h-14 md:w-14",
		duration: 4.2,
		delay: 0.3,
		depth: 9,
		rotateRange: 7,
	},
];

// ─────────────────────────────────────────────────────────────────────────
// FloatingIcon — wraps one icon with a looping bob/rotate plus a small
// mouse-parallax drift (reads the same mouseX/mouseY the phone tilt uses,
// so the whole scene reacts together). Respects prefers-reduced-motion.
// ─────────────────────────────────────────────────────────────────────────

export function FloatingIcon({
	item,
	reduced,
	mouseX,
	mouseY,
}: {
	item: FloatingItem;
	reduced: boolean;
	mouseX: MotionValue<number>;
	mouseY: MotionValue<number>;
}) {
	const parallaxX = useSpring(
		useTransform(
			mouseX,
			[-0.5, 0.5],
			reduced ? [0, 0] : [-item.depth, item.depth],
		),
		{ stiffness: 120, damping: 20 },
	);
	const parallaxY = useSpring(
		useTransform(
			mouseY,
			[-0.5, 0.5],
			reduced ? [0, 0] : [-item.depth, item.depth],
		),
		{ stiffness: 120, damping: 20 },
	);

	return (
		<motion.div
			className={`pointer-events-none absolute ${item.position} ${item.size} ${
				item.behindPhone ? "z-0" : "z-20"
			}`}
			style={{ x: parallaxX, y: parallaxY }}
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.6, delay: 0.5 + item.delay * 0.15 }}
		>
			<motion.div
				animate={
					reduced
						? undefined
						: {
								y: [0, -12, 0],
								rotate: [
									-item.rotateRange,
									item.rotateRange,
									-item.rotateRange,
								],
							}
				}
				transition={{
					duration: item.duration,
					delay: item.delay,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="h-full w-full drop-shadow-lg"
			>
				<item.Icon className="h-full w-full" />
			</motion.div>
		</motion.div>
	);
}

// ─────────────────────────────────────────────────────────────────────────
// HeroBlob — a single soft, slowly-morphing shape behind the phone.
// Pure CSS (animated border-radius), so there's no extra image to load.
// ─────────────────────────────────────────────────────────────────────────

export function HeroBlob({ reduced }: { reduced: boolean }) {
	return (
		<div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2">
			{/* Placeholder blob shape — regenerate a different silhouette at
			    https://9elements.github.io/fancy-border-radius/ if you want,
			    or swap this for an SVG blob of your own. */}
			<motion.div
				style={{ borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%" }}
				animate={
					reduced
						? undefined
						: {
								borderRadius: [
									"63% 37% 54% 46% / 55% 48% 52% 45%",
									"38% 62% 63% 37% / 41% 44% 56% 59%",
									"63% 37% 54% 46% / 55% 48% 52% 45%",
								],
								rotate: [0, 8, -6, 0],
							}
				}
				transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
				className="h-full w-full bg-linear-to-br from-blue-500/25 via-sky-400/15 to-amber-300/20 blur-2xl md:blur-3xl"
			/>
		</div>
	);
}
