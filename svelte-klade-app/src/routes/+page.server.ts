import { env } from '$env/dynamic/public';

const DEFAULT_API = 'https://jsonplaceholder.typicode.com/todos/1';

export async function load() {
	const appName = env.PUBLIC_APP_NAME || '(not set)';
	const apiUrl = env.PUBLIC_API_URL || DEFAULT_API;
	let remote: unknown;
	try {
		const response = await fetch(apiUrl);
		remote = response.ok ? await response.json() : { error: `HTTP ${response.status}` };
	} catch (error) {
		remote = { error: error instanceof Error ? error.message : String(error) };
	}

	return {
		appName,
		apiUrl,
		appNameSet: Boolean(env.PUBLIC_APP_NAME),
		remote
	};
}
