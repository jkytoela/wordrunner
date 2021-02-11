import * as React from 'react';
import ActionBar from '@/components/action-bar';
import { useMachine } from '@xstate/react';
import { machine } from '@/state-machine/machine';
import SetWords from '@/components/set-words';
import CurrentWord from '@/components/current-word';
import { placeholder } from '@/constants/defaultWords';

const Index = () => {
	const defaultMachine = machine.withContext({
		currentIndex: 0,
		words: placeholder.split(/\s+/),
		wordsPerMinute: [200],
		inputWords: placeholder
	});

	const [state, send] = useMachine(defaultMachine);
	const isSetup = state.matches('setup');

	return (
		<>
			<main className="mx-auto pt-8 pb-16 max-w-screen-md w-screen">
				<div className="p-6">
					<section className="mt-20">
						<h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
							Read faster. One word at a time.
						</h2>
						{isSetup ? (
							<SetWords state={state} send={send} />
						) : (
							<CurrentWord state={state} send={send} />
						)}
					</section>
				</div>
			</main>
			{isSetup ? null : <ActionBar state={state} send={send} />}
		</>
	);
};

export default Index;
