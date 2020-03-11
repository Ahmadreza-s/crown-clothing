export const addItemToCart = (items, itemToAdd) => {
    const existingCartItem = items.find(it => it.id === itemToAdd.id);
    if (existingCartItem)
        return items.map(item => {
            if (item.id === itemToAdd.id)
                return {...item, quantity: item.quantity + 1};
            else
                return item;
        });
    else
        return [
            ...items,
            {...itemToAdd, quantity: 1}
        ];
};