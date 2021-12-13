import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Nav from "../components/nav"

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.flexCore}>
          <div className={styles.half0}></div>
          <div className={styles.half1}></div>
        </div>
        <div className={styles.cover}>
          <h1 className="tleft" style={{marginLeft: "5vw"}}>Welding done Right</h1>
          <div className={styles.indFlex}>
          
            <div>
              <div className={styles.bar}></div>
              <h2 className="tleft">Phillip Davis</h2>
              <p className={styles.pard}>This is a short description of the work that we do.  For the moment it is filled with dummy text and will be updated later.</p>
              <Link href="mailto:quote@allmetalwelding.com">
                <button className="button">Get a Quote</button>
              </Link>
            </div>

            <div>
              
            </div>

          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
}