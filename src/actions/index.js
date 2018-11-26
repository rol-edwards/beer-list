

export const add2Cart = name => ({
    type: 'ADD_TO_CART',
    name: name
})

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: items
    };
}

export function getBeers(ids) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch('https://api.punkapi.com/v2/beers?ids=' + ids)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(itemsIsLoading(false));
            return response;
        })
        .then((response) => response.json())
        .then((items) => dispatch(itemsFetchDataSuccess(items)))
        .catch(() => dispatch(itemsHasErrored(true)));
    };
}

