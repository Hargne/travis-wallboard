export const GenerateHeaders = (token) => ({
	headers: {
		'Travis-API-Version': 3,
		Authorization: (token) && `token ${token}`,
	},
});

export const APIErrorHandler = ({ apiError = {}, errorMessages = {} }) => {
	const { response } = apiError;
	if (response) {
		const { data, status } = response;
		return errorMessages[status] || data;
	}
	return 'Unknown error';
};
