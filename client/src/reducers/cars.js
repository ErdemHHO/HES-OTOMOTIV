export default (cars=[],action)=>{

    switch (action.type) {

        case 'FETCH_ALL_CARS':
            return action.payload; 
        case 'CREATE_CARS':
            return [action.payload,...cars]
        default:
            return cars;
    }

}