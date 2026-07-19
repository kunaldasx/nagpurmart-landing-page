import { APPSTORE_URL } from "@/constants";
import Image from "next/image";

export const PlayStoreBtn = () => {
	return (
		<a
			href={APPSTORE_URL}
			target="_blank"
			className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-black cursor-pointer text-white transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 sm:w-56"
		>
			<Image
				src="/icons/playstore.svg"
				alt="Play Store"
				width={26}
				height={26}
			/>
			<div className="flex flex-col items-start leading-2">
				<p className="text-[12px] font-medium opacity-70">Get it on</p>
				<p className="text-lg font-semibold">Play Store</p>
			</div>
		</a>
	);
};
