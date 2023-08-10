import { createRef, useCallback, useRef, useState } from 'react';

function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);
  const [pendingRemoveItemsIds, setPendingRemoveItemsIds] = useState([]);

  const animatedRefs = useRef(new Map());

  function handleRemoveItem(id) {
    setPendingRemoveItemsIds((prevState) => [...prevState, id]);
  }

  // const handleAnimationEnd = useCallback((id) => {
  //   setItems((prevState) => prevState.filter((item) => item.id !== id));

  //   setPendingRemoveItemsIds((prevState) =>
  //     prevState.filter((itemId) => itemId !== id),
  //   );
  // }, []);

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
        const animatedRef = getAnimatedRef(item);

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
