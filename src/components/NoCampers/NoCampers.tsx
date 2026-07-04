import styles from './NoCampers.module.css';

interface NoCampersProps {
  onClearFilters: () => void;
  onViewAll: () => void;
}

export default function NoCampers({ onClearFilters, onViewAll }: NoCampersProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img 
        src="/icons/not-found.svg" 
        alt="No campers found" 
        className={styles.image} 
      />
      </div>

      <h2 className={styles.title}>No campers found</h2>
      
      <p className={styles.text}>
        We couldn’t find any campers that match your filters.<br />
        Try adjusting your search or clearing some filters.
      </p>

      <div className={styles.buttonGroup}>
        <button type="button" className={styles.clearButton} onClick={onClearFilters}>
          <img src="/icons/close.svg" alt="Clear" className={styles.icon} />
          Clear filters
        </button>
        
        <button type="button" className={styles.viewAllButton} onClick={onViewAll}>
          View all campers
        </button>
      </div>
    </div>
  );
}