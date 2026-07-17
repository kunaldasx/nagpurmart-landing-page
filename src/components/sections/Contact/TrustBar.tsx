import { Container } from "@/components/layout/Container";
import { BadgeCheck, Headphones, ShieldCheck, Truck } from "lucide-react";

const trustItems = [
	{ icon: ShieldCheck, label: "100% Secure Payments" },
	{ icon: Truck, label: "Fast Delivery" },
	{ icon: Headphones, label: "24x7 Customer Support" },
	{ icon: BadgeCheck, label: "Best Prices Guaranteed" },
];

export function TrustBar() {
	return (
		<div className="bg-primary-foreground">
			<Container>
				<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-5 sm:justify-between">
					{trustItems.map(({ icon: Icon, label }) => (
						<div key={label} className="flex items-center gap-2.5 text-white">
							<Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
							<span className="text-sm font-medium">{label}</span>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
}
