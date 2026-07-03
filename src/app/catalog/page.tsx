'use client';

import Filters from '@/components/Filters/Filters';
import CamperList from '@/components/CamperList/CamperList';
import LoadMoreButton from '@/components/LoadMoreButton/LoadMoreButton';
import Loader from '@/components/Loader/Loader'; // Импортируем созданный лоадер
import { useCampers } from '@/hooks/useCampers';
import styles from './catalog.module.css';

export default function CatalogPage() {
  const {
    data,
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCampers();

  // Заменяем стандартный текст на красивое модальное окно лоадера
  if (isPending) return <Loader />;

  if (isError) return <h2>Something went wrong...</h2>;

  const campers = data.pages.flatMap(page => page.campers);

  return (
    <main className={styles.main}>
      <Filters />

      <div className={styles.content}>
        <CamperList campers={campers} />

        {hasNextPage && (
          <LoadMoreButton
            onClick={() => fetchNextPage()}
            loading={isFetchingNextPage}
          />
        )}
      </div>
    </main>
  );
}