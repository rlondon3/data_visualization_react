import React, { useReducer } from 'react';
import { GET_EMPLOYEE_DATA } from './types';
import employeeReducer from './employeeReducer';
import EmployeeContext from './employeeContext';
import Papa from 'papaparse';
import EmployeeData from '../Data/Employee.csv';

// Define a React functional component named EmployeeState
const EmployeeState = (props) => {
	// Define the initial state for the employee data
	const initialState = {
		list: [],
	};

	// Use the useReducer hook to manage state with the employeeReducer and initial state
	const [state, dispatch] = useReducer(employeeReducer, initialState);

	// Define a function to fetch employee data from a CSV file
	const fetchEmployeeData = async () => {
		try {
			// Fetch CSV data from the specified path
			const response = await fetch(EmployeeData);
			const csvText = await response.text();
			// Parse the CSV data using PapaParse
			Papa.parse(csvText, {
				header: true, // Treat the first row as headers
				dynamicTyping: true, // Dynamically typecast values based on content
				complete: (result) => {
					// Dispatch the GET_EMPLOYEE_DATA action with the parsed data to update the state
					dispatch({
						type: GET_EMPLOYEE_DATA,
						payload: result.data,
					});
				},
				error: (error) => {
					console.error('Error parsing CSV data:', error);
				},
			});
		} catch (error) {
			console.error('Error fetching employee data:', error);
		}
	};

	// Make the fetchEmployeeData function and the employee state available in the context
	const contextValue = {
		employeeState: state,
		fetchEmployeeData,
	};

	// Wrap the component's children with the EmployeeContext.Provider
	return (
		<EmployeeContext.Provider value={contextValue}>
			{props.children}
		</EmployeeContext.Provider>
	);
};

// Export the EmployeeState component as the default export
export default EmployeeState;
