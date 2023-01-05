<script lang="ts">
	import { default as Input } from './input.svelte';
</script>

<div class="container">
	<form class="add-task-form" method="post" action="?/add">
		<Input className="add-task-form__input" name="new-task" placeholder="Enter your task here" />
		<button class="add-task-form__button" formaction="?/add"> Add task </button>
	</form>
</div>

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
