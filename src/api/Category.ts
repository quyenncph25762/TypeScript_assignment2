import instence from "."

export const getCategory = () => {
    return instence.get("/category")
}
export const getOneCategory = (id: string) => {
    return instence.get(`/category/${id}`)
}