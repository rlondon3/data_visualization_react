import React from 'react';
import EmployeeState from './ContextAPI/employeeState';
import EmployeeDataViewer from './DataViewer/dataViewer';
import './App.css';

function App() {
	return (
		<EmployeeState>
			{/* Now, the EmployeeState context is available for all components inside */}
			<div className='App'>
				<EmployeeDataViewer />
				{/* Add other components that depend on employee data */}
			</div>
		</EmployeeState>
	);
}

export default App;
