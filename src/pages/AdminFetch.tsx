import { useEffect, useState } from "react"
import { IProduct } from "../models"
import { getAll } from "../api/Product"
import { Link } from "react-router-dom"
const AdminFetch = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const fetchProductAdmin = async () => {
        const { data } = await getAll();
        setProducts(data)
    }

    useEffect(() => {

        fetchProductAdmin()
    }, [])
    return <div className="h-full grow p-5 bg-[#F1F3F4]">
        <div className="flex justify-between w-full">
            <h1 className="text-2xl text-[#5F5E61] font-bold">Điện thoại</h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-14 text-[#00B0D7] mt-8 mr-8 cursor-pointer" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 176v160M336 256H176" /></svg>
        </div>
        <div className="flex">
            <h3 className="text-lg text-[#5F5E61] font-semibold">Bộ lọc</h3>
            <div className="flex flex-col ml-10">
                <p className="text-sm mb-2">Danh mục sản phẩm</p>
                <select name="" id="" className="w-[352px] border-1 border-[#ccc] p-2">
                    <option value="" className="p-2">Latop</option>
                </select>
            </div>
        </div>
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y-2 divide-gray-300 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            #
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Tên sản phẩm
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Ảnh
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá khuyến mãi
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            colSpan={2}>
                            Thao tác
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                    {products.map((product, index) =>
                        <tr key={index}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                1
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.name}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <img className="w-[75px] h-[75px]" src={product.images?.[0].base_url} alt="" />
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.original_price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[65px]"><button className="py-2 px-3 bg-red-400">xóa</button></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[65px]"><button className="py-2 px-3 bg-yellow-300"><Link to={`/admin/product/${product.id}`}>Sửa</Link></button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>


    </div>
}

export default AdminFetch
