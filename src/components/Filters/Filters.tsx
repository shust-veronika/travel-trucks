import styles from './Filters.module.css';

export default function Filters() {
  return (
    <aside className={styles.sidebar}>
      <form className={styles.form}>
        <div className={styles.group}>
          <label className={styles.label}>Location</label>
          <div className={styles.inputWrapper}>
            <img src="/icons/map.svg" alt="Map" className={styles.iconInput} />
            <input
              className={styles.input}
              type="text"
              placeholder="City"
            />
          </div>
        </div>

        <h2 className={styles.title}>Filters</h2>

        <div className={styles.group}>
          <h3 className={styles.label}>Camper form</h3>

          <label className={styles.inputLabel}>
            <input type="radio" name="form" className={styles.radioInput} />
            <span className={styles.customRadio}></span>
            Alcove
          </label>

          <label className={styles.inputLabel}>
            <input type="radio" name="form" className={styles.radioInput} />
            <span className={styles.customRadio}></span>
            Panel Van
          </label>

          <label className={styles.inputLabel}>
            <input type="radio" name="form" className={styles.radioInput} />
            <span className={styles.customRadio}></span>
            Integrated
          </label>

          <label className={styles.inputLabel}>
            <input type="radio" name="form" className={styles.radioInput} />
            <span className={styles.customRadio}></span>
            Semi Integrated
          </label>
        </div>

        <div className={styles.group}>
          <h3 className={styles.label}>Engine</h3>

          <label className={styles.inputLabel}>
            <input type="radio" name="engine" className={styles.radioInput} />
            <span className={styles.customRadio}></span>
            Diesel
          </label>

          <label className={styles.inputLabel}>
            <input type="radio" name="engine" className={styles.radioInput} />
            <span className={styles.customRadio}></span>
            Petrol
          </label>

          <label className={styles.inputLabel}>
            <input type="radio" name="engine" className={styles.radioInput} />
            <span className={styles.customRadio}></span>
            Hybrid
          </label>

          <label className={styles.inputLabel}>
            <input type="radio" name="engine" className={styles.radioInput} />
            <span className={styles.customRadio}></span>
            Electric
          </label>
        </div>

        <div className={styles.group}>
          <h3 className={styles.label}>Transmission</h3>

          <label className={styles.inputLabel}>
            <input type="radio" name="transmission" className={styles.radioInput} />
            <span className={styles.customRadio}></span>
            Automatic
          </label>

          <label className={styles.inputLabel}>
            <input type="radio" name="transmission" className={styles.radioInput} />
            <span className={styles.customRadio}></span>
            Manual
          </label>
        </div>

        <button type="submit" className={styles.search}>Search</button>

        <button type="reset" className={styles.clear}>
          <img src="/icons/close.svg" alt="Clear" className={styles.icon} />
          Clear filters
        </button>
      </form>
    </aside>
  );
}