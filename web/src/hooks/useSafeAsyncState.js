import { useCallback, useState } from 'react';
import useIsMounted from './useIsMounted';

// use only react before 18 version to handle warning about state update on an unmounted component
export default function useSafeAsyncState(initialState) {
  const [state, setState] = useState(initialState);

  const isMounted = useIsMounted();

  // const isMounted = useRef(false);

  // useEffect(() => {
  //   isMounted.current = true;

  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, []);

  const setSafeAsyncState = useCallback(
    (data) => {
      if (isMounted()) {
        setState(data);
      }
    },
    [isMounted],
  );

  return [state, setSafeAsyncState];
}
