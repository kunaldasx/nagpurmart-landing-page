import { Container } from "@/components/layout/Container";
import { Building2, Clock } from "lucide-react";

export function OfficeMapSection() {
	return (
		<section className="pb-16 sm:pb-20">
			<Container>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					{/* Map placeholder */}
					<div className="group relative flex min-h-70 items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-gray-100 transition-colors duration-200 hover:bg-gray-200 lg:min-h-80">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119074.33693756252!2d78.97100789999999!3d21.1494918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eb032b9129b7%3A0x95ce78f48f1810a2!2sNAGPUR%20MART!5e0!3m2!1sen!2sin!4v1784455007626!5m2!1sen!2sin"
							width="100%"
							height="250"
							loading="lazy"
							allowFullScreen
							referrerPolicy="no-referrer-when-downgrade"
							className="border-0 h-full"
						/>
					</div>

					{/* Office info cards */}
					<div className="flex flex-col justify-center gap-6">
						<div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm shadow-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
							<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-background text-primary-foreground transition-colors duration-200 group-hover:bg-primary-foreground group-hover:text-white">
								<Building2 className="h-8 w-8" aria-hidden="true" />
							</span>
							<div>
								<h3 className="font-semibold text-gray-900">Our Office</h3>
								<p className="mt-1 text-sm font-medium text-gray-500">
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
								<p className="mt-1 text-sm font-medium text-gray-500">
									Monday - Saturday: 9:00AM - 7:00PM
								</p>
								<p className="text-sm font-medium text-gray-500">
									Sunday: 10:00AM - 5:00PM
								</p>
								<p className="text-sm font-medium text-gray-500">
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
