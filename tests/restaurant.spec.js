const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const menu = createMenu();
    expect(menu).toHaveProperty('fetchMenu');
    expect(typeof menu.fetchMenu).toBe('function');
    const objMenu = createMenu({ food: {}, drinks: {} }).fetchMenu();
    const keysMenu = ['food', 'drinks'];
    expect(Object.keys(objMenu)).toEqual(keysMenu);
    const newMenu = { food:{}, drinks:{} };
    const compMenu = createMenu(newMenu).fetchMenu();
    expect(compMenu).toEqual(newMenu);
    expect(objMenu.consumption).toBeUndefined();
    const mainMenu = createMenu({food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90}});
      expect(mainMenu.order('pizza')).toEqual(['pizza']);
      expect(mainMenu.order('coke')).toEqual(['pizza', 'coke']);
      
  });
});
