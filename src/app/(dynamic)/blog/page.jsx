import Link from "next/link";
import styles from "./page.module.css"
import Image from "next/image";

async function getData() {
    const res = await fetch("https://dummyjson.com/products")

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

export const metadata = {
    title: 'HEXASHOP - PRODUCTS',
    description: 'Discover a world of endless shopping possibilities at our online store. Browse, choose, and order your favorite products from the conmfort of your home',
  }


export default async function Blog() {

    const data = await getData()
    const products = data.products

    return (
        <div className={styles.mainContainer}>

        {
            products.map(product => (
                <Link key={product.id} href={`/blog/${product.id}`} className={styles.post}>
                    <div className={styles.imageContainer}>
                        <Image
                        className={styles.image}
                        src={product.thumbnail}
                        fill={true}
                        alt=''
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{product.title}</h1>
                        <p className={styles.text}>Post Text</p>
                    </div>
                </Link>
            ))
        }
            
        </div>
    )
}