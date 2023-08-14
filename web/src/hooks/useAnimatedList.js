import { createRef, useCallback, useEffect, useRef, useState } from 'react';

function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);
  const [pendingRemoveItemsIds, setPendingRemoveItemsIds] = useState([]);

  const animatedRefs = useRef(new Map());
  const animationEndListeners = useRef(new Map());

  function handleRemoveItem(id) {
    setPendingRemoveItemsIds((prevState) => [...prevState, id]);
  }

  const handleAnimationEnd = useCallback((itemId) => {
    const removeListener = animationEndListeners.current.get(itemId);
    removeListener();

    animationEndListeners.current.delete(itemId);
    animatedRefs.current.delete(itemId);

    setItems((prevState) => prevState.filter((item) => item.id !== itemId));
    setPendingRemoveItemsIds((prevState) =>
      prevState.filter((id) => itemId !== id),
    );
  }, []);

  useEffect(() => {
    pendingRemoveItemsIds.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId);
      const animatedElement = animatedRef?.current;
      const alreadyHasListener = animationEndListeners.current.has(itemId);

      if (animatedElement && !alreadyHasListener) {
        const onAnimationEnd = () => handleAnimationEnd(itemId);
        const removeListener = () => {
          animatedElement.removeEventListener('animationend', onAnimationEnd);
        };

        animatedElement.addEventListener('animationend', onAnimationEnd);
        animationEndListeners.current.set(itemId, removeListener);
      }
    });
  }, [pendingRemoveItemsIds, handleAnimationEnd]);

  // Novo useEffect necessário devido a função de cleanup ser chamada também em toda alteração no array de dependências alem do unmount
  useEffect(() => {
    const removeListeners = animationEndListeners.current;

    return () => {
      removeListeners.forEach((removeListener) => removeListener());
    };
  }, []);

  function getAnimatedRef(itemId) {
    let animatedRef = animatedRefs.current.get(itemId);

    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(itemId, animatedRef);
    }

    return animatedRef;
  }

  /*
    `renderItem` -> é passada como parâmetro da renderList como **callback** que contém argumentos `( message, { isLeaving ...})`
    `renderList` -> recebe a `renderItem` como parâmetro, retorna um array ( de elementos ) usando o map e dentro da função de **callback** do `map` executa a `renderItem` definindo lógicas necessárias como  `isLeaving: pendingRemovalItemsIds.includes(items.id), animatedRef`
  */

  const renderList = useCallback(
    (renderItem) =>
      items.map((item) => {
        const isLeaving = pendingRemoveItemsIds.includes(item.id);
        const animatedRef = getAnimatedRef(item.id);

        return renderItem(item, {
          isLeaving,
          animatedRef,
        });
      }),
    [items, pendingRemoveItemsIds],
  );

  return {
    items,
    renderList,
    setItems,
    handleRemoveItem,
  };
}

export default useAnimatedList;
