import React, { useState, useRef, useEffect, useContext } from 'react';
import { AppContext } from './context';

const Submenu = () => {
	const {
		isSubmenuShow,
		page: { page, links },
		location,
	} = useContext(AppContext);
	const containerRef = useRef(null);
	const [columns, setColumns] = useState(null);

	useEffect(() => {
		const submenu = containerRef.current;
		const { center, bottom } = location;
		submenu.style.left = `${center}px`;
		submenu.style.top = `${bottom}px`;
		if (links.length > 1 || links.length < 5) {
			setColumns(`col-${links.length}`);
		} else {
			setColumns(null);
		}
	}, [location, links]);

	return (
		<aside className={`submenu ${isSubmenuShow ? 'show' : ''}`} ref={containerRef}>
			<section>
				<h4>{page}</h4>
				<div className={`submenu-center ${columns && columns}`}>
					{links.map((link) => {
						const { id, label, icon, url } = link;
						return (
							<a key={id} href={url}>
								{icon}
								{label}
							</a>
						);
					})}
				</div>
			</section>
		</aside>
	);
};

export default Submenu;
