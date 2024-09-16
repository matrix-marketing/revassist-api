# RevAssist API

This package is used to call RevAssist API. 
You can use RevAssist UI to have your users login and send their queries. 
If you already have a UI for your users, you can use this API to integrate 
RevAssist with your systems. Contact RevAssist to get your API key. 
You can install RevAssistAPI with:  

```
npm install revassist-api
```

The package is isomorphic, meaning you can use it with browser JS and node.js both.
The package is an ESM package. Import it like this: 

```
import { query, feedback } from 'revassist-api';
```

## Query Function

You can use query function as follows: 

```
try { 
    const { queryId, refs, html } = await query(apiKey, question, streamCallback);
}
catch (ex) {
    console.error(ex); 
}
```

Response is a JSON object that includes queryId, refs (references array) and html, 
which is the HTML response to the query.

Refs can be web links or document links. Web links are in { webLink, webName } format. 
Display webName for the link if given. Otherwise, just show the URL. Document links are 
in { docId, documentName, pages } format. Pages is optional. If it is there, it will be an 
array of integer numbers. You can use these to build links to the documents. For the URL, use
https://revassist.ai/documents/<docId>. You can include optional page reference like
https://revassist.ai/documents/19#page=2 Use the documentName and page numbers for the link name.

streamCallback is optional. It can be used to stream the response to display. 
If you pass a function, it will be called when the response is being streamed back. 
It will be called with the entire response received so far. Example value:

```
const streamCallback = html => document.getElementById('response').innerHTML = html;
```

Note that the refs will be sent when the HTML response is done. 
You should display them separately when received in response. 

You can use the queryId to provide feedback, so you may want to save it in session or local storage.

## Feedback Function

You can use feedback function as follows:

```
try { 
    const result = await feedback(apiKey, queryId, stars, comments);
}
catch (ex) {
    console.error(ex); 
}
```
queryId should come from the query API response. Stars should be a number between 1 and 5.
result should contain { success: true }.
