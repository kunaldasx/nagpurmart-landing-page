import { APPSTORE_URL } from "@/constants";
import Image from "next/image";

export const AppStoreBtn = () => {
	return (
		<a
			href={APPSTORE_URL}
			target="_blank"
			rel="noopener noreferrer"
			className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-black text-white transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 sm:w-56"
		>
			<Image
				src="/icons/appstore.svg"
				alt="App Store"
				width={24}
				height={24}
				className="shrink-0"
			/>

			<div className="leading-tight">
				<p className="text-[11px] opacity-70">Download on the</p>
				<p className="text-base font-semibold sm:text-lg">App Store</p>
			</div>
		</a>
	);
};
