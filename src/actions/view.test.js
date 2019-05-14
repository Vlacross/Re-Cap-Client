import { SET_ISMOBILE, TOGGLE_MENU, SET_DOUBLECHECK, TOGGLE_APP_INFO, 
  setIsMobile, toggleMenu, doubleCheck, toggleAppInfo } from './view';

   describe('SET_ISMOBILE', () => {
    it('should return the action', () => {
      let action = setIsMobile();
  
    expect(action.type).toEqual(SET_ISMOBILE)
    });
  });

  describe('TOGGLE_MENU', () => {
    it('should return the action', () => {
      let action = toggleMenu();
  
    expect(action.type).toEqual(TOGGLE_MENU)
    });
  });

  describe('SET_DOUBLECHECK', () => {
    it('should return the action', () => {
      let checkingFor = "checkingFor"
      let action = doubleCheck(checkingFor);
  
    expect(action.type).toEqual(SET_DOUBLECHECK)
    });
  });

  describe('TOGGLE_APP_INFO', () => {
    it('should return the action', () => {
      let action = toggleAppInfo();
  
    expect(action.type).toEqual(TOGGLE_APP_INFO)
    });
  });

