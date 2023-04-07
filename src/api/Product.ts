import instence from "."
import { IProduct, formUpdate } from "../models"

export const getAll = () => {
    return instence.get("/products")
}
export const getOne = (id: string) => {
    return instence.get("/products/" + id)
}

export const update = (id: string, product: formUpdate) => {
    return instence.put(`/products/${id}`, product)
}