import Image from "next/image"

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    const paths = data.map(product => {
        return {
            params: { id: product.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await response.json()



    return {
        props: { product: data }
    }
}

const Details = ({ product }) => {
    return (
        <div key={product.id}>
            <h1>{product.name}</h1>
            {/* <div className="w-100 mh-50 overflow-hidden" style={{ height: 300 }}>
                <img className="w-100" src={product.url} />
            </div> */}
            <p>Email: {product.email}</p>
            <p>Phone: {product.phone}</p>
            <p>Company: {product.company.name}</p>
        </div >
    );
}

export default Details;
