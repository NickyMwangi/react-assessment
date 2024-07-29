import { useState } from 'react';

export const usePagination = (initialSize = 10) => {
  const [pagination, setPagination] = useState({
    pageSize: initialSize,
    pageIndex: 1
  });
  const { pageSize, pageIndex } = pagination;
  return {
    onPaginationChange: setPagination,
    pageSize,
    pageIndex,
    pagination
  };
};
