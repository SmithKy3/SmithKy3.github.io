type Callback = (...args: any[]) => void;
type DebouncedCallback<F extends Callback> = (this: ThisParameterType<F>, ...args: Parameters<F>) => void;

/**
 * @function debounce - Standard debounce function. Fires on the leading edge and trailing edge.
 * 
 * @param fn - The callback / function to be debounced
 * @param waitTime - Wait time, in milliseconds. Calls made to the debounced function will execute the
 *                    callback (@param fn) immediately, as long as this wait time has passed since the
 *                    previous call. A second execution will occur after the specified wait time. Calls made
 *                    within this time period will cause the wait time until the next execution to be reset. 
 */
export function debounce<F extends Callback> (fn: F, waitTime: number): DebouncedCallback<F> {
  let timeoutID: NodeJS.Timeout | null = null;

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const context = this;
    if (!timeoutID) {
      fn.apply(context, args);
    } else {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      fn.apply(context, args);
      timeoutID = null;
    }, waitTime);
  }
}