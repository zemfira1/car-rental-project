import { Container } from 'components/Container';
import { HeaderArea, NavigationItem, NavigationList } from './Header.styled';

export const Header = () => {
  return (
    <HeaderArea>
      <Container>
        <NavigationList>
          <NavigationItem to="/">Home</NavigationItem>
          <NavigationItem to="/catalog">Catalog</NavigationItem>
          <NavigationItem to="/favorites">Favorite</NavigationItem>
        </NavigationList>
      </Container>
    </HeaderArea>
  );
};
