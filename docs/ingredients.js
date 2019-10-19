//http://localhost:3000/api/ingredient
export const GET_FULL_INGREDIENT = 'GET_FULL_INGREDIENT';

//http://localhost:3000/api/ingredient?filter[where][id]=5abc4edf66c784507b0d8cbd
export const INGREDIENT_FILTER_ID = 'INGREDIENT_FILTER_ID';

//http://localhost:3000/api/ingredient?filter[where][name]=potatoes
export const INGREDIENT_FILTER_NAME = 'INGREDIENT_FILTER_NAME';

//http://localhost:3000/api/ingredient?filter[where][and][][name][like]=oil&filter[where][and][][departmentId]=5abc4edc66c784507b0d8c5b
export const INGREDIENT_FILTER_AND_NAME_OIL_FILTER_AND_DEPARTMENTID = 'INGREDIENT_FILTER_AND_NAME_OIL_FILTER_AND_DEPARTMENTID';

//http://localhost:3000/api/ingredient?filter[where][and][][name][inq]=chicken&filter[where][and][][name][inq]=pasta
export const INGREDIENT_FILTER_AND_NAME_CHICKEN_FILTER_AND_NAME = 'INGREDIENT_FILTER_AND_NAME_CHICKEN_FILTER_AND_NAME';

//http://localhost:3000/api/ingredient?filter[where][name][like]=oil
export const INGREDIENT_FILTER_NAME_LIKE_OIL = 'INGREDIENT_FILTER_NAME_LIKE_OIL';