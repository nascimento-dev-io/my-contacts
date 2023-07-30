import { useEffect, useRef, useState } from 'react';

function useAnimatedUnmount(visible) {
  const [shouldRender, setShouldRender] = useState(visible);
  const animatedElementRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    // let timeoutId;
    // if (!visible) {
    //   setTimeout(() => {
    //     setShouldRender(false);
    //   }, 300);
    // }

    // return () => {
    //   clearTimeout(timeoutId);
    // };

    function handleAnimationEnd() {
      setShouldRender(false);
    }

    const elementRef = animatedElementRef.current;
    if (!visible && elementRef) {
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [visible]);

  return { shouldRender, animatedElementRef };
}

export default useAnimatedUnmount;
