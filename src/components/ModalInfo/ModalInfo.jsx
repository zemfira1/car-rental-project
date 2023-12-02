import {
  ClouseButton,
  SvgClouse,
  ModalInfoArea,
  Image,
  Title,
  Model,
  Button,
  CharacteristicsArea,
  Characteristics,
  CharacteristicsItem,
  Description,
  SubTitle,
  RentalConditionsArea,
  RentalConditionsRow,
  RentalConditionsItem,
  Accent,
} from './ModalInfo.styled';
import sprite from '../../assets/images/symbol-defs.svg';

export const ModalInfo = ({
  toggleModal,
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
  city,
  country,
  rentalConditions,
  mileage,
}) => {
  const rentalConditionsArray = rentalConditions.split('\n');
  const ageArray = rentalConditionsArray[0].split(':');

  const stringMileage = mileage.toString();
  const mileageArray = stringMileage.split('');
  mileageArray.splice(stringMileage.length - 3, 0, ',');
  const correctMileage = mileageArray.join('');

  return (
    <ModalInfoArea>
      <ClouseButton onClick={() => toggleModal()}>
        <SvgClouse width={20} height={20}>
          <use href={sprite + '#icon-x'}></use>
        </SvgClouse>
      </ClouseButton>
      <Image src={img} alt={make} />
      <Title>
        {make} <Model>{model}</Model>, {year}
      </Title>
      <CharacteristicsArea>
        <Characteristics>
          <CharacteristicsItem>{city}</CharacteristicsItem>
          <CharacteristicsItem>{country}</CharacteristicsItem>
          <CharacteristicsItem>Id: {id}</CharacteristicsItem>
          <CharacteristicsItem>Year: {year}</CharacteristicsItem>
          <CharacteristicsItem>Type: {type}</CharacteristicsItem>
        </Characteristics>
        <Characteristics>
          <CharacteristicsItem>
            Fuel Consumption: {fuelConsumption}
          </CharacteristicsItem>
          <CharacteristicsItem>Engine Size: {engineSize}</CharacteristicsItem>
        </Characteristics>
      </CharacteristicsArea>
      <Description>{description}</Description>
      <SubTitle>Accessories and functionalities:</SubTitle>
      <CharacteristicsArea>
        <Characteristics>
          <CharacteristicsItem>{accessories[0]}</CharacteristicsItem>
          <CharacteristicsItem>{accessories[1]}</CharacteristicsItem>
          <CharacteristicsItem>{accessories[2]}</CharacteristicsItem>
        </Characteristics>
        <Characteristics>
          <CharacteristicsItem>{functionalities[0]}</CharacteristicsItem>
          <CharacteristicsItem>{functionalities[1]}</CharacteristicsItem>
          <CharacteristicsItem>{functionalities[2]}</CharacteristicsItem>
        </Characteristics>
      </CharacteristicsArea>
      <SubTitle>Rental Conditions: </SubTitle>
      <RentalConditionsArea>
        <RentalConditionsRow>
          <RentalConditionsItem>
            {ageArray[0]}: <Accent>{ageArray[1]}</Accent>
          </RentalConditionsItem>
          <RentalConditionsItem>
            {rentalConditionsArray[1]}
          </RentalConditionsItem>
        </RentalConditionsRow>
        <RentalConditionsRow>
          <RentalConditionsItem>
            {rentalConditionsArray[2]}
          </RentalConditionsItem>
          <RentalConditionsItem>
            Mileage: <Accent>{correctMileage}</Accent>
          </RentalConditionsItem>
          <RentalConditionsItem>
            Price: <Accent>{rentalPrice}</Accent>
          </RentalConditionsItem>
        </RentalConditionsRow>
      </RentalConditionsArea>
      <Button type="button">Rental car</Button>
    </ModalInfoArea>
  );
};
