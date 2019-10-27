import Actions from './actions.config';

const initialState = {
    countries: [],
    images: []
}


export default function root(state = initialState, action: any) {
    console.log(action)
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
            const {country, imgUrl} = image
            const { images } = state
            console.log(state)
            return {
                ...state,
                images: [...images, {country, imgUrl}] 
            }
        }
        default: {
            return state;
        }
    }
}