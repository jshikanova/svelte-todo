import { GoogleSpreadsheet } from 'google-spreadsheet';

import {
	APP_SHEET_ID,
	APP_GOOGLE_PRIVATE_KEY,
	APP_GOOGLE_SERVICE_ACCOUNT_EMAIL
} from '$env/static/private';

export const getDBSpreadsheet = async () => {
	const doc = new GoogleSpreadsheet(APP_SHEET_ID);

	await doc.useServiceAccountAuth({
		private_key: APP_GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
		client_email: APP_GOOGLE_SERVICE_ACCOUNT_EMAIL
	});

	await doc.loadInfo();
	const sheet = doc.sheetsByIndex[0];

	return sheet;
};
