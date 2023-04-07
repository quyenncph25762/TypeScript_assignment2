import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Product from "../components/Product"
import { IProduct } from "../models"
import { getAll } from "../api/Product"

const HomePage = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const fetchProducts = async () => {
        const { data } = await getAll();
        setProducts(data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return <div className="container-xxl max-auto">
        <Banner />
        <h1 className="uppercase my-10">Điện thoại nổi bật nhất</h1>
        <div className="grid grid-cols-5 gap-4 mt-4">
            {products.map(product => <Product data={product} key={product.id} />)}
        </div>
    </div>
}

export default HomePage
