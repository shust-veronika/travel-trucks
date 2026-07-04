'use client';

import { useState } from 'react';
import styles from './Filters.module.css';

const CITIES = ['Kyiv', 'Lviv', 'Odesa', 'Kharkiv', 'Dnipro', 'Sumy'];

interface FiltersProps {
  onSearch: (filters: { location: string; form: string; engine: string; transmission: string }) => void;
}

export default function Filters({ onSearch }: FiltersProps) {
  const [location, setLocation] = useState('');
  const [form, setForm] = useState('');
  const [engine, setEngine] = useState('');
  const [transmission, setTransmission] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ location, form, engine, transmission });
  };

  const handleReset = () => {
    setLocation('');
    setForm('');
    setEngine('');
    setTransmission('');
    onSearch({ location: '', form: '', engine: '', transmission: '' });
  };

  return (
    <aside className={styles.sidebar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        
        <div className={styles.group}>
          <label className={styles.label}>Location</label>
          <div className={styles.inputWrapper}>
            <img src="/icons/map.svg" alt="Map" className={styles.iconInput} />
            <input
              className={styles.input}
              type="text"
              placeholder="City"
              list="cities-list"
              value={location}
              onChange={(e) => setLocation(e.target.value)} 
            />
            <datalist id="cities-list">
              {CITIES.map((city) => (
                <option key={city} value={city} />
              ))}
            </datalist>
          </div>
        </div>

        <h2 className={styles.title}>Filters</h2>

        <div className={styles.group}>
          <h3 className={styles.label}>Camper form</h3>
          {[
            { id: 'alcove', label: 'Alcove' },
            { id: 'panel_Van', label: 'Panel Van' },
            { id: 'integrated', label: 'Integrated' },
            { id: 'semi_Integrated', label: 'Semi Integrated' },
          ].map((item) => (
            <label key={item.id} className={styles.inputLabel}>
              <input
                type="radio"
                name="form"
                className={styles.radioInput}
                checked={form === item.id}
                onChange={() => setForm(item.id)}
              />
              <span className={styles.customRadio}></span>
              {item.label}
            </label>
          ))}
        </div>

        <div className={styles.group}>
          <h3 className={styles.label}>Engine</h3>
          {[
            { id: 'diesel', label: 'Diesel' },
            { id: 'petrol', label: 'Petrol' },
            { id: 'hybrid', label: 'Hybrid' },
            { id: 'electric', label: 'Electric' },
          ].map((item) => (
            <label key={item.id} className={styles.inputLabel}>
              <input
                type="radio"
                name="engine"
                className={styles.radioInput}
                checked={engine === item.id}
                onChange={() => setEngine(item.id)} 
              />
              <span className={styles.customRadio}></span>
              {item.label}
            </label>
          ))}
        </div>

        <div className={styles.group}>
          <h3 className={styles.label}>Transmission</h3>
          {[
            { id: 'automatic', label: 'Automatic' },
            { id: 'manual', label: 'Manual' },
          ].map((item) => (
            <label key={item.id} className={styles.inputLabel}>
              <input
                type="radio"
                name="transmission"
                className={styles.radioInput}
                checked={transmission === item.id}
                onChange={() => setTransmission(item.id)} 
              />
              <span className={styles.customRadio}></span>
              {item.label}
            </label>
          ))}
        </div>

        <button type="submit" className={styles.search}>Search</button>

        <button type="button" className={styles.clear} onClick={handleReset}>
          <img src="/icons/close.svg" alt="Clear" className={styles.icon} />
          Clear filters
        </button>
      </form>
    </aside>
  );
}