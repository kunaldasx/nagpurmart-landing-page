export const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
	hidden: {},
	visible: {
		transition: { staggerChildren, delayChildren },
	},
});
