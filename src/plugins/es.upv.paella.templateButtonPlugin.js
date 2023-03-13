import { ButtonPlugin } from 'paella-core';

import defaultButtonIcon from '../icons/template.svg';

export default class TemplateButtonPlugin extends ButtonPlugin {
	getAriaLabel() {
        return this.player.translate("Template plugin button");
    }

    getDescription() {
        return this.getAriaLabel();
    }

	async load() {
		this.icon = this.player.getCustomPluginIcon(this.name,"forwardIcon") || defaultButtonIcon;
	}
	
	async action() {
		this.player.log.info("Just do something!")
	}
}
