"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useInView } from "@/hooks/useScrollAnimation";
import { Container } from "@/components/layout/Container";

export interface Highlight {
	title: string;
	icon: ReactNode;
	subtitle: string;
}

export interface TocItem {
	id: string;
	label: string;
}

export interface Clause {
	id: string;
	title: string;
	body: string[];
}

function TermsHero({
	heading,
	description,
	highlights,
}: {
	heading: string;
	description: string;
	highlights: Highlight[];
}) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setLoaded(true);
	}, []);

	return (
		<Container as="section" className="py-12 mt-14">
			<div className="mx-auto max-w-2xl text-center">
				<span
					className={`inline-block border-b-2 border-primary-foreground pb-1.5 text-base font-bold tracking-wider uppercase transition-all duration-700 ${
						loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
					}`}
				>
					Legal
				</span>

				<h1
					className={`text-[clamp(1.5rem,4vw,4.5rem)] mt-5 text-4xl font-bold leading-tight tracking-tight transition-all duration-700 ${
						loaded
							? "opacity-100 translate-y-0 delay-100"
							: "opacity-0 translate-y-3"
					}`}
				>
					<span className="block">Nagpurmart.in</span>
					<span className="block text-primary-foreground">{heading}</span>
				</h1>

				<p
					className={`mt-5 text-base leading-relaxed text-gray-500 sm:text-lg transition-all duration-700 ${
						loaded
							? "opacity-100 translate-y-0 delay-200"
							: "opacity-0 translate-y-3"
					}`}
				>
					{description}
				</p>

				<p
					className={`mt-2 text-sm font-semibold text-gray-400 transition-all duration-700 ${
						loaded
							? "opacity-100 translate-y-0 delay-200"
							: "opacity-0 translate-y-3"
					}`}
				>
					Last updated: 20 July 2026
				</p>

				<div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
					{highlights.map((item, i) => (
						<div
							key={item.title}
							className={`group flex flex-col items-center text-center transition-all duration-700 ${
								loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
							style={{
								transitionDelay: loaded ? `${300 + i * 100}ms` : "0ms",
							}}
						>
							<span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-primary-foreground text-white transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-107 group-hover:shadow-lg">
								{item.icon}
							</span>
							<p className="mt-3 text-sm font-semibold text-gray-900">
								{item.title}
							</p>
							<p className="text-xs text-gray-500">{item.subtitle}</p>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
}

function TermsToc({ tocItems }: { tocItems: TocItem[] }) {
	const { ref, inView } = useInView<HTMLDivElement>();

	return (
		<Container as="section">
			<div
				ref={ref}
				className={`mx-auto max-w-3xl rounded-2xl bg-gray-50 p-6 transition-all duration-700 sm:p-8 ${
					inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
				}`}
			>
				<p className="text-sm font-bold uppercase tracking-wider text-primary-foreground">
					Quick Navigation
				</p>
				<div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
					{tocItems.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-primary-foreground"
						>
							{item.label}
						</a>
					))}
				</div>
			</div>
		</Container>
	);
}

function TermsClauses({ clauses }: { clauses: Clause[] }) {
	const { ref, inView } = useInView<HTMLDivElement>(0.05);

	return (
		<Container as="section" className="py-8 pb-24">
			<div
				ref={ref}
				className={`mx-auto max-w-3xl transition-all duration-700 ${
					inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
				}`}
			>
				<div className="divide-y divide-gray-100">
					{clauses.map((clause) => (
						<div
							key={clause.id}
							id={clause.id}
							className="scroll-mt-24 py-8 first:pt-0"
						>
							<h3 className="text-lg font-bold text-gray-900 sm:text-xl">
								{clause.title}
							</h3>
							<div className="mt-3 space-y-3">
								{clause.body.map((para, idx) => (
									<p
										key={idx}
										className="text-sm font-medium leading-relaxed text-gray-500"
									>
										{para}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
}

interface IPolicy {
	heading: string;
	description: string;
	highlights: Highlight[];
	tocItems: TocItem[];
	clauses: Clause[];
}

export default function Policy({
	heading,
	description,
	highlights,
	tocItems,
	clauses,
}: IPolicy) {
	return (
		<>
			<TermsHero
				heading={heading}
				description={description}
				highlights={highlights}
			/>
			<TermsToc tocItems={tocItems} />
			<TermsClauses clauses={clauses} />
		</>
	);
}
