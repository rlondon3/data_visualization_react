import { GET_EMPLOYEE_DATA } from './types';

const employeeReducer = (state, action) => {
	switch (action.type) {
		case GET_EMPLOYEE_DATA:
			return {
				...state,
				list: action.payload,
			};
		default:
			return state;
	}
};

export default employeeReducer;
