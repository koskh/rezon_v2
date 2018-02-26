const localeData ={
    'en': require('../i18n/en'),
    'ru': require('../i18n/ru')
};


export default {
    getBrowserLocale() {
        const language = (navigator.languages && navigator.languages.toString().split(',')[0]) || navigator.language ||  navigator.userLanguage;
        return language.toLowerCase().split(/[_-]+/)[0];

    },

    getMessages(languageWithoutRegionCode) {
        return localeData[languageWithoutRegionCode] || localeData.en;
    }
}

