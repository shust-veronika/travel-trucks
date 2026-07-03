import styles from './LoadMoreButton.module.css';

interface LoadMoreButtonProps {
  onClick: () => void;
  loading: boolean;
}

export default function LoadMoreButton({
  onClick,
  loading,
}: LoadMoreButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Load More'}
    </button>
  );
}