const ADD_DATA = 'ADD_DATA';
const SELECT_DATA = 'SELECT_DATA';
// Actions
const addAction = (text) => ({
    type: ADD_DATA ,
    payload:text
});



let data={
    addAction,
    TYPES:{ADD_DATA,SELECT_DATA}
}
export default data;