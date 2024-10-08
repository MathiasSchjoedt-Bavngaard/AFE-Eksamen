import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const name = "Simon, Mathias and Oliver";
export const siteTitle = "Q07 - PAGES ROUTER";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A next.js project for Q07 using the pages router."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.imageContainer}>
              <Image
                style={{ objectFit: "cover" }}
                priority
                src="/images/simon.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                quality={100}
                alt=""
              />
              <Image
                style={{ marginLeft: "-15px", objectFit: "cover" }}
                priority
                src="/images/mathias.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                quality={100}
                alt=""
              />
              <Image
                style={{ marginLeft: "-15px", objectFit: "cover" }}
                priority
                src="/images/oliver.PNG"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                quality={100}
                alt=""
              />
            </div>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <div className={styles.imageContainer}>
                <Image
                  style={{ objectFit: "cover" }}
                  priority
                  src="/images/simon.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  quality={100}
                  alt=""
                />
                <Image
                  style={{ marginLeft: "-15px", objectFit: "cover" }}
                  priority
                  src="/images/mathias.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  quality={100}
                  alt=""
                />
                <Image
                  style={{ marginLeft: "-15px", objectFit: "cover" }}
                  priority
                  src="/images/oliver.PNG"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  quality={100}
                  alt=""
                />
              </div>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
