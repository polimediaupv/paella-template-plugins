import { PluginModule } from "paella-core";
import packageData from "../../package.json";

export default class PluginsModule extends PluginModule {
    get moduleName() {
        return packageData.name;
    }

    get moduleVersion() {
        return packageData.version;
    }
}