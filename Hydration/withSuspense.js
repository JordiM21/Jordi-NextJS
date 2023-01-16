import React from "react";

const withSuspense = (WrappedComponent) => {
	return (props) => {
		return (
			<React.Suspense fallback={<div>Loading...</div>}>
				<WrappedComponent {...props} />
			</React.Suspense>
		);
	};
};

export default withSuspense;
