<script>
	import { CheckSquareIcon } from 'svelte-feather-icons';
</script>

<header class="header">
	<div class="container">
		<div class="header__wrapper">
			<div class="header__logo">
				<CheckSquareIcon size="32" />
				<div class="header__logo-text">list of tasks</div>
			</div>
		</div>
	</div>
</header>

<style>
	.header {
		padding: 8px;
	}

	.header__wrapper {
		display: flex;
		justify-content: center;
	}

	.header__logo {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	.header__logo-text {
		padding-left: 8px;
		font-size: 1.4em;
	}
</style>
