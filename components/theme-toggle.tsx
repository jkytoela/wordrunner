import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const sunny = "M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998z";
const moon = "M7.707.003a.5.5 0 00-.375.846 6 6 0 01-5.569 10.024.5.5 0 00-.519.765A7.5 7.5 0 107.707.003z";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const isDarkTheme = theme === 'dark';

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	return (
				<button
					aria-label="toggle theme color"
					type="button"
					className="text-gray-500 dark:text-gray-300 text-2xl cursor-pointer focus:outline-none"
					onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
					<svg
						viewBox="0 0 15 15"
						fill={isDarkTheme ? 'none' : 'currentColor'}
						xmlns="http://www.w3.org/2000/svg"
						width="15"
						height="15"
					>
						<path
							d={isDarkTheme ? sunny : moon}
							stroke={isDarkTheme ? 'currentColor' : 'none'}
							strokeLinecap="square"
						></path>
					</svg>
				</button>
	);
};

export default ThemeToggle;
