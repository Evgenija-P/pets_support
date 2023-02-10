const media = {
  mobile: '@media(max-width: 766px)',
  mobileAndTablet: '@media(max-width: 1279px)',
  tablet: '@media(min-width: 767px) and (max-width: 1279px)',
  tabletAndDesktop: '@media(min-width: 767px)',
  desktop: '@media(min-width: 1280px)',
  desktopHeight: '@media(min-height: 788px)',
};

const colors = {
  accent: '#F59256',
  background: '#FDF7F2',
  accentButton: '#FF6101',
  black: '#111111',
  newsText: '#111321',
  maleColor: '#23C2EF',
  femaleColor: '#FF8787',
  blue: '#3091EB',
  white: '#FFFFFF',
  gray: 'rgba(17, 17, 17, 0.6)',
  gradient: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
  shadow: 'rgba(49, 21, 4, 0.07)',
};

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const optionsToast = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export { media, colors, fontWeights, optionsToast };
