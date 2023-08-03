import { useCallback, useState } from 'react';

function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);
  const [pendingRemoveItemsIds, setPendingRemoveItemsIds] = useState([]);

  function handleRemoveItem(id) {
    setPendingRemoveItemsIds((prevState) => [...prevState, id]);
  }

  const handleAnimationEnd = useCallback((id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));

    setPendingRemoveItemsIds((prevState) =>
      prevState.filter((itemId) => itemId !== id),
    );
  }, []);

  return {
    items,
    pendingRemoveItemsIds,
    setItems,
    handleRemoveItem,
    handleAnimationEnd,
  };
}

export default useAnimatedList;
