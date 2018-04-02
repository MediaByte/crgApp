import React from 'react';
import 'tachyons';

const ScrollLock = (props) => {
	return (
		<div style={{ overflowY: 'scroll', border: '1px solid-black', height: '520px' }}>
			{props.children}
		</div>
	);
}
export default ScrollLock;