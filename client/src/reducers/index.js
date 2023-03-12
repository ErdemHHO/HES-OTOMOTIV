import {combineReducers} from 'redux'
import categories from './categories.js'
import series from './series.js'
import cars from './cars.js'


export default combineReducers({
    categories,series,cars
})