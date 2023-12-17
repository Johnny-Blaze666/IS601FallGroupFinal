import Image from 'next/image';
import Link from 'next/link';
import styles from './socialMedia.module.css';
export default function SocialMedia({ image, link, ariaLabel  }) {
    return (
        <div className={styles.orb} style={{ backgroundImage: `url(${image})` }}></div>
    )
}
