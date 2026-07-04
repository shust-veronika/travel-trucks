'use client';

import { useState } from 'react';
import styles from './BookingForm.module.css';

export default function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Booking submitted:', { name, email, date, comment });
    
    setName('');
    setEmail('');
    setDate('');
    setComment('');
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Name*"
          required
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <input
          type="email"
          placeholder="Email*"
          required
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type="date"
          required
          className={styles.input}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        
        <textarea
          placeholder="Comment"
          className={styles.textarea}
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        
        <button type="submit" className={styles.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
}