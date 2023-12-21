import Image from "next/image";
import Link from 'next/link';
import styles from './serviceCard.module.css';
export default function ServiceCard({ image, service, tagline, link, aria  }) {
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.text}>
                <h2>{service}</h2>
                <p>{tagline}</p>
                <Link href={link} className={styles.link} aria-label='Check out this service'>Check Out This Service</Link>
            </div>
        </div>
    )
}
