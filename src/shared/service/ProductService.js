import $api from "../api"

export const getProduct_Ids = () =>{
    return $api.post('https://api.valantis.store:41000/' , {
        action: "get_ids",
        params: { offset: 0, limit: 200 },
    });
}

export const getProducts =  (products_ids) =>{
    return $api.post('https://api.valantis.store:41000/' , {
        action: "get_items",
        params: { ids: products_ids },
    });
}

export const Filter =  (filterType , filterText) =>{
    return $api.post('https://api.valantis.store:41000/' , {
        action: "filter",
        params: {[filterType]: filterText}
    });
}

