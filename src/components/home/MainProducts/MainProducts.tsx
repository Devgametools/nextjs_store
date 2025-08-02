import Image from 'next/image'
import styles from './MainProducts.module.sass'

// Interfaces para tipar los productos de Shopify


const getProducts = async () => {
  try {
    const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/products.json`, {
      headers: new Headers({
        'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || "",
        //'Content-Type': 'application/json',
      })
    });
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const MainProducts = async () => {
  const products = await getProducts();

  return (
    <section>
      <h3>New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading='eager'/>

            </article>
          )
        })}

      </div>
    </section>
  );
}