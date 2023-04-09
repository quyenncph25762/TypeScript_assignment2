import { Link, Outlet, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { ICategory, IUser, formSignup } from "../../models"
import { getCategory } from "../../api/Category"

const Admin = () => {
    const [category, setCategory] = useState<ICategory[]>([])
    const [user, setUser] = useState<IUser>({} as IUser)
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("user") as string)
    const fetchCategory = async () => {
        const { data } = await getCategory();
        setCategory(data)
    }
    const showProducts = (id: string) => {
        if (id) {
            console.log(id);
        }
    }
    useEffect(() => {
        if (!userData) {
            navigate("/")
        }
        if (userData) {
            if (userData.role !== 'admin') {
                navigate("/")
            }
        }
    }, [navigate])
    const logout = () => {
        localStorage.clear()
        alert("Bạn đã đăng xuất")
        navigate("/")
    }
    useEffect(() => {
        fetchCategory()
        setUser(userData)
    }, [])
    return <div className="">
        <header className="w-full h-[58px] bg-[#00B0D7] container">
            <div className="flex items-center h-[58px] w-full">
                <Link to="/"><img src="../../public/anhtus.png" alt="" className="w-[50px] flex-shrink-0" /></Link>
                <div className="w-[500px] relative ml-10 group flex-shrink-0">
                    <input type="text" className='rounded-md py-1 px-4 w-full focus:outline-none' />
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon focus:hidden absolute w-5 h-full left-0 top-[50%] translate-y-[-50%] ml-4 group-focus-within:opacity-0 transition-opacity" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448" /></svg>
                </div>
                <h1 className="text-[#ffffff] text-lg flex-1 text-right">Xin chào ! <span>{user && user.userName}</span></h1>
            </div>
        </header>
        <div className="bg-[#F1F3F4] flex h-auto">
            <aside className="min-w-[300px] min-h-screen bg-[#FFFFFF] p-6  h-100vh float-left flex-1">
                <ul>
                    {category.map((cate, index) =>
                        <li key={index} onClick={() => showProducts(cate._id)} className="flex bg-[#ffffff] w-[180px] py-2 px-2 rounded-md text-[#00B0D7] mt-3 cursor-pointer hover:bg-[#00B0D7] hover:text-[#ffffff]">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-6 mr-2" viewBox="0 0 512 512"><rect x="128" y="16" width="256" height="480" rx="48" ry="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><path d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /></svg> */}
                            {cate.name}
                        </li>
                    )}
                    <li className="flex mt-3 cursor-pointer px-2 w-[180px] py-2">
                        <button onClick={() => logout()} className="bg-red-500 text-[#ffffff] px-3 py-2 rounded-lg">Đăng xuất</button>
                    </li>
                </ul>
            </aside>
            <Outlet />
        </div>
    </div>
}

export default Admin
