import React from 'react';
import 'tachyons';

const ScrollLock = (props) => {
	return (
		<div style={{ overflowY: 'auto', border: '1px solid-black', width: 'auto', height: 'auto' }}>
			{props.children}
		</div>
	);
}
export default ScrollLock;