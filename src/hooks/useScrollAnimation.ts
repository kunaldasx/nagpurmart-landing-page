"use client";

import { useEffect, useRef, useState } from "react";

// Reveals an element with a fade/slide once it scrolls into view
export function useInView<T extends HTMLElement>(threshold = 0.2) {
	const ref = useRef<T | null>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.disconnect();
				}
			},
			{ threshold },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold]);

	return { ref, inView };
}

// Moves an element at a different speed than the page scroll
export function useParallax<T extends HTMLElement>(speed = 0.15) {
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		let ticking = false;

		const update = () => {
			const rect = el.getBoundingClientRect();
			el.style.transform = `translate3d(0, ${rect.top * speed}px, 0) scale(1.15)`;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				requestAnimationFrame(update);
				ticking = true;
			}
		};

		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [speed]);

	return ref;
}
