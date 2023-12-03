import { FavoriteCarsItem } from 'components/FavoriteCarsItem';
import { List } from './FavoriteCarsList.styled';
import { nanoid } from 'nanoid';

export const FavoriteCars = ({ arrayOfFavoriteCars }) => {
  return (
    <>
      {arrayOfFavoriteCars.length > 0 && (
        <List>
          {arrayOfFavoriteCars.map(
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
              <FavoriteCarsItem
                key={nanoid()}
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
        </List>
      )}
    </>
  );
};
