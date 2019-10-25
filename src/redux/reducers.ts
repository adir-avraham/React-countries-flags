import Actions from './actions.config';

const initialState = {
    countries: [],
}


export default function root(state = initialState, action: any) {
    switch (action.type) {
        case Actions.GET_COUNTRIES_SUCCESS: {
            const { countries } = action.payload;
            return {
                ...state,
                countries
            }
        }
        default: {
            return state;
        }
    }
}