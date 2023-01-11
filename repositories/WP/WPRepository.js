/*
 * WPReact
 * Developed by: diaryforlife
 * */
import axios from 'axios';

export const WPDomain = 'https://rtc.crystal-rtc.com'; // change it to your base_url

const username = 'ck_6fe8d158ba82ec93d00ca779a5415d064359deab';
const password = 'cs_321ee974c2b0a02ac29b7f6fcc857cfc8625dc95';

export const oathInfo = {
    consumer_key: username,
    consumer_secret: password,
};

export const customHeaders = {
    Accept: '*/*',
};

export const WPRepository = axios.create({
    headers: customHeaders,
});
