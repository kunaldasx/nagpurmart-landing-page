import { APPSTORE_URL } from "@/constants";
import Image from "next/image";

export const PlayStoreBtn = () => {
	return (
		<a
			href={APPSTORE_URL}
			target="_blank"
			rel="noopener noreferrer"
			className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-black text-white transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 sm:w-56"
		>
			<Image
				src="/icons/playstore.svg"
				alt="Play Store"
				width={24}
				height={24}
				className="shrink-0"
			/>

			<div className="leading-tight">
				<p className="text-[11px] font-medium opacity-70">Get it on</p>
				<p className="text-base font-semibold sm:text-lg">Play Store</p>
			</div>
		</a>
	);
};
