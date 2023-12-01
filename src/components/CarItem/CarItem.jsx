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
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { ModalInfo } from 'components/ModalInfo';

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
  const addressArray = address.split(',');

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <Item>
        <Image src={img} alt={make} />
        <TitleArea>
          <Title>
            {make}, {year}
          </Title>
          <Price>{rentalPrice}</Price>
        </TitleArea>

        <Characteristics>
          <CharacteristicsItem>{addressArray[1]}</CharacteristicsItem>
          <CharacteristicsItem>{addressArray[2]}</CharacteristicsItem>
          <CharacteristicsItem>{rentalCompany}</CharacteristicsItem>
          <CharacteristicsItem>{type}</CharacteristicsItem>
          <CharacteristicsItem>{model}</CharacteristicsItem>
          <CharacteristicsItem>{id}</CharacteristicsItem>
          <CharacteristicsItem>{functionalities[0]}</CharacteristicsItem>
        </Characteristics>
        <Button type="button" onClick={toggleModal}>
          Learn more
        </Button>
      </Item>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <ModalInfo
            toggleModal={toggleModal}
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
            city={addressArray[1]}
            country={addressArray[2]}
            rentalConditions={rentalConditions}
            mileage={mileage}
          />
        </Modal>
      )}
    </>
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
