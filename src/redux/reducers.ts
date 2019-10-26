import Actions from './actions.config';

const initialState = {
    countries: [],
    imgUrls: []
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
        case Actions.ADD_IMAGE: {
            const { image } = action.payload
            const { imgUrls } = state
            return {
                ...state,
                imgUrls: [...imgUrls, {image}]
            }
        }
        default: {
            return state;
        }
    }
}