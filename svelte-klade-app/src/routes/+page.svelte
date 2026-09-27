<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Klade SvelteKit Probe</title>
</svelte:head>

<main class="probe">
	<h1>Klade SvelteKit probe</h1>
	<p class="sub">
		Set <code>PUBLIC_APP_NAME</code> and <code>PUBLIC_API_URL</code> in Klade. This page reads them
		with <code>$env/dynamic/public</code> (build ARG + runtime env).
	</p>
	<section class="card">
		<div class="row">
			<span class="k">Status</span>
			<span class={data.appNameSet ? 'ok' : 'bad'}>
				{data.appNameSet ? 'PUBLIC_APP_NAME injected' : 'PUBLIC_APP_NAME missing'}
			</span>
		</div>
		<div class="row"><span class="k">PUBLIC_APP_NAME</span><span class="v">{data.appName}</span></div>
		<div class="row"><span class="k">PUBLIC_API_URL</span><span class="v">{data.apiUrl}</span></div>
	</section>
	<section class="card">
		<div class="row"><span class="k">Fetched JSON</span><span class="k">GET {data.apiUrl}</span></div>
		<pre>{JSON.stringify(data.remote, null, 2)}</pre>
	</section>
</main>

//Just adding this so I can get the commit messag

<style>
	:global(body) {
		margin: 0;
		background: #0b1220;
		color: #e8eef7;
	}
	.probe {
		max-width: 44rem;
		margin: 0 auto;
		padding: 2.5rem 1.25rem;
		font-family: ui-sans-serif, system-ui, sans-serif;
	}
	h1 {
		margin: 0 0 0.4rem;
		font-size: 1.6rem;
	}
	.sub {
		color: #9fb0c8;
		margin-bottom: 1.5rem;
	}
	.card {
		background: #121b2c;
		border: 1px solid #24324a;
		border-radius: 12px;
		padding: 1.1rem 1.2rem;
		margin-bottom: 1rem;
	}
	.row {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.45rem 0;
		border-bottom: 1px solid #1e2a40;
	}
	.row:last-child {
		border-bottom: 0;
	}
	.k {
		color: #9fb0c8;
	}
	.v {
		font-family: ui-monospace, monospace;
		word-break: break-all;
	}
	.ok {
		color: #4ade80;
		font-family: ui-monospace, monospace;
	}
	.bad {
		color: #f87171;
		font-family: ui-monospace, monospace;
	}
	pre {
		margin: 0;
		white-space: pre-wrap;
		word-break: break-word;
		font-size: 0.85rem;
	}
</style>
