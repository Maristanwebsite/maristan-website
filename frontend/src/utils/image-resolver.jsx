export const imageResolver = (source) => {
	const path =
		'https://maristan-backend.onrender.com' + source?.data?.attributes?.url;
	const width = source?.data?.attributes?.width;
	const height = source?.data?.attributes?.height;
	const alt = source?.data?.attributes?.alternativeText;
	return { path, width, height, alt };
};
