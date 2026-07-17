import { DownloadBanner } from "@/assets/contact";
import { Container } from "@/components/layout/Container";
import { AppStoreBtn } from "@/components/ui/AppStoreBtn";
import { DisplayQrCode } from "@/components/ui/OrCode";
import { PlayStoreBtn } from "@/components/ui/PlayStoreBtn";
import { QrCode } from "lucide-react";
import Image from "next/image";

export function AppDownloadBanner() {
	return (
		<section className="pb-16 sm:pb-20">
			<Container>
				<div className="flex flex-col items-center gap-8 rounded-3xl bg-primary-background px-6 py-10 sm:px-10 md:flex-row">
					{/* Image placeholder */}
					<Image
						src={DownloadBanner}
						alt="Download Banner"
						width={48}
						height={48}
						className="h-42 w-42 object-contain"
						aria-hidden="true"
					/>
					{/* Copy */}
					<div className="flex-1 text-center md:text-left">
						<h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
							Download Nagpur
							<span className="text-primary-foreground">mart.in</span> App
						</h3>
						<p className="mt-2 text-gray-500">
							Aur paayein Best Price, Fast Delivery aur Amazing Offers!
						</p>
					</div>
					{/* QR + store badges */}
					<div className="flex items-center gap-4">
						<DisplayQrCode
							icon={QrCode}
							label="QR code"
							tone="white"
							className="h-28 w-28 shrink-0 rounded-2xl"
						/>

						<div className="flex flex-col gap-2">
							<AppStoreBtn />
							<PlayStoreBtn />
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
