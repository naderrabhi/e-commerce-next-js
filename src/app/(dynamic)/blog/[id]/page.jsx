import Image from "next/image"
import styles from "./page.module.css";

async function getData(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}


export async function generateMetadata({params}) {
    const id = params.id
    const product = await getData(id)    
    return {
        title: product.title,
        description: product.description
    }
}

export default async function Post({params}) {
    const id = params.id
    const product = await getData(id)
    
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.desc}>{product.description}</p>
                </div>
                <div className={styles.imageContainer}>
                    <Image 
                        className={styles.postImage}
                        src={product.thumbnail}
                        alt={product.title}
                        fill={true}
                    />
                    <span className={styles.author}>{product.category}</span>
                </div>
            </header>

            <div className={styles.content}>

                <div className={styles.gallery}>
                    {product.images.map(image => (
                        <Image 
                        src={image}
                        alt={product.title}
                        width={150}
                        height={150}
                        key={product.id}
                    />
                    ))}
                </div>

                <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ipsa iure ipsam libero natus ad, molestiae cumque velit, eos minus et eum laboriosam sed, qui commodi repellendus cupiditate deleniti hic sint quibusdam beatae error in modi? Autem accusantium consequatur culpa, omnis accusamus soluta iste voluptatem incidunt esse aperiam, consectetur magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat dicta rerum animi. Doloremque expedita ut consectetur accusantium, beatae adipisci rem nisi magnam perspiciatis explicabo nostrum iusto delectus obcaecati cumque vero.
                Maxime, fugiat aliquam? Magni exercitationem, tenetur ipsam, commodi autem tempore quaerat voluptatem est quos molestiae dolore facilis nemo soluta quod, voluptas obcaecati maiores? Velit, in laboriosam? Ipsam sunt vel numquam?
                Perspiciatis nobis, eaque obcaecati iste ipsam perferendis magni quas cumque voluptas temporibus velit dignissimos. Blanditiis perspiciatis doloremque rerum quidem accusamus? Labore ducimus libero ipsum, laudantium animi illo mollitia magni nihil.
                Dolorem veniam voluptatum sapiente sed labore, cumque laboriosam sunt ratione nihil placeat dignissimos. Odio, nobis facere nostrum in voluptatibus officiis labore eaque molestias possimus? At temporibus quidem tenetur repellat asperiores.
                Debitis aliquid eum dignissimos, eaque, saepe atque optio veniam quia ipsam dolores asperiores quidem beatae. Veritatis vero dolores itaque maxime dolor. Hic cupiditate numquam adipisci facere atque inventore nemo ad?
                Praesentium vero mollitia quasi voluptatibus earum provident quidem maxime rem natus, dolorem culpa officia nobis dicta quam. Reprehenderit vel corrupti rem eius in quas corporis laudantium fugit tempora id. Inventore?
                Magni autem facere ullam, ducimus minus porro repellat maiores asperiores laudantium, esse voluptatem. Omnis nesciunt dolore asperiores, quis sequi sapiente alias ad ex earum iure quisquam, inventore doloribus officia reiciendis!
                Animi nesciunt deserunt sit nisi exercitationem autem cum, voluptas quae ex explicabo dolorum voluptates architecto dicta earum non atque omnis voluptatum tempora sequi. Inventore veniam ea distinctio eligendi sequi! Nulla.
                Praesentium dolores cupiditate error eveniet a consequatur et ducimus maxime excepturi consectetur! Neque quis pariatur ex explicabo voluptate ducimus laborum modi nisi cumque rerum. Rem impedit ipsam aperiam modi libero!
                Nostrum suscipit architecto eum laboriosam nulla dignissimos aut tempore, atque ullam pariatur expedita quod. Quasi aliquid consectetur sunt obcaecati accusamus quibusdam minus corporis vitae. Saepe sequi pariatur ea est id.</p>
            
            </div>
        </div>
    )
}