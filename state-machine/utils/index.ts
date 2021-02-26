
import { EventObject } from 'xstate';

// https://github.com/davidkpiano/xstate/discussions/1591
// eslint-disable-next-line import/prefer-default-export
export function assertEventType<TE extends EventObject, TType extends TE['type']>(
  event: TE,
  eventType: TType,
): asserts event is TE & { type: TType } {
  if (event.type !== eventType) {
    throw new Error(
      `Invalid event: expected "${eventType}", got "${event.type}"`,
    );
  }
}
