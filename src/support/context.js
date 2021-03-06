var glob = require("glob-fs")({ gitignore: true });
var fs = require('fs');

var context = {

    currentFeature: null,

    currentScenario: null,

    currentStep: null,

    locators: null,

    getCurrentFeature: function () {
        return this.currentFeature;
    },

    setCurrentFeature: function (feature) {
        this.currentFeature = feature;
        return this;
    },

    getCurrentScenario: function () {
        return this.currentScenario;
    },

    setCurrentScenario: function (scenario) {
        this.currentScenario = scenario;
        return this;
    },

    getCurrentStep: function () {
        return this.currentStep;
    },

    setCurrentStep: function (step) {
        this.currentStep = step;
        return this;
    },

    getLocators: function () {
        return this.locators;
    },

    setLocators: function (loc) {
        this.locators = loc;
        return this;
    },

    /**
     * Load the locators file
     */
    loadUIMap: function () {
        var files = glob.readdirSync('/test/locators/*.json');
        if (files.length === 0) {
            throw "Locators File Not Found";
        }
        var content = fs.readFileSync(files[0], 'utf8');
        this.locators = JSON.parse(content);
        return this;
    },

    /**
     * Load a fake ui map for unittests
     */
    loadFakeUIMap: function () {
        var content = '{"containers":[{"name":"locAA","locators":[{"key":"key001","type":"type001","value":"value001"},{"key":"key002","type":"type002","value":"value002"},{"key":"key003","type":"type003","value":"value003"}]},{"name":"locBB","locators":[{"key":"key001","type":"type001","value":"value 00 1"},{"key":"key002","type":"type002","value":"value002"}]}]}';
        this.locators = JSON.parse(content);
        return this;
    }

};

module.exports = context;