import { Container } from 'components/Container';
import { FavoriteCars } from 'components/FavoriteCarsList';
import { NoCars } from 'components/NoCars';
import { FavoritePage } from './Favorite.styled';

const Favorite = () => {
  const arrayOfFavoriteCars = JSON.parse(localStorage.getItem('favoriteCars'));

  return (
    <Container>
      {arrayOfFavoriteCars && arrayOfFavoriteCars.length > 0 ? (
        <FavoritePage>
          <FavoriteCars arrayOfFavoriteCars={arrayOfFavoriteCars} />
        </FavoritePage>
      ) : (
        <NoCars />
      )}
    </Container>
  );
};

export default Favorite;
