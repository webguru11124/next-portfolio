import common from './common';

const lightTheme = {
  ...common,
  bg: {
    default: '#FFFFFF',
    defaultLight: '#F2F2F2',
    reverse: '#0A1A2F',
  },
  text: {
    default: '#0A1A2F',
    reverse: '#FFFFFF',
    accent: '#777777',
  },
  shadows: {
    default: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
    small: '0 5px 10px rgba(0, 0, 0, 0.12)',
    medium: '0 8px 30px rgba(0,0,0, 0.12)',
    large: '0 30px 60px rgba(0, 0, 0, 0.12) ',
  },
};

export default lightTheme;
