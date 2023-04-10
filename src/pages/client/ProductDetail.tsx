import { useEffect, useState } from "react"
import { IProduct, formAdd, formSignup } from "../../models"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getOne } from "../../api/Product"

const ProductDetail = () => {
    const [product, setProduct] = useState<formAdd>({} as formAdd)

    const { id } = useParams();
    const fetchOneProduct = async () => {
        if (id) {
            const { data: { product } } = await getOne(id)
            setProduct(product)
        }
    }
    useEffect(() => {
        fetchOneProduct();
    }, [])
    return <>
        {/* router */}
        <div className="border-b-2">
            <ul className="list-none h-8 flex items-center justify-start mx-auto max-w-[1024px] border-[#ccc] w-full text-sm cursor-pointer">
                {/* <li className="mr-6"><a href="">Điện thoại</a></li>
                <li className="mr-6"><a href="">Điện thoại</a></li>
                <li className="mr-6"><a href="">Điện thoại</a></li> */}
            </ul>
        </div>
        {/* product_Name */}
        <div className="border-b-2">
            <h1 className="text-2xl py-2 product_name mx-auto max-w-[1024px]">{product.name}</h1>
        </div>
        <div className='max-w-[1024px] mx-auto'>
            {/* layout */}
            <div className="layout_product flex my-12">
                <div className="w-[30%]">
                    <img src={product.images} alt="" className="h-[390px] w-[390px] object-cover" />
                    <div className="flex flex-wrap mt-12">
                        <div className="h-16 w-16 rounded-md border-red-600 border-1 p-1 mr-3 mt-3 flex flex-col items-center justify-center">
                            <img src="../../public/star.png" className="w-6 h-6 object-cover" alt="" />
                            <p className="text-[10px] text-center">Tính năng nổi bật</p>
                        </div>
                        <div className="h-16 w-16 rounded-md border-[#ccc] border-1 p-1 mr-3 mt-3">
                            <img src={product.images} className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-[70%] px-14 flex flex-col">
                    <div className="flex">
                        <div className="text-red-600 text-3xl">{product.original_price}<sup>đ</sup></div>
                        <div className="text-base mt-auto opacity-70 ml-6">${product.price}<sup>đ</sup></div>
                    </div>
                    <div className="mt-10 text-[15px]">
                        {product.description_small}
                    </div>
                    <div className="mt-auto flex">
                        <button className="bg-[#FF3945] border-1 text-[#FFFFFF] w-[240px] h-12 rounded-md hover:bg-white hover:border-[#FF3945] hover:text-[#FF3945] ease-linear transition-all"><Link to="/cart">Mua ngay</Link></button>
                        <div className="w-12 h-12 border-red-600 border-2 ml-5 rounded-md flex justify-center items-center cursor-pointer hover:bg-white group">
                            <Link to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-6 ease-in-out transition-all hover:scale-75" viewBox="0 0 512 512"><circle cx="176" cy="416" r="16" fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><circle cx="400" cy="416" r="16" fill="red" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><path fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M48 80h64l48 272h256" /><path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /></svg>
                            </Link>
                        </div>
                        <span className="w-16 text-sm ml-5 cursor-pointer"><Link to="/cart">Thêm vào giỏ hàng</Link></span>
                    </div>
                </div>
            </div>
            {/* description */}
            <div className="product_description">
                <div className="bg-[#F2F2F2] py-2 px-5">
                    <h1 className="text-red-600 text-center text-lg uppercase">Đặc điểm nổi bật</h1>
                    <ul className="my-3 text-sm">
                        <p dangerouslySetInnerHTML={{ __html: product.specifications }}></p>
                    </ul>
                </div>
            </div>
            <div className="mt-3 text-sm"><span>{product.description}</span></div>
            {/* product-rate */}
            {/* <h1 className="text-xl text-[#0A263C] font-semibold mt-5">Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h1>
            <span className="mt-3 text-sm">Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc</span>
            <h1 className="text-lg text-[#0A263C] font-semibold mt-5">Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h1>
            <span className="mt-3 text-sm">Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</span>
            <span className="mt-3 text-sm">Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.</span>
            <span className="mt-3 text-sm">Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.</span> */}
            <button className="ml-[50%] translate-x-[-50%] border-[#0A263C] border-1 text-[#0A263C] w-[335px] py-1 block mt-5 mb-[100px] rounded-lg hover:bg-[#0A263C] hover:text-white ease-linear transition-all">Xem thêm</button>
        </div>
    </>
}

export default ProductDetail
