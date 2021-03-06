const path = require('path');

module.exports = {
    hostname: '0.0.0.0',
    port: 3000,
    production: false,
    salt: '58MpFjp6N3zPwL8evWnWDhBcR233Ah4b',
    trustProxy: true,
    stackTrace: false,
    logLevel: 'info',
    maxUploadSizeMB: 100,
    testMode: false,
    logOptions: {
        template: '%t [%l]',
        timestampFormatter: date => date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
        levelFormatter: level => level.toUpperCase()
    },
    mongo: {
        url: 'mongodb://localhost:27017/zoia',
        options: {},
        sessionCollection: 'sessions'
    },
    session: {
        secret: 'A5eaUNPw35BjUyQDUPt6DKZAEaswv6kR',
        name: 'zoia',
        cookie: {
            domain: '',
            httpOnly: false,
            secure: false,
            maxAge: 604800000, // 7 days
            path: '/'
        }
    },
    i18n: {
        locales: ['en', 'ru'],
        localeNames: {'en': 'English', 'ru': 'Русский'},
        detect: {
            subdomain: true,
            query: true,
            cookie: true
        },
        dev: true,
        cookieName: 'zoiaLang',
        fallback: false
    },
    mailer: {
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: '',
            pass: ''
        }
    },
    website: require(path.join(__dirname, 'website.js')),
    version: require(path.join(__dirname, 'version.js'))
};
