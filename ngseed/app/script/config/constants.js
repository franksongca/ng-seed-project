/* jshint -W097 */
'use strict';

angular.module('ngSeedApp').constant('Constants', {
    TRANSLATION_TYPES: {
        MESSAGES: 'MESSAGES',
        ERRORS: 'ERRORS'
    },

    EVENTS: {
        LANGUAGE_CHANGED: 'language-changed-event',
        LOGGED_OUT: 'logged-out-event',
        HEADER_ACTION_UPDATED: 'header-action-updated-event',
        CUSTOM_DIRECTIVES_COMPLETED: 'custom-ditective-completed-event',
        SPINNER_ON_EVENT: 'spinner-on-event',
        SPINNER_OFF_EVENT: 'spinner-off-event',
        SPINNER_CHANGE: 'spinner-change-event'
    },

    LANGUAGES: [
        {key: 'ENGLISH',code: 'en'},
        {key: 'FRENCH', code: 'fr'},
        {key: 'CHINESE', code: 'zh'}
    ],

    MAIN_MENU_KEYS: ['HOME', 'LOGIN', 'FORGOT_PASSWORD', 'REGISTRATION', 'TRAIL'],

    ACTIONS: ['', 'login', 'forgot', 'registration'],

    FOOTER_MENU_KEYS: ['ABOUT', 'HELP', 'CONTACT'],

    DASHBOARD_ACTIONS: ['features', 'feature1', 'feature2', 'feature3'],

    DASHBOARD_MENU_KEYS: ['FEATURE1', 'FEATURE2', 'FEATURE3'],

    FEATURES_HEADER_MENU_KEYS: [ 'LOGOUT', 'FEATURES', 'RESET_PASSWORD'],

    FEATURES_HEADER_ACTIONS: ['logout', 'features', 'resetpassword']
});
