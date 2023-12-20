import Image from "next/image";
import Link from 'next/link';
import styles from './partnerCard.module.css';

const size = 250;
export default function PartnerCard({ image, companyName, companyColor, useImageSize, link, externalLink }) {
    return (
        <div className={styles.card}>
            <div style={{ position: 'relative', width: `${size}px`, height: `${size}px` }}>
                {useImageSize ? <Image src={image} alt={companyName} fill sizes="100vw" /> :
                    <Image
                        src={image}
                        alt={companyName}
                        height={size}
                        width={size}
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />}
            </div>

            <div className={styles.text}>
                <h2 style={{ color: companyColor ? companyColor : "black" }}>{companyName}</h2>
                {externalLink ?
                    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>See More &gt;</a> :
                    <Link href={link} className={styles.link}>See More &gt;</Link>}
            </div>
        </div>
    );
}
