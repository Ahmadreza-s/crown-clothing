export const addItemToCart = (items, itemToAdd) => {
    const existingCartItem = items.find(it => it.id === itemToAdd.id);
    if (existingCartItem)
        return items.map(item => item.id === itemToAdd.id ? {...item, quantity: item.quantity + 1} : item);
    else
        return [
            ...items,
            {...itemToAdd, quantity: 1}
        ];
};

export const removeItemFromCart = (items, itemToRemove) => {
    if (itemToRemove.quantity === 1)
        return items.filter(item => item.id !== itemToRemove.id);

    const existingCartItem = items.find(it => it.id === itemToRemove.id);
    if (existingCartItem)
        return items.map(item => item.id === itemToRemove.id ? {...item, quantity: item.quantity - 1} : item);
    else
        return items;
};