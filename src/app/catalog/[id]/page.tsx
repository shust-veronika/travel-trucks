'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import styles from './camper-details.module.css';

interface CamperData {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  gallery: Array<{
    id: string;
    thumb: string;
    original: string;
    order: number;
  }>;
}

export default function CamperDetailsPage() {
  const { id } = useParams();
  
  const [camper, setCamper] = useState<CamperData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    async function fetchCamperDetails() {
      try {
        const response = await fetch(`https://campers-api.goit.study/campers/${id}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setCamper(data);
        if (data.gallery && data.gallery.length > 0) {
          setActiveImage(data.gallery[0].original || data.gallery[0].thumb);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchCamperDetails();
  }, [id]);

  const handleBookingSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  let valid = true;

  setNameError('');
  setEmailError('');

  if (name.trim().split(' ').length < 2) {
    setNameError('Please enter your full name.');
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    setEmailError('Please enter a valid email.');
    valid = false;
  }

  if (!valid) return;

  try {
    const response = await fetch(
      `https://campers-api.goit.study/campers/${id}/booking-requests`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
        }),
      }
    );

    if (response.ok) {
      const result = await response.json();

      alert(result.message);

      setName('');
      setEmail('');

      setNameError('');
      setEmailError('');
    }
  } catch {
    alert('Something went wrong');
  }
};

  if (loading) return <div className={styles.container}>Loading...</div>;
  if (!camper) return <div className={styles.container}>Camper not found</div>;

  return (
    <main className={styles.container}>
      <div className={styles.topGrid}>
        <div className={styles.galleryWrapper}>
          <div className={styles.mainImageWindow}>
            <img src={activeImage} alt={camper.name} />
          </div>
          <div className={styles.thumbnailsRow}>
            {camper.gallery?.map((img) => (
              <button 
                key={img.id} 
                className={`${styles.thumbBtn} ${activeImage === (img.original || img.thumb) ? styles.activeThumb : ''}`}
                onClick={() => setActiveImage(img.original || img.thumb)}
              >
                <img src={img.thumb} alt="thumbnail" />
              </button>
            ))}
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.infoCard}>
            <p className={styles.title}>{camper.name}</p>
            <div className={styles.metaInfo}>
              <img src="/icons/stars.svg" alt="Star" width="16" height="16" className={styles.starIcon} />
              <span className={styles.rating}> {camper.rating} ({camper.totalReviews} Reviews)</span>
              <img src="/icons/map.svg" alt="Location" width="16" height="16" className={styles.locationIcon} />
              <span className={styles.location}> {camper.location}</span>
            </div>
            <p className={styles.price}>€{camper.price.toFixed(2)}</p>
            <p className={styles.description}>{camper.description}</p>
          </div>
          <div className={styles.features}>
            <p className={styles.featurePich}>Vehicle details</p>
            <div className={styles.tags}>
              <span className={styles.tag}>{camper.transmission}</span>
              <span className={styles.tag}>{camper.engine}</span>
              <span className={styles.tag}>AC</span>
              <span className={styles.tag}>Kitchen</span>
            </div>
            
            <table className={styles.detailsTable}>
              <tbody>
                <tr><td className={styles.detailRowForm}>Form</td><td className={styles.detailRowForm}>{camper.form.replace('_', ' ')}</td></tr>
                <tr><td className={styles.detailRow}>Length</td><td className={styles.detailRow}>{camper.length}</td></tr>
                <tr><td className={styles.detailRow}>Width</td><td className={styles.detailRow}>{camper.width}</td></tr>
                <tr><td className={styles.detailRow}>Height</td><td className={styles.detailRow}>{camper.height}</td></tr>
                <tr><td className={styles.detailRow}>Tank</td><td className={styles.detailRow}>{camper.tank}</td></tr>
                <tr><td className={styles.detailRowConsumption}>Consumption</td><td className={styles.detailRowConsumption}>{camper.consumption}</td></tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
      <div className={styles.bottomGrid}>
        <div className={styles.reviewsBlock}>
          <h2 className={styles.reviewsTitle}>Reviews</h2>
          <div className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <div className={styles.avatar}>A</div>
              <div>
                <h4 className={styles.reviewerName}>Alice</h4>
                <div className={styles.stars}>★★★★★</div>
              </div>
            </div>
            <p className={styles.reviewText}>
              The Mavericks panel truck was a perfect choice for my solo road trip. Compact, easy to drive, and had all the essentials.
            </p>
          </div>
          <div className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <div className={styles.avatar}>B</div>
              <div>
                <h4 className={styles.reviewerName}>Bob</h4>
                <div className={styles.stars}>★★★☆☆</div>
              </div>
            </div>
            <p className={styles.reviewText}>
              A decent option for solo travel. The Mavericks provided a comfortable stay, but the lack of bathroom facilities was a drawback.
            </p>
          </div>
        </div>
        <aside className={styles.formBlock}>
          <div className={styles.bookingCard}>
            <h3 className={styles.formTitle}>Book your campervan now</h3>
            <p className={styles.formSubtitle}>Stay connected! We are always ready to help you.</p>
            
            <form onSubmit={handleBookingSubmit} className={styles.form} noValidate>
              <div className={styles.field}>
  {nameError && (
    <label className={styles.errorLabel}>
      Name*
    </label>
  )}

  <input
    type="text"
    value={name}
    placeholder="Name*"
    onChange={(e) => {
      setName(e.target.value);

      if (nameError) setNameError('');
    }}
    className={`${styles.input} ${
      nameError ? styles.errorInput : ''
    }`}
  />

  {nameError && (
    <>
      <img
        src="/icons/error.svg"
        alt="error"
        className={styles.errorIcon}
      />

      <p className={styles.errorText}>
        {nameError}
      </p>
    </>
  )}
</div>
              <div className={styles.field}>
  {emailError && (
    <label className={styles.errorLabel}>
      Email*
    </label>
  )}

  <input
    type="email"
    value={email}
    placeholder="Email*"
    onChange={(e) => {
      setEmail(e.target.value);

      if (emailError) setEmailError('');
    }}
    className={`${styles.input} ${
      emailError ? styles.errorInput : ''
    }`}
  />

  {emailError && (
    <>
      <img
        src="/icons/error.svg"
        alt="error"
        className={styles.errorIcon}
      />

      <p className={styles.errorText}>
        {emailError}
      </p>
    </>
  )}
</div>
              <button type="submit" className={styles.sendButton}>
                Send
              </button>
            </form>
          </div>
        </aside>

      </div>
    </main>
  );
}