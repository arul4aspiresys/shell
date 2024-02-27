import { loadManifest } from '@angular-architects/module-federation';

Promise.all([
	loadManifest('assets/mf.manifest.json')
])
	.catch((err) => console.error('Error loading remote entries', err))
	.then(() => import('./bootstrap'))
	.catch((err) => console.error(err));