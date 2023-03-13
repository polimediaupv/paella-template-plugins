# A template plugin set for Paella Player

## Usage

**Step 1:** Import the plugin context and add it to the Paella Player initialization parameters:

```javascript
...
import getTemplatePluginsContext from 'paella-template-plugins';

let paella = new Paella('player-container', {
    customPluginContext: [
        getTemplatePluginsContext()
    ]
});
...
```

**Step 2:** Configure the plugins you want to use in the paella player configuration.

```json
{
    "plugins": {
        ...
        "es.upv.paella.templateButton": {
            "enabled": true,
            "side": "right",
            "order": 0
        }
        ... other plugin settings
    }
}
```

## To add a plugin

Add your plugins to `./src/plugins` folder.
