import clsx from "clsx";
import { ComponentType } from "react";

type IconType = ComponentType<{ className?: string }>;

type PlaceholderTone = "blue" | "white" | "warm";

const toneClasses: Record<PlaceholderTone, string> = {
	blue: "border-2 border-dashed border-primary-foreground/40 bg-blue-50 text-primary-foreground/60",
	white: "border-2 border-dashed border-slate-300 bg-white text-slate-300",
	warm: "border-2 border-dashed border-orange-200 bg-gradient-to-br from-[#b6937e]/15 via-amber-50 to-blue-50 text-orange-300",
};

export function DisplayQrCode({
	icon: Icon,
	label,
	tone = "blue",
	className,
}: {
	icon: IconType;
	label: string;
	tone?: PlaceholderTone;
	className?: string;
}) {
	return (
		<div
			role="img"
			aria-label={label}
			className={clsx(
				"flex flex-col items-center justify-center gap-2 p-4",
				toneClasses[tone],
				className,
			)}
		>
			<Icon className="h-9 w-9" />
			<span className="text-center text-xs font-medium leading-tight">
				{label}
			</span>
		</div>
	);
}
