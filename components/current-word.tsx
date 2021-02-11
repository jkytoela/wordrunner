import { useEffect } from 'react';
import { IStateProps } from '@/constants/types';
import WPMSlider from './wpm-slider';

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
			<button
				type="button"
				className={`${
					isPaused ? 'block' : 'hidden'
				} mt-6 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white w-full text-center text-base font-semibold shadow-md rounded-md mx-1`}
				onClick={() => send('SETUP')}
			>
				Return
			</button>
			<div className="flex justify-center items-center h-60 border my-6 rounded-md">
				<h3 className="text-4xl lg:text-6xl font-normal text-center">
					{words[currentIndex]}
				</h3>
			</div>
			{isPaused ? <WPMSlider state={state} send={send} /> : null}
		</div>
	);
};

export default CurrentWord;
