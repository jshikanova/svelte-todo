<script lang="ts">
	import type { PageData } from '.svelte-kit/types/src/routes/$types';

	export let tasks: PageData['tasks'];

	// * source: https://stackoverflow.com/questions/18889548/javascript-change-gethours-to-2-digit#comment93549371_18889548
	const addZeros = (num: number, digits: number = 2) => num.toString().padStart(digits, '0');
</script>

<div class="container">
	<ul class="tasks">
		{#each tasks as { id, date, content, completed }, index}
			<li class="tasks__item">
				<form method="post" action="?/update-status">
					<input
						class="tasks__checkbox"
						type="checkbox"
						id={`${id}`}
						name="task"
						value="checked"
						checked={completed}
						on:change={(props) => props?.currentTarget?.form?.submit()}
					/>
					<!-- <input type="hidden" name="id" value={`${id}`} /> -->
				</form>
				<label for={`${index}`}>
					<div>{content}</div>
					<div class="tasks__date">
						{date.toDateString()} -
						{addZeros(date.getHours())}:{addZeros(date.getMinutes())}:{addZeros(date.getSeconds())}
					</div>
				</label>
			</li>
		{/each}
	</ul>
</div>

<style>
	.tasks {
		list-style: none;
		padding: 0 0 32px 0;
	}

	.tasks__item {
		padding: 16px;
		display: flex;
		gap: 16px;
		align-items: center;
	}

	.tasks__item:nth-child(odd) {
		background: var(--grey-500);
	}

	.tasks__checkbox {
		width: 24px;
		height: 24px;
	}

	.tasks__date {
		color: var(--grey-300);
		font-size: 0.7em;
	}
</style>
