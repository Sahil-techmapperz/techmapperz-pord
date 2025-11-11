'use client'
import { useEffect } from 'react';

export default function SlickCarouselProvider({ children }) {
	useEffect(() => {
		// Defer carousel CSS loading to reduce blocking time
		const loadCarouselStyles = () => {
			const styles = [
				'slick-carousel/slick/slick.css',
				'slick-carousel/slick/slick-theme.css',
				'react-multi-carousel/lib/styles.css'
			];
			
			styles.forEach(href => {
				const link = document.createElement('link');
				link.rel = 'stylesheet';
				link.href = `https://cdn.jsdelivr.net/npm/${href}`;
				link.media = 'print';
				link.onload = function() { this.media = 'all'; };
				document.head.appendChild(link);
			});
		};

		// Load carousel styles after initial render
		const timer = setTimeout(loadCarouselStyles, 100);
		return () => clearTimeout(timer);
	}, []);

	return <>{children}</>;
}