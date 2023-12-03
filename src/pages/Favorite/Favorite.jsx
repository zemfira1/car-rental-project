import { Container } from 'components/Container';
import { FavoriteCarsList } from 'components/FavoriteCarsList';
import { NoCars } from 'components/NoCars';
import { FavoritePage } from './Favorite.styled';

const Favorite = () => {
  const arrayOfFavoriteCars = JSON.parse(localStorage.getItem('favoriteCars'));

  return (
    <Container>
      {arrayOfFavoriteCars && arrayOfFavoriteCars.length > 0 ? (
        <FavoritePage>
          <FavoriteCarsList arrayOfFavoriteCars={arrayOfFavoriteCars} />
        </FavoritePage>
      ) : (
        <NoCars />
      )}
    </Container>
  );
};

export default Favorite;
