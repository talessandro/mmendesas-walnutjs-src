var ptoConfig = require(process.cwd() + '/protractor.conf.js').config;

var config = {

    projectName: 'qaaut-test',

    waitElementTimeout: 10000,

    evidencesPath: '',

    enableDebug: false,

    /**
     * Load the config parameters from protractor.confg.js
     */
    loadConfigs: function () {
        if (ptoConfig.walnutjsOpts) {

            this.enableDebug = ptoConfig.walnutjsOpts.enableDebugLog;

            if (ptoConfig.walnutjsOpts.waitElementTimeout) {
                this.waitElementTimeout = ptoConfig.walnutjsOpts.waitElementTimeout;
            }
            if (ptoConfig.walnutjsOpts.evidencesPath) {
                this.evidencesPath = ptoConfig.walnutjsOpts.evidencesPath;
            }
            if (ptoConfig.walnutjsOpts.projectName) {
                this.projectName = ptoConfig.walnutjsOpts.projectName;
            }
        }
    }
};

module.exports = config;