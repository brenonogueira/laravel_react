import React, { useEffect } from 'react'
import { Link } from '@inertiajs/inertia-react'
import NavbarDefault from '../components/NavbarDefault'
import { Container } from 'react-bootstrap'

export default function Layout({ children }) {
	return (
		<main>
			<header>
				<NavbarDefault />
			</header>
			<Container className='mt-2'>{children}</Container>
		</main>
	)
}