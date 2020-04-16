import React, { useState } from 'react';
import {
	NameWrap,
	ContentWrap,
	Input,
} from './styles';

function HomePage() {
	const [ name, setName ] = useState('React Enthusiasts');
	return (
		<React.Fragment>
			<ContentWrap>
				Created with Love by &nbsp;
				<span><b>VIMAL RADHAKRISHNAN</b></span><br/>
				for <br/>
			</ContentWrap>
			<NameWrap>{name}</NameWrap>
			<Input value={name} onChange={() => setName(event.target.value)} placeholder='Your Lovely Name' />
		</React.Fragment>
	);
}

export default HomePage;