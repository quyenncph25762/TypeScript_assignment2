import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { formSignup } from '../../models'
const User = () => {
    const [user, setUser] = useState<formSignup>({} as formSignup)

    const navigate = useNavigate()
    const logout = () => {
        alert("Dang xuat thanh cong")
        localStorage.clear()
    }
    const routeAdmin = () => {
        if (user.role !== "admin") {
            alert("Ban khong co quyen vao admin")
            return
        }
        navigate("/admin")
    }
    useEffect(() => {
        const getData = localStorage.getItem("user")
        if (getData) {
            const dataObject = JSON.parse(getData)
            setUser(dataObject)
        }
    }, [])
    return (
        <div>
            <header className='bg-[#D70018] h-[64px]'>
                <div className="max-w-[1024px] mx-auto flex items-center h-full justify-center">
                    <Link to="/"><img className='w-[50px]' src="../../public/anhtus.png" alt="" /></Link>
                    <div className="grow relative ml-10 group">
                        <input type="text" className='rounded-md py-1 px-4 w-full focus:outline-none' />
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon focus:hidden absolute w-5 h-full left-0 top-[50%] translate-y-[-50%] ml-4 group-focus-within:opacity-0 transition-opacity" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448" /></svg>
                    </div>

                    {user.userName ? <div className='text-[#ffffff] ml-[100px] flex items-center'>
                        <img onClick={() => routeAdmin()} src="https://img.icons8.com/carbon-copy/256/user.png" className='w-[32px] bg-[#ffffff] rounded-[50%] mr-4 cursor-pointer' alt="" />
                        {user.userName}
                        <button className='ml-[20px] bg-[#000] py-2 px-4' onClick={() => logout()}><a href='/'>Đăng xuất</a></button></div> : <Link to="/dang-nhap" className='ml-[100px] bg-[#fff] py-2 px-4'>Đăng nhập</Link>}
                </div>
            </header>
            <Outlet />
            <footer className=''>
                <div className="grid grid-cols-4 gap-5 my-10 py-10 max-w-[1024px] mx-auto">
                    <div className="min-w-[250px]">
                        <h1 className='font-semibold text-xl'>Tìm cửa hàng</h1>
                        <ul className='list-none'>
                            <li className='text-sm mt-2'>Tìm cửa hàng gần nhất</li>
                            <li className='text-sm mt-2'>Mua hàng từ xa</li>
                            <li className='text-red-600 text-sm mt-2'>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</li>
                        </ul>
                        <h1 className='font-semibold my-10'>Phương thức thanh toán</h1>
                        <ul className="list-none flex ml-[-16px]">
                            <li className='ml-4'><img src="https://s3-alpha-sig.figma.com/img/57eb/353e/bb8cc93a8f954930d75c7394ca2ad285?Expires=1681084800&Signature=X18rYMvV3zd0UJa3XIYrrLd5X9ghLQFjer8ihoBOFDCsTEOLJTX2XASYGPCZwBGYbefMehpXYtmJ1Rt6DA7z1HeEdlrPciSoN5ip4pAj0A7V1srqXTU14ipY4Z31wOXFfbn83e4bSGMy8nuPx8UapGLJRtvP1nQQQV3DpKXgfwmV-8UAzs-ea6uvnMHV1jyx3Soa4GC2S3suGwTPn~Ro~WzKN-EwDSCgS4CaarVT~LUXwavTMGKXTuxaXtxOQRNsIgq9mBEpBq~-yrWW67aA3wAawDm2rSfbiQBVqPutydSSyrJXkSgC8jTGfnQHq4vZvv7Kzoe0A5-ZDksG3Cku3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className='w-[100px] h-[20px] object-cover' /></li>
                        </ul>
                    </div>
                    <div className="min-w-[250px]">
                        <ul className='list-none text-[14px] mt-[-4px]'>
                            <li className='mt-2'>Gọi mua hàng: <span>0967***(10h-12h)</span></li>
                            <li className='mt-2'>Gọi khiếu nại: <span>0967***(10h-12h)</span></li>
                            <li className='mt-2'>Gọi bảo hành: <span>0967***(10h-12h)</span></li>
                        </ul>
                        <ul className='list-none text-[14px] my-3'>
                            <h1 className='font-semibold text-lg'>Đối tác dịch vụ bảo hành</h1>
                            <li className='mt-2'>Điện thoại - máy tính</li>
                        </ul>
                        <h1 className='font-semibold text-[15px]'>Trung tâm bảo hành uỷ quyền Apple</h1>
                        <img src="../../public/dienthoaivui.png" className='w-[230px] h-10 mt-3' alt="" />
                    </div>
                    <div className="min-w-[250px]">
                        <ul className='list-none text-[14px] mt-[-4px]'>
                            <li className='mt-2'>Mua hàng và thanh toán Online</li>
                            <li className='mt-2'>Mua hàng trả góp Online</li>
                            <li className='mt-2'>Tra thông tin đơn hàng</li>
                            <li className='mt-2'>Tra điểm Smember</li>
                            <li className='mt-2'>Tra thông tin bảo hành</li>
                            <li className='mt-2'>Tra cứu hoá đơn VAT điện tử</li>
                            <li className='mt-2'>Trung tâm bảo hành chính hãng</li>
                            <li className='mt-2'>Quy định về việc sao lưu dữ liệu</li>
                            <li className='mt-2 text-red-600'>Dịch vụ bảo hành điện thoại</li>
                        </ul>
                        <ul className='list-none text-[14px] my-3'>
                            <h1 className='font-semibold text-xl'>Đối tác dịch vụ bảo hành</h1>
                            <li className='mt-2'>Điện thoại - máy tính</li>
                        </ul>
                    </div>
                    <div className="min-w-[250px]">
                        <ul className='list-none text-[14px] mt-[-4px]'>
                            <li className='mt-2'>Quy chế hoạt động</li>
                            <li className='mt-2'>Chính sách Bảo hành</li>
                            <li className='mt-2'>Liên hệ hợp tác kinh doanh</li>
                            <li className='mt-2'>Khách hàng doanh nghiệp (B2B)</li>
                            <li className='mt-2 text-red-600'>Ưu đãi thanh toán</li>
                            <li className='mt-2'>Tuyển dụng</li>
                        </ul>
                        <ul className='list-none text-[14px] my-3'>
                            <h1 className='font-semibold text-xl'>Đối tác dịch vụ bảo hành</h1>
                            <li className='mt-2'>Điện thoại - máy tính</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#F8F8F8]">
                    <div className="grid grid-cols-3 gap-8 py-10 max-w-[1024px] mx-auto">
                        <div className="min-w-[250px]">
                            <ul className='list-none text-[14px] mt-[-4px]'>
                                <li className='mt-2 text-[10px]'>
                                    <span>Điện thoại iPhone 13 - </span>
                                    <span>Điện thoại iPhone 12 - </span>
                                    <span>Điện thoại iPhone 11</span>
                                </li>
                                <li className='mt-2 text-[10px]'>
                                    <span>Điện thoại iPhone 13 Pro Max - </span>
                                    <span>Điện thoại iPhone 11 Pro Max</span>
                                </li>
                                <li className='mt-2 text-[10px]'>
                                    <span>iPhone cũ giá rẻ - </span>
                                    <span>iPhone 13 cũ - </span>
                                    <span>iPhone 12 cũ - </span>
                                    <span>iPhone 11 cũ</span>
                                </li>
                            </ul>
                        </div>
                        <div className="min-w-[250px]">
                            <ul className='list-none text-[14px] mt-[-4px]'>
                                <li className='mt-2 text-[10px]'>
                                    <span>Điện thoại iPhone 13 - </span>
                                    <span>Điện thoại iPhone 12 - </span>
                                    <span>Điện thoại iPhone 11</span>
                                </li>
                                <li className='mt-2 text-[10px]'>
                                    <span>Điện thoại iPhone 13 Pro Max - </span>
                                    <span>Điện thoại iPhone 11 Pro Max</span>
                                </li>
                                <li className='mt-2 text-[10px]'>
                                    <span>iPhone cũ giá rẻ - </span>
                                    <span>iPhone 13 cũ - </span>
                                    <span>iPhone 12 cũ - </span>
                                    <span>iPhone 11 cũ</span>
                                </li>
                            </ul>
                        </div>
                        <div className="min-w-[250px]">
                            <ul className='list-none text-[14px] mt-[-4px]'>
                                <li className='mt-2 text-[10px]'>
                                    <span>Điện thoại iPhone 13 - </span>
                                    <span>Điện thoại iPhone 12 - </span>
                                    <span>Điện thoại iPhone 11</span>
                                </li>
                                <li className='mt-2 text-[10px]'>
                                    <span>Điện thoại iPhone 13 Pro Max - </span>
                                    <span>Điện thoại iPhone 11 Pro Max</span>
                                </li>
                                <li className='mt-2 text-[10px]'>
                                    <span>iPhone cũ giá rẻ - </span>
                                    <span>iPhone 13 cũ - </span>
                                    <span>iPhone 12 cũ - </span>
                                    <span>iPhone 11 cũ</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <p className='text-[10px] text-[#333] text-center font-bold opacity-40'>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default User
