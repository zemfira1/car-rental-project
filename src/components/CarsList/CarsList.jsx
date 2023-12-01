import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import { fetchCarsList } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectError, selectIsLoading } from 'redux/selectors';
import { CarItem } from 'components/CarItem';
import { AllCarsList } from './CarsList.styled';

export const CarsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCarsList());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {cars.length > 0 && (
        <AllCarsList>
          {cars.map(
            ({
              id,
              year,
              make,
              model,
              type,
              img,
              description,
              fuelConsumption,
              engineSize,
              accessories,
              functionalities,
              rentalPrice,
              rentalCompany,
              address,
              rentalConditions,
              mileage,
            }) => (
              <CarItem
                key={id}
                id={id}
                year={year}
                make={make}
                model={model}
                type={type}
                img={img}
                description={description}
                fuelConsumption={fuelConsumption}
                engineSize={engineSize}
                accessories={accessories}
                functionalities={functionalities}
                rentalPrice={rentalPrice}
                rentalCompany={rentalCompany}
                address={address}
                rentalConditions={rentalConditions}
                mileage={mileage}
              />
            )
          )}
        </AllCarsList>
      )}
      {error && alert('Sorry, something is wrong!')}
    </>
  );
};
