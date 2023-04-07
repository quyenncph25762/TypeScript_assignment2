import instence from ".";
import { formSigin, formSignup } from "../models";

export const signup = (data: formSignup) => {
    return instence.post("/signup", data)
}
export const signin = (data: formSigin) => {
    return instence.post("/signin", data)
}
