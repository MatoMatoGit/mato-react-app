import React from 'react'
import { Navbar } from 'react-bootstrap'

const BrandBar = () => {
	return (
		<Navbar bg="light" style={{ marginBottom: '1rem' }}>
			<Navbar.Brand href="/">
				<img
					alt=""
					src="images/matomato.svg"
					width="100"
					height="auto"
					className="d-inline-block align-top"
				/>
			</Navbar.Brand>
		</Navbar>
	)
}

export default BrandBar
