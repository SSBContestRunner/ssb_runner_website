import en_us from '../assets/i18n/en_us.json';
import zh_cn from '../assets/i18n/zh_cn.json';

const dictionary = {
    en_us,
    zh_cn
}

// 获取当前locale信息
const getLocale = () => {
    let locale = window.localStorage.getItem('locale');

    if (locale == undefined) {
        locale = 'en_us';
    }

    return locale;
}

// 根据locale翻译
/**
 * @param name {string}
 * @returns {string}
 */ 
const t = (name) => {
    const locale = getLocale();
    // console.log(dictionary[locale])
    let dict = dictionary['en_us'];
    if (dictionary[locale] !== undefined) {
        dict = dictionary[locale];
    }

    const [name1, name2] = name.split('-');

    // console.log(dict)
    if (dict[name1] == undefined || dict[name1][name2] == undefined) {
        return '!NOTFOUND!'
    }

    return dict[name1][name2];
}

export { getLocale, t };