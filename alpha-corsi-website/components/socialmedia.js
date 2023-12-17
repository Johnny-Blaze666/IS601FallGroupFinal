import Image from 'next/image';
import Link from 'next/link';
import styles from './socialMedia.module.css';

export default function SocialMedia({ image, link, ariaLabel  }) {
    return (
        <Link href={link} aria-label={ariaLabel}>
            <div className={styles.orb}>
                <div className={styles.imageContainer}>
                    <Image src={image} alt={ariaLabel} layout="fill" />
                </div>
            </div>
        </Link>
    )
}
