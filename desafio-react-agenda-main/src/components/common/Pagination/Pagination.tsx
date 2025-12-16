import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Pagination.module.css';
import { PaginationProps } from '../../../interfaces/common';

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.navButton}
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </button>

      <span className={styles.pageNumber}>{currentPage}</span>

      <button
        className={styles.navButton}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
