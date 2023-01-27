chrome.webRequest.onHeadersReceived.addListener((details) => {
  if (details.statusCode !== 302) return;

  const locationHeader = details.responseHeaders.find((h) => h.name.toLowerCase() === 'location');
  locationHeader.value = locationHeader.value.replace('http://', 'https://');
  return { responseHeaders: details.responseHeaders };
}, { urls: ['https://aod-ssl.itunes.apple.com/*'] }, ['blocking', 'responseHeaders']);
