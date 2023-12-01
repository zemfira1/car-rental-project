export const theme = Object.freeze({
  colors: {
    blue: '#3470FF',
    activeBlue: '#0B44CD',
    black: '#121417',
    lightBlack: '#363535',
    white: '#FFFFFF',
    darkWhite: '#F9F9F9',
    grey: '#8A8A89',
    transparencyGrey50: 'rgba(18, 20, 23, 0.5)',
    transparencyGrey20: 'rgba(18, 20, 23, 0.2)',
    transparencyGrey10: 'rgba(18, 20, 23, 0.1)',
    background: 'rgba(225, 225, 225, 0.8)',
    inputBackground: '#F7F7FB',
    scrollBackground: 'rgba(18, 20, 23, 0.05)',
  },
  fontSizes: {
    small: '12px',
    regular: '14px',
    medium: '16px',
    large: '18px',
    xl: '26px',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  spacing: value => `${4 * value}px`,
});
