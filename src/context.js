import React, { useState } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

function AppProvider({ children }) {
	const [isSidebarShow, setIsSidebarShow] = useState(false);
	const [isSubmenuShow, setIsSubmenuShow] = useState(false);
	const [location, setlocation] = useState({});
	const [page, setPage] = useState({ page: '', links: [] });

	function openSubmenu(pageName, coordinates) {
		const page = sublinks.find((obj) => obj.page === pageName);
		setIsSubmenuShow(true);
		setPage(page);
		setlocation(coordinates);
	}
	function closeSubmenu() {
		setIsSubmenuShow(false);
	}

	return <AppContext.Provider value={{ sublinks, isSidebarShow, isSubmenuShow, setIsSidebarShow, openSubmenu, closeSubmenu, location, page }}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
