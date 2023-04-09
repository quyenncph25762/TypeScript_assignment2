import instence from "."
import { formAdd, formUpdate } from "../models"

const getData = JSON.parse(localStorage.getItem("user") as string);



export const getAll = () => {
    return instence.get("/products")
}
export const getOne = (id: string) => {
    return instence.get("/products/" + id)
}

export const addProduct = (product: formAdd) => {
    return instence.post(`/products`, product, {
        headers: {
            Authorization: `Bearer ${getData && getData.accessToken.toString()}`
        }
    })
}
export const update = (id: string, product: formUpdate) => {
    return instence.put(`/products/${id}`, product, {
        headers: {
            Authorization: `Bearer ${getData && getData.accessToken.toString()}`
        }
    })
}
export const deleteProduct = (id: string) => {
    return instence.delete(`/products/${id}`, {
        headers: {
            Authorization: `Bearer ${getData && getData.accessToken.toString()}`
        }
    })
}