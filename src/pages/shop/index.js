import Link from "next/link"

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await response.json()



    return {
        props: { products: data }
    }
}




const Shop = ({ products }) => {

    const getImages = imgs => {
        let content = [];
        for (let i = 0; i < 10; i++) {
            const item = imgs[i]
            content.push(
                <Link href={'/shop/' + item.id}>
                    <img className="my-2 mx-2" key={item.id} src={item.thumbnailUrl} />
                </Link>
            )
        }
        return content
    }


    return (
        <div>
            <h1>Products</h1>


            {getImages(products)}


            {/* for (let i = 100; i < 10; i++ {

                    products.map(product => (
                        <p key={product.id}> {product.name} </p>
                    ))
            }) */}
        </div>
    );
}

export default Shop;