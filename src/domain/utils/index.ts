interface PaginationProps {
  page: number;
  count: number;
  amount: number;
}

export const getPagination = ({ page, count, amount }: PaginationProps) => {
  return {
    page,
    totalItems: count,
    totalPages: Math.ceil(count % amount),
  };
};
