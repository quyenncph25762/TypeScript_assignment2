import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate();
    const routerBack = () => {
        navigate(-1)
    }
    // useEffect(() => {
    //     routerBack()
    // }, [navigate])
    return <div className='flex justify-center'>
        <div className="w-[600px] p-2">
            <div className="flex">
                <button onClick={() => routerBack()} className='text-red-600 text-sm flex-shrink-0'>Trở về</button>
                <div className="text-center text-red-600 text-sm flex-1 font-bold">Giỏ hàng</div>
            </div>
            <div className="w-full flex shadow-md rounded-md py-3 px-2 mt-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-6 font-bold absolute right-0 mr-3" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368" /></svg>
                <img src="https://s3-alpha-sig.figma.com/img/daeb/e1f4/9a46873a3c4851b9f75981bf31d5d9cb?Expires=1681689600&Signature=bo744RusJYUjHQKPt7oVUv1uG6rDJqXhfVn6BeyajCX2x6lSTRdp31jqn0NOy9sIZFSquoqXsZlFMHPubv5B1-ZvD3cHeUJEak1QhJjbZfaIOBmr93-N7wIiCo6IQ4VSSF99iRejQs1W9tVDNN9kyfTV1v~1vSTG7b5NF~ybsZ26zwY4PWajeZQj0JjX3mVq6yDZ-LL5A4eItfWUw7PJGpEZbeS0ccyRjIFXdE8N9ydN1Pj52nAW1XSBO9FGrwlRyjU00rTG8h9l7rgXsTz1KxFeQyWmThfCXUEbhFvPzy8yJk6Io64QfOansj3CYxCK7eqvURv6PeqD50TCpkU12g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <div className="">
                    <h1 className='text-lg font-semibold'>Samsung Galaxy S22-Đen</h1>
                    <h3 className='text-red-500 font-semibold mt-2'>16.090.000đ<span className='text-gray-400 text-sm ml-2'>21.990.000đ</span></h3>
                    <div className="flex font-semibold mt-2"><p>Chọn số lượng:</p><input type="number" min={1} name="" id="" className='w-9 border-1 border-[#ccc] ml-3' /></div>
                    <div className="bg-[#ccc] w-[350px] mt-2 p-2 rounded-md">
                        <p>-Chương trình khuyến mãi:</p>
                        <span>Dịch vụ phòng chờ hạng thương gia tại sân bay</span>
                        <span>Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex shadow-md rounded-md py-3 px-2 mt-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-6 font-bold absolute right-0 mr-3" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368" /></svg>
                <img src="https://s3-alpha-sig.figma.com/img/92a4/85aa/17e271963f0ac0056bf9888a3e196f9c?Expires=1681689600&Signature=FcZH-j0jD8B111AUDOxHJJq75ExpjlxPXe6QMlKdz7XutEPbZ2ZrH~nCdTbv4I~IgKjcdgmOQBE02wm5mTPzxBv1IE0Jg8sYSsCna8bUBlVL9mSqbFkgIJn4DmVAnD-i2bXX34uKzquIaBkTQf6N72nOyQnYdfUXyJ-Z1VMpGnpa76Nl7MBdsCouawEcXiC5fyRC4YYT9l9XEzLJ0eEnSHeoDtRN85xim71xU3G4xpNeM5GdKWyIJZ9GgBX1g8TJeiFg5~Hx2HdUCXRhJB~5ADqEM1aJftu5xN~VHrhZ8LWuKDEs6mP~XdIu6uXVx3Ug1Hvir5F9c41CnaVqJTFt4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <div className="">
                    <h1 className='text-lg font-semibold'>Samsung Galaxy S22-Đen</h1>
                    <h3 className='text-red-500 font-semibold mt-2'>16.090.000đ<span className='text-gray-400 text-sm ml-2'>21.990.000đ</span></h3>
                    <div className="flex font-semibold mt-2"><p>Chọn số lượng:</p><input type="number" min={1} name="" id="" className='w-9 border-1 border-[#ccc] ml-3' /></div>
                </div>
            </div>
            <div className="flex justify-between w-full mt-5">
                <p className='text-sm'>Tổng tiền tạm tính:</p>
                <p className='text-red-500 font-semibold'>17.820.000đ</p>
            </div>
            <button className='bg-[#FF3945] border-1 text-[#FFFFFF] w-full h-12 rounded-md hover:bg-white hover:border-[#FF3945] hover:text-[#FF3945] ease-linear transition-all mt-4'><a href="">Tiến hành đặt hàng</a></button>
            <button className='bg-[#FFFFFF] border-1 border-[#FF3945] text-[#FF3945] w-full h-12 rounded-md hover:text-[#FF3945] ease-linear transition-all mt-4'><a href="">Chọn thêm sản phẩm khác</a></button>
        </div>
    </div>
}

export default Cart
