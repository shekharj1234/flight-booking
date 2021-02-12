const initialState = {
    listResponse: {},
}

const flightReducers = (state=initialState, { type = '', payLoad={} }) => {
    switch(type){
        case 'FLIGHT_LIST':
            return{
                ...state,
            listResponse: payLoad
            };
        case 'ERROR_IN_FLIGHT_LIST':
            return{
                ...state,
                listResponse: payLoad
            }
        default: 
        return state;
    }
}

export default flightReducers;