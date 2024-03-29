import { CarsList } from 'components/CarsList';
import { Container } from 'components/Container';
import { useEffect, useState } from 'react';
import { fetchCarsList } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectError, selectIsLoading } from 'redux/selectors';
import { CatalogPage, ButtonArea, Button } from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectCars);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(
      fetchCarsList({
        completed: false,
        page: currentPage,
        limit: 12,
      })
    );
  }, [dispatch, currentPage]);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      {cars && (
        <CatalogPage>
          <CarsList cars={cars} isLoading={isLoading} error={error} />
          <ButtonArea>
            <Button onClick={loadMore}>Load more</Button>
          </ButtonArea>
        </CatalogPage>
      )}
    </Container>
  );
};

export default Catalog;
