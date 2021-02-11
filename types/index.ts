import { State } from 'xstate'

export interface WRSchema {
	states: {
		setup: {},
		active: {},
		paused: {},
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
	| { type: 'SET_WPM'; wordsPerMinute: number[] }
	| { type: 'RUN' }
	| { type: 'TICK' }
	| { type: 'PAUSE' }
	| { type: 'STOP' }
	| { type: 'RESET' }
	| { type: 'PREVIOUSWORD' }
	| { type: 'NEXTWORD' }
	| { type: 'BEGIN' }
	| { type: 'CLEAR' };

export interface IStateProps {
	send: any;
	state: State<WRContext, WREvent, any, any>;
}
