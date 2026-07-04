'use client';

import { useState } from 'react';
import Filters from '@/components/Filters/Filters';
import CamperList from '@/components/CamperList/CamperList';
import LoadMoreButton from '@/components/LoadMoreButton/LoadMoreButton';
import Loader from '@/components/Loader/Loader';
import NoCampers from '@/components/NoCampers/NoCampers';
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
  const [activeFilters, setActiveFilters] = useState({
    location: '',
    form: '',
    engine: '',
    transmission: '',
  });

  if (isPending) return <Loader />;
  if (isError) return <h2>Something went wrong...</h2>;

  const allCampers = data.pages.flatMap((page) => page.campers);

  const filteredCampers = allCampers.filter((camper) => {
    if (
      activeFilters.location &&
      !camper.location.toLowerCase().includes(activeFilters.location.toLowerCase())
    ) {
      return false;
    }
    if (activeFilters.form && camper.form !== activeFilters.form) {
      return false;
    }
    if (activeFilters.engine && camper.engine !== activeFilters.engine) {
      return false;
    }
    if (activeFilters.transmission && camper.transmission !== activeFilters.transmission) {
      return false;
    }
    return true;
  });

  const handleSearch = (newFilters: typeof activeFilters) => {
    setActiveFilters(newFilters);
  };

  return (
    <main className={styles.main}>
      <Filters onSearch={handleSearch} />

      <div className={styles.content}>
        {filteredCampers.length === 0 ? (
          <NoCampers 
            onClearFilters={() => handleSearch({ location: '', form: '', engine: '', transmission: '' })} 
            onViewAll={() => handleSearch({ location: '', form: '', engine: '', transmission: '' })} 
          />
        ) : (
          <>

            <CamperList campers={filteredCampers} />

            {hasNextPage && (
              <LoadMoreButton
                onClick={() => fetchNextPage()}
                loading={isFetchingNextPage}
              />
            )}
          </>
        )}
      </div>
    </main>
  );
}