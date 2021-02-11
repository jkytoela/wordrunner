import Link from 'next/link';
import ThemeToggle from '@/components/theme-toggle';

const Appbar = () => {
	return (
		<div className="pt-safe w-full bg-gray-900 fixed top-0">
			<header className="bg-gray-100 border-b dark:bg-gray-900 dark:border-gray-800">
				<div className="mx-auto px-6 max-w-screen-md h-20 flex items-center justify-between">
					<Link href="/">
						<a>
							<h1 className="font-medium dark:text-gray-300 text-gray-900">WordRunner</h1>
						</a>
					</Link>

					<nav className="space-x-6 flex items-center">
						<div className="space-x-6 flex items-center">
							<ThemeToggle />
							<Link href="https://github.com/jkytoela/wordrunner">
								<a>
									<h1 className="text-indigo-600 dark:text-gray-300 hover:underline">
										GitHub
									</h1>
								</a>
							</Link>
							<div
								className="w-10 h-10 bg-gray-200 dark:bg-gray-800 bg-cover bg-center rounded-full shadow-inner"
								style={{ backgroundImage: 'url(/images/icon-512.png' }}
							/>
						</div>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Appbar;
