<script>
	import {
		TwitterIcon,
		GithubIcon,
		MailIcon,
		CodepenIcon,
		FileTextIcon
	} from 'svelte-feather-icons';

	const socials = [
		{
			name: 'email',
			url: 'mailto:juliashikanova@yandex.ru',
			Icon: MailIcon
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/jshikanova',
			Icon: TwitterIcon
		},
		{
			name: 'Github',
			url: 'https://github.com/jshikanova',
			Icon: GithubIcon
		},
		{
			name: 'Codepen',
			url: 'https://codepen.io/jshikanova',
			Icon: CodepenIcon
		},
		{
			name: 'Blog - The Meta Imposter',
			url: 'https://metaimposter.hashnode.dev/',
			Icon: FileTextIcon
		}
	];
</script>

<footer class="footer">
	<div class="container">
		<div class="footer__wrapper">
			<div class="socials">
				{#each socials as { name, url, Icon }}
					<a class="socials__link" href={url} title={name} target="_blank" rel="noopener noreferrer"
						><Icon size="24" />
					</a>
				{/each}
			</div>
			<div>
				Made with
				<a
					class="footer__svelte-link"
					href="https://kit.svelte.dev/"
					title="Svelte Kit"
					target="_blank"
					rel="noopener noreferrer">Svelte</a
				>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: 8px;
		font-size: 0.6em;
	}

	.footer__wrapper {
		display: flex;
		gap: 8px;
		flex-direction: column;
		align-items: center;
	}

	.socials {
		display: flex;
		gap: 16px;
	}

	.socials__link {
		transition: color ease-in-out 0.3s;
	}

	.socials__link,
	.socials__link:visited {
		color: var(--white);
	}

	.socials__link:hover {
		color: var(--svelte-orange);
	}

	.footer__svelte-link,
	.footer__svelte-link:visited {
		color: var(--svelte-orange);
	}
</style>
