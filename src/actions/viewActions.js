export const SET_ISMOBILE = 'SET_ISMOBILE';
export const setIsMobile = (isMobile) => ({
  type: SET_ISMOBILE,
  isMobile: isMobile
})


export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = () => ({
  type: TOGGLE_MENU
})


export const SET_DOUBLECHECK = 'SET_DOUBLECHECK';
export const doubleCheck = checkingFor => ({
  type: SET_DOUBLECHECK,
  checkingFor
})
