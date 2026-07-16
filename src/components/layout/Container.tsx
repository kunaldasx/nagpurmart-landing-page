import clsx from "clsx";
import type { ElementType, ReactNode } from "react";

interface ContainerProps {
	as?: ElementType;
	className?: string;
	children: ReactNode;
}

/**
 * Shared horizontal alignment wrapper. Use this in Navbar, Hero, and any
 * section you add later so their content lines up on the same edges at
 * every breakpoint.
 */
export function Container({
	as: Tag = "div",
	className,
	children,
}: ContainerProps) {
	return (
		<Tag
			className={clsx(
				"mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12",
				className,
			)}
		>
			{children}
		</Tag>
	);
}
