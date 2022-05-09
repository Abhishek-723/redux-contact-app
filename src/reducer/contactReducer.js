const initialState = [
    {
        id: 1,
        name: "Abhishek Pradhan",
        email: "abhi@gmail.com",
        number: "999999999"
    },
    {
        id: 2,
        name: "Test Name",
        email: "test@gmail.com",
        number: "1234567891"
    }
]

const contactReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CONTACT": 
            state = [...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
            // console.log(action.payload);
            const updateState = state.map(contact => contact.id === parseInt(action.payload.id) ? action.payload : contact);
            // console.log(updateState);
            state = updateState;
            return state;
        case "DELETE_CONTACT": 
            const filterContacts = state.map(contact => contact.id !== action.payload && contact);
            state = filterContacts;
            return state;
        default:
            return state;
    }
};
export default contactReducer