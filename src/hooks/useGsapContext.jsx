import { useMemo } from 'react';
import { gsap } from 'gsap';

const useGsapContext = scope => {
  const ctx = useMemo(() => gsap.context(() => {}, scope), [scope]);
  const tl = gsap.timeline();

  return [ctx, tl];
};

export default useGsapContext;
