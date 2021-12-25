import React, { useContext } from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';
import sublinks from './data';

const Navbar = () => {
	const { setIsSidebarShow, openSubmenu, closeSubmenu } = useContext(AppContext);

	function handleMouseOver(event) {
		const page = event.target.textContent;
		const pageButton = event.target.getBoundingClientRect();
		const center = (pageButton.left + pageButton.right) / 2;
		const bottom = pageButton.bottom - 3;
		openSubmenu(page, { center, bottom });
	}

	function handleSubmenu(event) {
		if (!event.target.classList.contains('link-btn')) {
			closeSubmenu();
		}
	}

	return (
		<header className='nav' onMouseOver={handleSubmenu}>
			<nav className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='logo' />
					<button className='btn toggle-btn' onClick={() => setIsSidebarShow(true)}>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					{sublinks.map((obj) => {
						const { id, page } = obj;
						return (
							<li key={id}>
								<button className='link-btn' onMouseOver={handleMouseOver}>
									{page}
								</button>
							</li>
						);
					})}
				</ul>
				<button className='btn signin-btn'>Sign In</button>
			</nav>
		</header>
	);
};

export default Navbar;
