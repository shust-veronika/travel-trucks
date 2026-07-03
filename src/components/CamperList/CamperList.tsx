import CamperCard from '@/components/CamperCard/CamperCard';
import { Camper } from '@/types/camper';
import styles from './CamperList.module.css';

interface CamperListProps {
  campers: Camper[];
}

export default function CamperList({ campers }: CamperListProps) {
  return (
    <>
    <div className={styles.list}>
      {campers.map(camper => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
    </>
  );
}