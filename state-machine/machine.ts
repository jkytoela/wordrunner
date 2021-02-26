import { Machine, assign } from 'xstate';
import { WRContext, WRSchema, WREvent } from '@/constants/types';
import { assertEventType } from './utils';

export const machine = Machine<WRContext, WRSchema, WREvent>(
	{
		id: 'default',
		initial: 'setup',
		states: {
			setup: {
				on: {
					SET_WORDS: {
						target: 'setup',
						actions: assign({
							words: (_, { value }) => value.split(/\s+/),
							inputWords: (_, { value }) => value
						})
					},
					BEGIN: [{ target: 'paused', cond: 'canBegin' }],
					CLEAR: [
						{
							target: 'setup',
							cond: 'canBegin',
							actions: 'clearWords'
						}
					],
					SET_WPM: {
						actions: 'setWpm',
					}
				}
			},
			active: {
				entry: 'nextWord',
				on: {
					TICK: [
						{ target: 'active', cond: 'areWordsLeft' },
						{ target: 'paused', actions: 'resetIndex' }
					],
					PAUSE: 'paused',
					SET_WPM: {
						actions: 'setWpm',
					},
				}
			},
			paused: {
				on: {
					RUN: 'active',
					NEXT_WORD: [
						{
							target: 'paused',
							cond: 'areWordsLeft',
							actions: 'nextWord'
						}
					],
					PREVIOUS_WORD: [
						{
							target: 'paused',
							cond: 'canGoBack',
							actions: 'previousWord'
						}
					],
					SET_WPM: {
						actions: 'setWpm',
					},
					SETUP: {
						target: 'setup',
						actions: 'resetIndex'
					}
				}
			}
		}
	},
	{
		actions: {
			nextWord: assign({ currentIndex: (context) => context.currentIndex + 1 }),
			previousWord: assign({
				currentIndex: (context) => context.currentIndex - 1
			}),
			resetIndex: assign({ currentIndex: (_) => 0 }),
			clearWords: assign({ inputWords: (_) => '', words: (_) => [] }),
			setWpm: assign({
        wordsPerMinute: (_, event) => {
          assertEventType(event, 'SET_WPM');
          return event.value;
        },
      }),
		},
		guards: {
			canBegin: (context) => context.words.length > 0,
			areWordsLeft: (context) =>
				context.currentIndex < context.words.length - 1,
			canGoBack: (context) => context.currentIndex > 0
		}
	}
);
