import { Outlet } from "react-router-dom"

const Admin = () => {
    return <div className="">
        <header className="w-full h-[58px] bg-[#00B0D7] container">
            <div className="flex items-center h-[58px] w-full">
                <img src="../../public/anhtus.png" alt="" className="w-[50px] flex-shrink-0" />
                <div className="w-[500px] relative ml-10 group flex-shrink-0">
                    <input type="text" className='rounded-md py-1 px-4 w-full focus:outline-none' />
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon focus:hidden absolute w-5 h-full left-0 top-[50%] translate-y-[-50%] ml-4 group-focus-within:opacity-0 transition-opacity" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448" /></svg>
                </div>
                <h1 className="text-[#ffffff] text-lg flex-1 text-right">Xin chào <span>Nguyễn Công Quyền</span></h1>
            </div>
        </header>
        <div className="bg-[#F1F3F4] flex h-auto">
            <aside className="min-w-[300px] min-h-screen bg-[#FFFFFF] p-6  h-100vh float-left flex-1">
                <ul>
                    <li className="flex bg-[#00B0D7] w-[180px] py-2 px-2 rounded-md text-[#ffffff] mt-3 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-6 mr-2" viewBox="0 0 512 512"><rect x="128" y="16" width="256" height="480" rx="48" ry="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><path d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /></svg>
                        Điện thoại
                    </li>
                    <li className="flex mt-3 cursor-pointer px-2 w-[180px] py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-6 mr-2" viewBox="0 0 512 512"><rect x="48" y="96" width="416" height="304" rx="32.14" ry="32.14" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M16 416h480" /></svg>
                        Laptop
                    </li>
                    <li className="flex mt-3 cursor-pointer px-2 w-[180px] py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-6 mr-2" viewBox="0 0 512 512"><rect x="80" y="16" width="352" height="480" rx="48" ry="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /></svg>
                        Máy tính bảng
                    </li>
                    <li className="flex mt-3 cursor-pointer px-2 w-[180px] py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-6 mr-2" viewBox="0 0 512 512"><path d="M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><path d="M108.39 270.13l-13.69 8h0c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12h0l13.69-8a16.16 16.16 0 005.78-21.87L130 276a15.74 15.74 0 00-21.61-5.87zM403.61 270.13l13.69 8h0c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12h0l-13.69-8a16.16 16.16 0 01-5.78-21.87L382 276a15.74 15.74 0 0121.61-5.87z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /></svg>
                        Âm thanh
                    </li>
                </ul>
            </aside>
            <Outlet />
        </div>
    </div>
}

export default Admin
