import { State, StateNodeConfig } from 'xstate';

export interface WRSchema {
	states: {
		setup: StateNodeConfig<WRContext, Record<string, unknown>, WREvent>;
		active: StateNodeConfig<WRContext, Record<string, unknown>, WREvent>;
		paused: StateNodeConfig<WRContext, Record<string, unknown>, WREvent>;
	};
}

export interface WRContext {
	words: string[];
	currentIndex: number;
	wordsPerMinute: number[];
	inputWords: string;
}

export type WREvent =
	| { type: 'SETUP' }
	| { type: 'SET_WORDS'; value: string }
	| { type: 'SET_WPM'; value: number[] }
	| { type: 'RUN' }
	| { type: 'TICK' }
	| { type: 'PAUSE' }
	| { type: 'STOP' }
	| { type: 'PREVIOUS_WORD' }
	| { type: 'NEXT_WORD' }
	| { type: 'BEGIN' }
	| { type: 'CLEAR' };

export interface IStateProps {
	send: any;
	state: State<WRContext, WREvent, any, any>;
}
