export default (categories=[],action)=>{

    switch (action.type) {

        case 'FETCH_ALL_CATEGORIES':
            return action.payload; 
        case 'CREATE_CATEGORIES':
            return [action.payload,...categories,]
        default:
            return categories;
    }

}