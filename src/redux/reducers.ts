import Actions from './actions.config';

const imagesCountries: { [key: string]: any[] } = {};
const initialState = {
    countries: [],
    imagesCountries
}


export default function root(state = initialState, action: any) {
    console.log(action.type)
    switch (action.type) {
        case Actions.GET_COUNTRIES_SUCCESS: {
            const { countries } = action.payload;
            return {
                ...state,
                countries
            }
        }
        case Actions.ADD_IMAGE: {
            const { code, image } = action.payload
            const { imagesCountries } = state
            const isCodeExist = imagesCountries.hasOwnProperty(code);
            console.log(state)
            return {
                ...state,
                imagesCountries: {
                    ...imagesCountries,
                    [code]: isCodeExist ? [...imagesCountries[code], image] : [image]
                }
            }
        }
        default: {
            return state;
        }
    }
}