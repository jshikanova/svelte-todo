<script lang="ts">
	import type { PageData } from './$types';

	import { AddTaskForm, TaskList } from '../components';

	export let data: PageData;
	const { tasks } = data;
</script>

<head>
	<title>List of tasks</title>
	<meta name="description" content="Demo made with Svelte by Julia Shikanova" />
</head>

<AddTaskForm />
<TaskList {tasks} />
