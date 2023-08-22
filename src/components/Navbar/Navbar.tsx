import { Toolbar } from '@mui/material';
import { NavBar } from './Navbar.styles';

const Navbar = (): JSX.Element => {
	return (
		<NavBar position="static">
			<Toolbar style={{ justifyContent: 'center', borderColor: 'red' }}>
				<div>oi</div>
			</Toolbar>
		</NavBar>
	);
};

export default Navbar;
