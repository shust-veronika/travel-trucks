import Link from 'next/link';
import Image from 'next/image';
import { FaStar, FaMapMarkerAlt, FaGasPump } from 'react-icons/fa';
import { GiGearStickPattern } from 'react-icons/gi';
import { MdOutlineAirportShuttle } from 'react-icons/md';
import { Camper } from '@/types/camper';
import styles from './CamperCard.module.css';

interface CamperCardProps {
  camper: Camper;
}

const formatForm = (form: string) =>
  form
    .split('_')
    .join(' ')
    .replace(/\b\w/g, letter => letter.toUpperCase());

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={camper.coverImage}
        alt={camper.name}
      />

      <div className={styles.info}>
        <div className={styles.top}>
          <h2 className={styles.title}>{camper.name}</h2>

          <span className={styles.price}>€{camper.price}</span>
        </div>

        {/* Рейтинг и локация */}
<div className={styles.meta}>
  <span className={styles.rating}>
    <FaStar className={styles.starIcon} />
    {camper.rating} ({camper.totalReviews} Reviews)
  </span>

  <span className={styles.location}>
    <Image
      src="/icons/map.svg"
      alt="Location"
      width={16}
      height={16}
      className={styles.locationIcon}
    />
    {camper.location}
  </span>
</div>

        {/* Здесь позже можно вывести описание */}
        {/* <p className={styles.description}>{camper.description}</p> */}

        {/* Характеристики */}
        <div className={styles.features}>
          <span className={styles.feature}>
            <Image
      src="/icons/petrol.svg"
      alt="gas"
      width={20}
      height={20}
      className={styles.descriptionIcon}/>
            {camper.engine}
          </span>

          <span className={styles.feature}>
            <Image
      src="/icons/automatic.svg"
      alt="automatic"
      width={20}
      height={20}
      className={styles.descriptionIcon} />
            {camper.transmission}
          </span>

          <span className={styles.feature}>
            <Image
      src="/icons/alcove.svg"
      alt="Alcove"
      width={20}
      height={20}
      className={styles.descriptionIcon} />
            {formatForm(camper.form)}
          </span>
        </div>

        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          className={styles.button}
        >
          Show more
        </Link>
      </div>
    </article>
  );
}