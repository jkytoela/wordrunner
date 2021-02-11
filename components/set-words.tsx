import { IStateProps } from '@/types';

const SetWords = ({ state, send }: IStateProps) => {
	const { inputWords } = state.context;

	return (
		<>
			<textarea
				id="textArea"
				onBlur={() => window.scrollTo(0, 0)}
				className='mt-6 appearance-none border border-gray-300 dark:border-gray-600 w-full py-2 px-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg text-base focus:outline-none'
				rows={10}
				value={inputWords}
				onChange={(e) => send('SET_WORDS', { value: e.target.value })}
			/>
			<div className="flex mt-4">
				<button
					className="py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white w-full text-center text-base font-semibold shadow-md rounded-md mr-1"
					onClick={() => send('CLEAR')}
				>
					Clear
				</button>
				<button
					className="py-2 px-4 bg-green-600 hover:bg-green-700 text-white w-full text-center text-base font-semibold shadow-md rounded-md ml-1"
					onClick={() => send('BEGIN')}
				>
					Begin
				</button>
			</div>
		</>
	)
}

export default SetWords;
