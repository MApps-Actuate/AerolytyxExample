/* Controllers */

var mainCtrl = angular.module('mainApp', []);

var restHost = "analyticssvc.eimdemo.com";
 
var restPort = "";
 
var visuals = "visuals";
 
var ihubHost = "analytics.eimdemo.com";
 
var ihubPort = "";

var authTokenValue = "missing";

mainCtrl.constant('mainAppCtrl', {

    login: 'http://' + restHost + restPort + '/api/v2/login',

    folders: 'http://' + restHost + restPort + '/api/v2/folders',

    files: 'http://' + restHost + restPort + '/api/v2/files/:fileId',

    downloadReport: 'http://' + restHost + restPort + '/api/v2/' + 'files',

    reports: 'http://' + restHost + restPort + '/api/v2/' + visuals + '/:reportId/:outputFormat',

    reportData: 'http://' + restHost + restPort + '/api/v2/' + visuals + '/:reportId/data/:datasetname/?format=:format',

    reportBookmarks: 'http://' + restHost +restPort + '/api/v2/' + visuals + '/:reportId/bookmarks',

    reportMetadata: 'http://' + restHost + restPort + '/api/v2/files/:fileId/properties',

    reportBookmarksData: 'http://' + restHost + restPort + '/api/v2/' + visuals + '/:reportId/bookmarks/:bookmarkName',

    reportMetadataData: 'http://' + restHost + restPort + '/api/v2/dataobjects/:reportId/:datasetname',

    downloadFile: 'http://' + restHost + restPort + '/api/v2/files/:reportId/download',

    dataObject: 'http://' + restHost + restPort + '/api/v2/dataobjects/:dataObjectId',

    dataObjectElement: 'http://' + restHost + restPort + '/api/v2/dataobjects/:dataObjectId/:dataobjectElement',

    executeReport : 'http://' + restHost + restPort + '/api/v2/jobs/execute/', 

    jsapiUrl: 'http://' + ihubHost  + ihubPort +  '/iportal/jsapi',

    iportalUrl : 'http://' + ihubHost  + ihubPort +  '/iportal',

    report_refresh_Time : '10080',

    idle_time : '20',

    username : "akofsky",

    password: "livelink"   

});

document.addEventListener(
    'touchmove',
    function(e) {
        e.preventDefault();
    },
    false
);