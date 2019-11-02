import Actions from './actions.config';
import {getCountriesService} from './service';

export const getCountriesSuccessAction = (countries: any) => {
    return {
        type: Actions.GET_COUNTRIES_SUCCESS,
        payload: { countries }
    }
}

export const getCountries = () => {
    return async (dispatch: any) => {
        try {
            const countries = await getCountriesService();
            dispatch(getCountriesSuccessAction(countries))
        } catch(err) {}       
    }
}


export const addImageAction = (payload: any) => {
    return {
        type: Actions.ADD_IMAGE,
        payload
    }
}
