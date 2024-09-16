import { query } from './index.js';

try {
	const apiKey = '961115df6d66f4a870a640b03a35017cc1040e8569f8c4476334b43fb70b928e'; // change this to your own API key
	const question = 'How long do I have to submit a reconsideration and appeal for United Healthcare Managed Medicaid';
	const startTime = Date.now();
	let ttfb = null; // time to first byte - set with stream callback
	const streamCallback = () => ttfb ? null : ttfb = Date.now() - startTime;
	const { queryId, refs, html } = await query(apiKey, question, streamCallback);
	const totalTime = Date.now() - startTime;
	console.log(ttfb, totalTime, queryId, refs, html);
}
catch (ex) {
	console.error(ex);
}