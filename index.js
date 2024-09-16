import callApi from 'webdigital-api';

/**
 * calls RevAssist API
 */
const callRevAssist = async (apiKey, apiName, args, streamCallback) => {
	const url = 'https://revassist.ai';
	return callApi({ url, apiName, args: [ apiKey, ...args ], streamCallback });
};

/**
 * calls RevAssist query API
 */
const query = async (apiKey, query, streamCallback) => {
	const result = await callRevAssist(apiKey, 'queryPublic', [ query ], streamCallback);
	return { queryId: result.queryId, refs: result.refs, html: result.response };
};

/**
 * calls RevAssist feedback API
 */
const feedback = (apiKey, queryId, stars, comments) => callRevAssist(apiKey, 'feedbackPublic', [ queryId, stars, comments ]);

// export method to call RevAssist API
export { query, feedback };