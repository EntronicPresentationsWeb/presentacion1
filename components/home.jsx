import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a nuestro cat&aacute;logo de presentaciones
        </h1>
        <div className="card">
          <Image src="/home/economia-clickeable.png" alt="presentacion" width={300} height={255} className="img-card"/>
            <div className="card-padding">
              <h4><b>Hacer la economia clickeable</b></h4>
              <p>Arcalia y FixUp</p>
              <Link href="/economia-clickeable" className="ov-btn-slide-right">Ver presentaci&oacute;n</Link>
            </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <figure>
          <Image src="/home/arcalia-blanco.png" alt="logo" width={180} height={55} />
        </figure>
        <figure>
          <Image src="/home/FixUp-blanco.png" alt="logo" width={100} height={55} />
        </figure>
      </footer>
    </div>
  )
}
