import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

function Hook() {
	const [count, setCount] = useState(0);
	const [count1, setCount1] = useState(0);

	useEffect(() => {
		alert('you are clicked');
	}, [count1]);

	return (
		<>
			<Button onClick={() => setCount(count + 1)}>click me {count} </Button>
			<br />
			<Button onClick={() => setCount1(count1 + 1)}>click me {count1} </Button>
		</>
	);
}

export default Hook;
