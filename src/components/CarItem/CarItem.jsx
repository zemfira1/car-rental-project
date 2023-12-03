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
  HeartIcon,
} from './CarItem.styled';
import { useEffect, useState } from 'react';
import { Modal } from 'components/Modal';
import { ModalInfo } from 'components/ModalInfo';
import sprite from '../../assets/images/symbol-defs.svg';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';

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
  const [activeHeart, setActiveHeart] = useState(false);
  const cars = useSelector(selectCars);
  const [listOfFavorite, setListOfFavorite] = useState(
    JSON.parse(localStorage.getItem('favoriteCars')) || []
  );

  useEffect(() => {
    localStorage.setItem('favoriteCars', JSON.stringify(listOfFavorite));
  }, [listOfFavorite]);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const toggleActiveHeart = () => {
    setActiveHeart(prevState => !prevState);
    const selectId = id;
    const selectItemById = cars.filter(car => car.id === selectId);

    const index = listOfFavorite.findIndex(car => car.id === selectItemById.id);

    if (index < 0) {
      setListOfFavorite([...selectItemById]);
    }

    if (index >= 0) {
      const newList = listOfFavorite.splice(index, 1);
      setListOfFavorite(newList);
    }
  };

  return (
    <>
      <Item>
        <HeartIcon
          width={16}
          height={14}
          onClick={toggleActiveHeart}
          active={activeHeart ? 'true' : 'false'}
        >
          <use href={sprite + '#heart'}></use>
        </HeartIcon>
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
