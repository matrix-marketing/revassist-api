import { feedback } from './index.js';

try {
	const apiKey = '961115df6d66f4a870a640b03a35017cc1040e8569f8c4476334b43fb70b928e'; // change this to your own API key
	const result = await feedback(apiKey, 2269, 5, 'test');
	console.log(result.success);
}
catch (ex) {
	console.error(ex);
}