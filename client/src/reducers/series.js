export default (series=[],action)=>{

    switch (action.type) {

        case 'FETCH_ALL_SERIES':
            return action.payload; 
        case 'CREATE_SERIES':
            return [action.payload,...series]
        default:
            return series;
    }

}