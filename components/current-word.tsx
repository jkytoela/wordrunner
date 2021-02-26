import { useEffect } from 'react';
import { IStateProps } from '@/constants/types';

const CurrentWord = ({ state, send }: IStateProps) => {
	const { words, currentIndex, wordsPerMinute } = state.context;
	const isPaused = state.matches('paused');
	const speed = (60 / wordsPerMinute[0]) * 1000;

	useEffect(() => {
		const interval = setInterval(() => send('TICK'), speed);
		return () => {
			clearInterval(interval);
		};
	}, [speed, send]);

	return (
		<div>
			<div className="flex justify-center items-center h-60 border my-6 rounded-md">
				<h3 className="text-4xl lg:text-6xl font-normal text-center">
					{words[currentIndex]}
				</h3>
			</div>
			{isPaused ? (
				<button
					type="button"
					className={`${isPaused ? 'block' : 'hidden'}
						mt-6 py-2 px-4 bg-red-400 hover:bg-red-500 text-white font-semibold w-full
						text-center text-base rounded-md mx-1`}
					onClick={() => send('SETUP')}
				>
					Return
				</button>
			) : null}
		</div>
	);
};

export default CurrentWord;
