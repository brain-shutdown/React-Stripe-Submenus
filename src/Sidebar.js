import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AppContext } from './context';

const Sidebar = () => {
	const { sublinks, isSidebarShow, setIsSidebarShow } = useContext(AppContext);
	return (
		<div className={`sidebar-wrapper ${isSidebarShow ? 'show' : ''}`}>
			<aside className='sidebar'>
				<button className='close-btn' onClick={() => setIsSidebarShow(false)}>
					<FaTimes />
				</button>
				<div className='sidebar-links'>
					{sublinks.map((obj) => {
						const { id, page, links } = obj;
						return (
							<article key={id}>
								<h4>{page}</h4>
								<div className='sidebar-sublinks'>
									{links.map((link) => {
										const { id, label, icon, url } = link;
										return (
											<a href={url} key={id}>
												{icon}
												{label}
											</a>
										);
									})}
								</div>
							</article>
						);
					})}
				</div>
			</aside>
		</div>
	);
};

export default Sidebar;
