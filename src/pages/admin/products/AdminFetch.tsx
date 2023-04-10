import { useEffect, useState } from "react"
import { ICategory, IProduct, IUser } from "../../../models"
import { deleteProduct, getAll } from "../../../api/Product"
import { Link, useNavigate } from "react-router-dom"
import { getCategory, getOneCategory } from "../../../api/Category"
const AdminFetch = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [category, setCategory] = useState<ICategory[]>([])
    const navigate = useNavigate();
    const navigateCate = () => {
        navigate("/admin/category")
    }
    const fetchProductAdmin = async () => {
        const { data } = await getAll();
        setProducts(data)
    }
    const fetchCategory = async () => {
        const { data } = await getCategory();
        setCategory(data)
    }
    const removeProduct = async (id: string) => {
        const isConfirm = confirm('Are you sure you want to remove');
        if (isConfirm) {
            await deleteProduct(id)
            alert('Xoa thanh cong');
            location.href = "/admin"
        }
    }
    useEffect(() => {
        fetchProductAdmin()
        fetchCategory()
    }, [])
    return <div className="h-full grow pl-5 py-5 bg-[#F1F3F4]">
        <div className="flex justify-between w-full">
            <h1 className="text-2xl text-[#5F5E61] font-bold">Điện thoại</h1>
            <Link to="/admin/them-san-pham"><svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-14 text-[#00B0D7] mt-8 mr-8 cursor-pointer" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 176v160M336 256H176" /></svg></Link>
        </div>
        <div className="flex">
            <h3 className="text-lg text-[#5F5E61] font-semibold">Bộ lọc</h3>
            <div className="flex flex-col ml-10">
                <p className="text-sm mb-2">Danh mục sản phẩm</p>
                <select className="w-[352px] border-1 border-[#ccc] p-2" defaultValue="">
                    <option value="">All</option>
                    {category && category.map((cate, index) =>
                        <option key={index} value={cate._id} className="p-2">{cate.name}</option>
                    )}
                </select>
            </div>
        </div>
        <div className="overflow-x-auto mt-4 w-[1200px]">
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
                        <th onClick={() => navigateCate()}
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 hover:text-[#ffa400] cursor-pointer"
                        >
                            Thể loại
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
                                {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-[12px] overflow-hidden text-ellipsis">{product.name}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <img className="w-[70px]" src={product.images} alt="" />
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-[12px]">{product.price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-[12px]">{product.original_price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-[12px]">
                                {category.map((value) => { return value._id == product.categoryId?._id ? value.name : "" }
                                )}
                            </td>

                            <td className="whitespace-nowrap px-4 py-2 text-white w-[65px]"><button onClick={() => removeProduct(product._id)} className="py-2 px-3 bg-red-400">xóa</button></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[65px]"><button className="py-2 px-3 bg-yellow-300"><Link to={`/admin/products/${product._id}`}>Sửa</Link></button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>


    </div>
}

export default AdminFetch
