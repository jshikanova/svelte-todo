<script lang="ts">
	import { AddTaskForm, TaskList } from '../components';

	const handleMessage = (e: CustomEvent) => console.log(e.detail.text);

	import type { PageData } from './$types';

	export let data: PageData;

	const { tasks } = data;
</script>

<head>
	<title>List of tasks</title>
	<meta name="description" content="Demo made with Svelte by Julia Shikanova" />
</head>

<div class="container">
	<AddTaskForm on:message={handleMessage} />
	<TaskList {tasks} />
</div>
