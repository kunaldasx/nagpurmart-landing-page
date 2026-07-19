import Image from "next/image";

export function DisplayQrCode() {
	return (
		<div
			role="img"
			aria-label="qr code"
			className="h-34 w-34 shrink-0 rounded-2xl flex flex-col items-center justify-center gap-2 border-2 border-dashed border-primary-foreground/40 bg-blue-50 text-primary-foreground/60 overflow-hidden"
		>
			<Image
				src="/images/qr-code.svg"
				alt="qr code"
				height={20}
				width={20}
				className="h-full w-full object-cover"
			/>
		</div>
	);
}
