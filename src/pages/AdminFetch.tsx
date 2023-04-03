const AdminFetch = () => {
    return <div className="h-full grow p-5 bg-[#F1F3F4]">
        <div className="flex justify-between w-full">
            <h1 className="text-2xl text-[#5F5E61] font-bold">Điện thoại</h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-14 text-[#00B0D7] mt-8 mr-8 cursor-pointer" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="32" d="M256 176v160M336 256H176" /></svg>
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
                            Thành tiền
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Mô tả
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Ẩn hiện
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Thao tác
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-300">
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            1
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Iphone</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">10.000.000đ</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><input type="radio" name="" id="" /></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><button className="py-2 px-3 bg-yellow-300">Sửa</button></td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            1
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Iphone</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">10.000.000đ</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><input type="radio" name="" id="" /></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><button className="py-2 px-3 bg-yellow-300">Sửa</button></td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            1
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Iphone</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">10.000.000đ</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><input type="radio" name="" id="" /></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700"><button className="py-2 px-3 bg-yellow-300">Sửa</button></td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
}

export default AdminFetch
