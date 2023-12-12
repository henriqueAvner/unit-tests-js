
const createMenu = (object) => {
    let newObject = {
        fetchMenu: () => object,
        consumption: [],
    };
    return newObject;
};

module.exports = createMenu;
