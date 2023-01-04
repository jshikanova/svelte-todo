<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { default as Input } from './input.svelte';

	const dispatch = createEventDispatcher();

	const sayHello = () => {
		dispatch('message', { text: 'hello' });
	};

	let newTask = '';

	// $: console.log({ newTask });
</script>

<form class="add-task-form">
	<Input
		className="add-task-form__input"
		name="new-task"
		bind:value={newTask}
		placeholder="Enter your task here"
	/>
	<button class="add-task-form__button" on:click={sayHello}>Add task</button>
</form>

<style>
	.add-task-form {
		display: flex;
		justify-content: center;
		gap: 8px;
		padding: 32px 0;
	}

	.add-task-form__button {
		font-size: 0.7em;
		padding: 0 16px;
		text-transform: uppercase;
		font-weight: bold;
		background: var(--svelte-orange);
		border: none;
		border-radius: 4px;
	}
</style>
