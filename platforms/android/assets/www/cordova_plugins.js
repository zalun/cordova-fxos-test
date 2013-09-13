cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.core.vibration/www/vibration.js",
        "id": "org.apache.cordova.core.vibration.notification",
        "merges": [
            "navigator.notification"
        ]
    }
]
});