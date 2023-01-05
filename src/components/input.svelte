<script lang="ts">
	export let name = '';
	export let className = '';
	export let placeholder = '';
	export let value = '';
</script>

<input class={`input ${className}`} type="text" {name} id={name} bind:value {placeholder} />

<style>
	.input {
		background: var(--grey-400);
		border: 2px solid var(--grey-300);
		border-radius: 4px;
		padding: 8px;
	}
</style>
