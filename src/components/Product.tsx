import { IProduct } from "../models"
import { Link } from "react-router-dom"
type Props = {
    data: IProduct
}
const Product = ({ data }: Props) => {
    return <div className="mb-14">
        <Link to={`/product/${data.id}`} className="block">
            <img
                alt="Art"
                src={data.images?.[0].base_url}
                className="w-full object-cover"
            />
            <h3 className="mt-4 text-sm text-gray-900 font-semibold">
                {data.name}
            </h3>
            <div className="mt-2 text-[12px] flex">
                <p className="text-red-600 font-bold">{data.original_price}₫<span className="text-gray-700 opacity-50 ml-2">{data.price} ₫</span></p>
            </div>
            <div className="mt-2 text-[12px] flex">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-4" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><path d="M256 48v316L118 464l54-160-140-96h172l52-160z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-4" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><path d="M256 48v316L118 464l54-160-140-96h172l52-160z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-4" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><path d="M256 48v316L118 464l54-160-140-96h172l52-160z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-4" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><path d="M256 48v316L118 464l54-160-140-96h172l52-160z" /></svg>
                </div>
                <span className="text-gray-700 opacity-50 ml-2">10 đánh giá</span>
            </div>
        </Link>
    </div >
}

export default Product
