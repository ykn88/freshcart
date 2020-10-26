import React, { createContext } from "react";

export interface ItemContextInterface {
    itemQty: number
    totalAmount: number
}

const ItemContext = createContext<ItemContextInterface | null>(null)

export default ItemContext
