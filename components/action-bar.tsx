import { IStateProps } from '@/constants/types';

const buttonClass =
	'space-y-1 w-full h-full flex flex-col items-center justify-center cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50';

const ActionBar = ({ state, send }: IStateProps) => {
	const isActive = state.matches('active');
	return (
		<div>
			<nav className="pb-safe w-full bg-gray-100 border-t dark:bg-gray-900 dark:border-gray-800 fixed bottom-0">
				<div className="mx-auto px-6 max-w-md h-16 flex items-center justify-around">
					{isActive ? null : (
						<button
							aria-label="show previous word"
							type="button"
							className={buttonClass}
							onClick={() => send('PREVIOUS_WORD')}
						>
							<svg
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
							>
								<path d="M1.5 7.5l4-4m-4 4l4 4m-4-4H14" stroke="currentColor" />
							</svg>
							<span className="text-xs text-gray-600 dark:text-gray-400">
								Previous word
							</span>
						</button>
					)}
					<button
						aria-label="toggle play"
						type="button"
						className={buttonClass}
						onClick={() => send(isActive ? 'PAUSE' : 'RUN')}
					>
						{isActive ? (
							<svg
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
							>
								<path d="M5.5 3v9m4-9v9" stroke="currentColor" />
							</svg>
						) : (
							<svg
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
							>
								<path d="M4.5 12.5v-10l7 5-7 5z" stroke="currentColor" />
							</svg>
						)}
						<span className="text-xs text-gray-600 dark:text-gray-400">
							{isActive ? 'Pause' : 'Play'}
						</span>
					</button>
					{isActive ? null : (
						<button
							aria-label="show next word"
							type="button"
							className={buttonClass}
							onClick={() => send('NEXT_WORD')}
						>
							<svg
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
							>
								<path d="M13.5 7.5l-4-4m4 4l-4 4m4-4H1" stroke="currentColor" />
							</svg>
							<span className="text-xs text-gray-600 dark:text-gray-400">
								Next word
							</span>
						</button>
					)}
				</div>
			</nav>
		</div>
	);
};

export default ActionBar;
