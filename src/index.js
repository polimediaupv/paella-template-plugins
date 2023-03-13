
import TemplateButton from './plugins/es.upv.paella.templateButtonPlugin';

export default function getBasicPluginsContext() {
    return require.context("./plugins", true, /\.js/)
}
