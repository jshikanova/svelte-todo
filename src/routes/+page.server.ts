import { GoogleSpreadsheet } from 'google-spreadsheet';

import {
	APP_SHEET_ID,
	APP_GOOGLE_PRIVATE_KEY,
	APP_GOOGLE_SERVICE_ACCOUNT_EMAIL
} from '$env/static/private';
import type { PageServerLoad } from './$types';

type Task = {
	id: string;
	date: string;
	content: string;
	completed: boolean;
};

export const load: PageServerLoad = async () => {
	const doc = new GoogleSpreadsheet(APP_SHEET_ID);

	await doc.useServiceAccountAuth({
		private_key: APP_GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
		client_email: APP_GOOGLE_SERVICE_ACCOUNT_EMAIL
	});

	await doc.loadInfo();
	const sheet = doc.sheetsByIndex[0];
	const rows = await sheet.getRows();

	// await sheet.addRow({
	// 	// // * source: https://support.google.com/appsheet/answer/10105828
	// 	// id: '=LOWER(DEC2HEX(RANDBETWEEN(0; 4294967295); 8))',
	// 	id: Date.now(),
	// 	date: Date(),
	// 	title: 'Buy groceries',
	// 	description: 'Apples, Bananas, Eggs, Milk',
	// 	completed: false
	// });

	const tasks = Object.values(rows)
		.map(
			(row) =>
				Object.fromEntries(
					Object.entries(row).filter(([key, value]) => {
						if (key.charAt(0) === '_') return;
						console.log({ [key]: value });

						return true;
					})
				) as Task
		)
		.map(({ completed, date, ...rest }) => ({
			date: new Date(date),
			completed: String(completed).toLocaleLowerCase() === 'true' ? true : false,
			...rest
		}));

	return { tasks };
};
