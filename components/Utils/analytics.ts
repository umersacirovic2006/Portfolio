import ReactGA from 'react-ga';

export const initGA = () => {
  console.log("Credits to ADENEKAN WONDERFUL. Amazing website. :-) https://www.codewonders.dev");
  ReactGA.initialize('UA-128989337-1');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
