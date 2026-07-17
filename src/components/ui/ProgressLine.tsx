interface ProgressLineProps {
	steps?: number;
}

export default function ProgressLine({ steps = 5 }: ProgressLineProps) {
	return (
		<div className="relative w-full py-2">
			{/* Full gray background line */}
			<div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-slate-200" />

			{/* Blue segments + dots */}
			<div
				className="relative z-10 grid w-full items-center"
				style={{
					gridTemplateColumns: `repeat(${steps}, 1fr)`,
				}}
			>
				{Array.from({ length: steps }).map((_, index) => (
					<div
						key={index}
						className="relative flex items-center justify-center"
					>
						{/* Blue segment */}
						<div className="absolute left-[25%] right-[25%] h-0.5 bg-blue-500" />

						{/* Dot */}
						<div className="relative z-10 h-2 w-2 rounded-full bg-blue-500" />
					</div>
				))}
			</div>
		</div>
	);
}
