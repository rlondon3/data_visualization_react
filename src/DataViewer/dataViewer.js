import React, { useContext, useEffect } from 'react';
import EmployeeContext from '../ContextAPI/employeeContext';

const EmployeeDataViewer = () => {
	const { employeeState, fetchEmployeeData } = useContext(EmployeeContext);

	useEffect(() => {
		// Fetch employee data when the component mounts
		fetchEmployeeData();
	}, [fetchEmployeeData]);

	return (
		<div>
			<h2>Employee Data:</h2>
			<pre>{JSON.stringify(employeeState.list, null, 2)}</pre>
		</div>
	);
};

export default EmployeeDataViewer;
