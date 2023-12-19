import Image from 'next/image';
import Link from 'next/link';
import styles from './serviceCardSignup.module.css';
export default function ServiceCardSignup({ image, service, caption, link  }) {
    return (
        <div className={styles.card}>
            <div className={styles.text}>
                <Image src={image} alt={service} width={60} height={60}/>
                <h2>{service}</h2>
                <p>{caption}</p>
            </div>
            <Link href={link} className={styles.link}>Start Now</Link>
        </div>
    )
}
