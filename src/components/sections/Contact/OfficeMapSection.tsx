import { Container } from "@/components/layout/Container";
import { Building2, Clock, Image as ImageIcon, MapPin } from "lucide-react";

export function OfficeMapSection() {
	return (
		<section className="pb-16 sm:pb-20">
			<Container>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					{/* Map placeholder */}
					<div className="group relative flex min-h-70 items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-gray-100 transition-colors duration-200 hover:bg-gray-200 lg:min-h-80">
						<div className="flex flex-col items-center gap-2 text-gray-400">
							<ImageIcon
								className="h-10 w-10 transition-transform duration-200 group-hover:scale-110"
								aria-hidden="true"
							/>
							<span className="text-sm font-medium">Map placeholder</span>
						</div>
						<span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-foreground text-white shadow-lg ring-4 ring-white transition-transform duration-200 group-hover:scale-110">
							<MapPin className="h-4 w-4" aria-hidden="true" />
						</span>
					</div>

					{/* Office info cards */}
					<div className="flex flex-col justify-center gap-6">
						<div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm shadow-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
							<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-background text-primary-foreground transition-colors duration-200 group-hover:bg-primary-foreground group-hover:text-white">
								<Building2 className="h-8 w-8" aria-hidden="true" />
							</span>
							<div>
								<h3 className="font-semibold text-gray-900">Our Office</h3>
								<p className="mt-1 text-sm text-gray-500">
									NagpurMart&apos;s Pvt Ltd, 43 Sitabuldi, Nagpur - 440001,
									Maharashtra, India
								</p>
							</div>
						</div>

						<div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm shadow-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
							<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-background text-primary-foreground transition-colors duration-200 group-hover:bg-primary-foreground group-hover:text-white">
								<Clock className="h-8 w-8" aria-hidden="true" />
							</span>
							<div>
								<h3 className="font-semibold text-gray-900">Office Hours</h3>
								<p className="mt-1 text-sm text-gray-500">
									Monday - Saturday: 9:00AM - 7:00PM
								</p>
								<p className="text-sm text-gray-500">
									Sunday: 10:00AM - 5:00PM
								</p>
								<p className="text-sm text-gray-500">
									Closed on major public holidays
								</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
