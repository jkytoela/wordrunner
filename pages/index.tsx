import * as React from 'react';
import Head from 'next/head'
import Appbar from '@/components/appbar';
import ActionBar from '@/components/action-bar';
import { useEffect } from 'react';
import { useMachine } from "@xstate/react";
import { machine } from '@/state-machine/machine';
import SetWords from '@/components/set-words';
import CurrentWord from '@/components/current-word';

const placeholder = `Speed reading improves one's ability to read quickly. Speed-reading methods include chunking and minimizing subvocalization. Most people have an average reading speed of 200 words per minute (wpm). It is possible to read at a much greater speed, with much better reading comprehension, by silencing your inner voice. How? Absorb reading material faster than that inner voice can keep up.

To train faster reading, you must first find your base rate. Your base rate is the speed, that you can read and comprehend fully.

After establishing your base rate, try to constantly read at a faster rate than you can keep up with. You will find that when you drop to lower speeds, you'll be able to pick up much more than you would have thought.`;


const Index = () => {
	const defaultMachine = machine.withContext({
		currentIndex: 0,
		words: placeholder.split(/\s+/),
		wordsPerMinute: [200],
		inputWords: placeholder,
	});

	const [state, send] = useMachine(defaultMachine);
	const isSetup = state.matches("setup");

	return (
		<>

			<main className="mx-auto pt-8 pb-16 max-w-screen-md w-screen">
				<div className="p-6">
				<section className="mt-20">
					<h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
						Read faster. One word at a time.
					</h2>
					{isSetup
						? <SetWords state={state} send={send} />
						: <CurrentWord state={state} send={send} />}
				</section>
				</div>
			</main>
			{!isSetup ? <ActionBar state={state} send={send} /> : null}
		</>
	);
};

export default Index;
