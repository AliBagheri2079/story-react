import { useEffect, useLayoutEffect } from 'react';

/**
 * You might see a warning if you use server-side rendering (SSR) with useLayoutEffect.
 * You can get around this by conditionally using useEffect during server rendering.
 * This hook will return useLayoutEffect when the code is running in the browser, and useEffect on the server.
 */
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
