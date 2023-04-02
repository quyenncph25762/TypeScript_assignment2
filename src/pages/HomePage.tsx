import Banner from "../components/Banner"
import Product from "../components/Product"

const HomePage = () => {
    return <div className="container-xxl max-auto">
        <Banner />
        <h1 className="uppercase my-10">Điện thoại nổi bật nhất</h1>
        <div className="grid grid-cols-7 gap-4 mt-4">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
}

export default HomePage
