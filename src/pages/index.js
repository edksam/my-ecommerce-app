import Head from "next/head";
import Container from "@components/Container";
import Button from "@components/Button";

import Header from "@components/Header";
import styles from "@styles/Home.module.scss";

import products from "@data/products.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Hyper Bros Trading Cards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Container>
        <h1>Hyper Bros Trading Cards</h1>
        <h2>Available Cards</h2>
        <ul className={styles.products}>
          {products.map((product, id) => (
            <li key={id}>
              <img src={product.image} alt={`Card of ${product.title}`} />
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productPrice}>£{product.price}</p>
              <p>
                <Button>Add to Cart</Button>
              </p>
            </li>
          ))}
        </ul>
      </Container>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()}, Hyper Bros Trading Cards
      </footer>
    </div>
  );
}
