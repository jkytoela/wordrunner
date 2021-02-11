import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';
import { IStateProps } from '@/types';

const STEP = 5;
const MIN = 5;
const MAX = 1000;

const WPMSlider = ({ state, send } : IStateProps) => {
	const { wordsPerMinute } = state.context;
  return (
    <div className="flex justify-center flex-wrap">
      <Range
        values={wordsPerMinute}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={false}
        onChange={(wordsPerMinute) => send("SET_WPM", { wordsPerMinute })}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
						onTouchStart={props.onTouchStart}
						className="flex h-8 w-10/12"
            style={props.style}
          >
            <div
							className="h-1 w-full rounded-md self-center"
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values: wordsPerMinute,
                  colors: ['#548BF4', '#ccc'],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
					<div
						className="flex justify-center align-center py-2 px-3 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300 shadow-md
						focus:outline-none"
            {...props}
          >
            <p>{wordsPerMinute[0]}{' WPM'}</p>
          </div>
        )}
      />
    </div>
  );
};

export default WPMSlider;
