import { Container } from 'components/Container';
import { HomePage, TitleArea, Title } from './Home.styled';

const Home = () => {
  return (
    <HomePage>
      <Container>
        <TitleArea>
          <Title>Premium car rental</Title>
        </TitleArea>
      </Container>
    </HomePage>
  );
};

export default Home;
