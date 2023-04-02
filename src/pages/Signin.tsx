const Signin = () => {
    return <div className="flex justify-center items-center h-screen bg-[#E5E5E5]">
        <div className="w-1/2 h-[510px] bg-[#F8F8F8] flex">
            <div className="w-[60%] flex flex-col justify-center items-center relative">
                <a href="/chi-tiet-san-pham" className="absolute left-0 top-0 pt-2 pl-2">Quay lại</a>
                <div className="">
                    <div className="text-lg">Email</div>
                    <input type="text" className="border-1 focus:outline-red-300 ease-linear transition-all w-[300px] py-2" />
                </div>
                <div className="mt-2">
                    <div className="text-lg">Mật khẩu</div>
                    <input type="text" className="border-1 focus:outline-red-300 ease-linear transition-all w-[300px] py-2" />
                </div>
                <button className="bg-[#FF424E] text-[#FFFFFF] mt-2 w-[300px] py-2">Đăng nhập</button>
                <p className="mt-5">Hoặc đăng nhập bằng</p>
                <div className="flex mt-2">
                    <a href="">
                        <img src="../../public/facebook.png" className="w-[58px] h-[58px] rounded-[50%] mr-2" alt="" />
                    </a>
                    <a href="">
                        <img src="../../public/google.png" className="w-[58px] h-[58px] rounded-[50%] ml-2" alt="" />
                    </a>
                </div>
            </div>
            <div className="w-[40%] bg-[#ccc] flex items-center justify-center">
                <img src="../../public/anhtus.png" alt="" className="w-36 h-32" />
            </div>
        </div>
    </div>
}

export default Signin
