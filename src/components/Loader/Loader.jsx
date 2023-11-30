import { Oval } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { LoaderPosition } from './Loader.styled';
import { Container } from 'components/Container';

export const Loader = () => {
  return (
    <Container>
      <LoaderPosition>
        <Oval
          height={50}
          width={50}
          color="#3470FF"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#3470FF"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </LoaderPosition>
    </Container>
  );
};

Loader.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  wrapperStyle: PropTypes.object,
  wrapperClass: PropTypes.string,
  visible: PropTypes.bool,
  ariaLabel: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  strokeWidthSecondary: PropTypes.number,
};
