import * as Yup from 'yup'
export interface IProduct {
    id: string,
    name: string,
    price: number,
    original_price: number,
    description: string,
    description_small: string,
    images: { base_url: string, thumbnail_url: string }[],
    brand: {
        id: number,
        name: string,
        slug: string
    },
    specifications: ISpecification[]
}

export interface ISpecification {
    name: string,
    attributes: {
        code: string,
        name: string,
        value: string
    }
}
// signup
export const signupSchema = Yup.object({
    userName: Yup.string().required("Trường userName bắt buộc phải nhập"),
    email: Yup.string().email("email không đúng định dạng").required("Trường email bắt buộc phải nhập"),
    tel: Yup.number().required("Trường tel bắt buộc phải nhập"),
    password: Yup.string().min(6).required("Trường password bắt buộc phải nhập"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Mật khẩu không chính xác"),
    role: Yup.string().default("member")
})
export type formSignup = Yup.InferType<typeof signupSchema>
// signin
export const signinSchema = Yup.object({
    email: Yup.string().email("email không đúng định dạng").required("Trường email bắt buộc phải nhập"),
    password: Yup.string().min(6).required("Trường password bắt buộc phải nhập"),
})
export type formSigin = Yup.InferType<typeof signinSchema>


// updateProduct
export const updateSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().min(0).required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().min(0).required("Trường dữ liệu bắt buộc"),
    description_small: Yup.string().min(10, "Mô tả ngắn phải có 10 kí tự").required()
})

export type formUpdate = Yup.InferType<typeof updateSchema>
