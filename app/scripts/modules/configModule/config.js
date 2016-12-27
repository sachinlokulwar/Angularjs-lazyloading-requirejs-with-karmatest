angular.module('tqlAppConfigModule')
	.constant('AppConfig', {
	    'BASE_URL': 'http://localhost:8082',
	    'BASE_URL1': 'http://localhost:8082',
	    'SEARCH' : '/application/search',
	    'SEARCH_SCROLL' : '/application/search/scroll',
     	'SEARCH_CACHED': '/application/search/cached',
	    'SEARCH_FILTERS' : '/filters',
	    'EVENT' : '/events',
	    'EVENT_CONFIG' : '/events/event',
	    'BUG_REPORT' : '/bugReport',
	    'DAILY' : '/daily',
	    'CUSTOM' : '/custom',
	    'DEVICE_CUSTOM':'/device/custom',
	    'DEVICE_DAILY':'/device/daily',
	    'DOWNLOAD_DAILY':'/download/daily',
	    'DOWNLOAD_CUSTOM':'/download/custom',
	    'validFileExtension' : [".csv",".txt",".xls"]
    });