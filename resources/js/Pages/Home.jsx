// import { Link } from '@inertiajs/inertia-react';
import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import { Button } from 'react-bootstrap';

function Home() {
	return (
		<>
			<h1>Olá mundo</h1>
			<Link href='/posts'>
				<Button variant="outline-primary">Primary</Button>{' '}
			</Link>
		</>
	)
}

export default Home;