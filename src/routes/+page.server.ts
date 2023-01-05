import { getDBSpreadsheet } from '$lib/server';
import type { Actions, PageServerLoad } from './$types';

type Task = {
	id: string;
	date: string;
	content: string;
	completed: boolean;
};

export const load: PageServerLoad = async () => {
	const sheet = await getDBSpreadsheet();
	const rows = await sheet.getRows();

	const tasks = Object.values(rows)
		.map(
			(row) =>
				Object.fromEntries(
					Object.entries(row).filter(([key]) => key.charAt(0) !== '_' && true)
				) as Task
		)
		.map(({ completed, date, ...rest }) => ({
			date: new Date(date),
			completed: String(completed).toLocaleLowerCase() === 'true' ? true : false,
			...rest
		}));

	return { tasks };
};

export const actions: Actions = {
	add: async ({ request }) => {
		const data = await request.formData();

		const sheet = await getDBSpreadsheet();

		await sheet.addRow({
			id: Date.now(),
			date: Date(),
			content: data.get('new-task') as string,
			completed: false
		});
	}
};
