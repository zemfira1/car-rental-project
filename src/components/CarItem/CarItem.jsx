import PropTypes from 'prop-types';
import {
  Item,
  Image,
  TitleArea,
  Title,
  Price,
  Button,
  Characteristics,
  CharacteristicsItem,
} from './CarItem.styled';

export const CarItem = ({
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
}) => {
  const addres = address;
  const addressLength = addres.length;
  const indexOfFerstComma = addres.indexOf(',');
  const cityCountry = addres.slice(indexOfFerstComma + 2, addressLength - 1);
  const cityCountryLength = cityCountry.length;
  const indexOfSecondComma = cityCountry.indexOf(',');
  const city = cityCountry.slice(0, indexOfSecondComma);
  const country = cityCountry.slice(indexOfSecondComma + 2, cityCountryLength);
  //   console.log(city);
  //   console.log(country);

  return (
    <Item>
      <Image src={img} alt={make} />
      <TitleArea>
        <Title>
          {make}, {year}
        </Title>
        <Price>{rentalPrice}</Price>
      </TitleArea>

      <Characteristics>
        <CharacteristicsItem>{city}</CharacteristicsItem>
        <CharacteristicsItem>{country}</CharacteristicsItem>
        <CharacteristicsItem>{rentalCompany}</CharacteristicsItem>
        <CharacteristicsItem>{type}</CharacteristicsItem>
        <CharacteristicsItem>{model}</CharacteristicsItem>
        <CharacteristicsItem>{id}</CharacteristicsItem>
        <CharacteristicsItem>{functionalities[0]}</CharacteristicsItem>
      </Characteristics>
      <Button type="button">Learn more</Button>
    </Item>
  );
};

CarItem.propTypes = {
  id: PropTypes.number,
  year: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string,
  type: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  fuelConsumption: PropTypes.string,
  engineSize: PropTypes.string,
  accessories: PropTypes.array,
  functionalities: PropTypes.array,
  rentalPrice: PropTypes.string,
  rentalCompany: PropTypes.string,
  address: PropTypes.string,
  rentalConditions: PropTypes.string,
  mileage: PropTypes.number,
};
