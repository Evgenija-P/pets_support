import { useState, useLayoutEffect } from "react";

const queries = [
	'(max-width: 766px)',
	'(min-width: 767px) and (max-width: 1279px)',
	'(min-width: 1280px)',
];
const useMatchMedia = () => { 
	const mediaQueryLists = queries.map(query => matchMedia(query));
	const getValues = () => mediaQueryLists.map(mql => mql.matches);
	const [values, setValues] = useState(getValues);

	useLayoutEffect(() => {
		const handler = () => setValues(getValues);
		mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));

		return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));


	});

	return ['isMobile', 'isTablet', 'isDesktop'].reduce((acc, screen, index) => ({
		...acc,
		[screen]: values[index],
	 }), {});
};

export default useMatchMedia;