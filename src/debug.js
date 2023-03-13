import { Paella } from 'paella-core';
import getTemplatePluginsContext from './index';

const initParams = {
	customPluginContext: [
		getTemplatePluginsContext()
	]
};

let paella = new Paella('player-container', initParams);

paella.loadManifest()
	.catch(e => console.error(e));
