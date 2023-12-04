import Image from 'next/image';
import Link from 'next/link';
import styles from './partnerCard.module.css';

const size = 250;
export default function PartnerCard({ image, companyName, companyColor, useImageSize, link  }) {
    return (
        <div className={styles.card}>
            <div style={{ position: 'relative', width: `${size}px`, height: `${size}px` }}>
                {useImageSize ? <Image src={image} alt={companyName} layout='fill' objectFit='contain' /> :
                    <Image src={image} alt={companyName} height={size} width={size} />}
            </div>

            <div className={styles.text}>
                <h2 style={{ color: companyColor ? companyColor : "black" }}>{companyName}</h2>
                <Link href={link}>
                    See More &gt;
                </Link>
            </div>
        </div>
    )
}
