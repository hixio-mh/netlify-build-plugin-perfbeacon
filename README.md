# Netlify PerfBeacon Deploy Plugin

This is a [Build Plugin](https://docs.netlify.com/configure-builds/build-plugins) for Netlify that uses the PerfBeacon API to automatically trigger a round of tests after a successful build has occured.
After a successful build, tell PerfBeacon you've deployed and trigger a round of testing.

## Usage

1. Make sure you've [enabled build plugins](https://docs.netlify.com/configure-builds/build-plugins/) for your site on Netlify.

2. Install the plugin using `npm`:

```
yarn add netlify-build-plugin-perfbeacon
```

3. Update your `netlify.toml` configuration file to reference the plugin in your plugins section:

```toml
[[plugins]]
package = "netlify-build-plugin-perfbeacon"
```

3. Grab your [PerfBeacon Token (See Tokens page)](https://app.perfbeacon.com/tokens) and the ID for the site you want to test (under Sites > Settings) and store them as environmental variables inside of Netlify.

4. Using the latest version of the Netlify CLI, run a dry build:

```
netlify build --dry
```

If you see `Plugin netlify-build-plugin-perfbeacon` attached to the `onSuccess` lifecycle, you should be all set.

Every deployment will track your changes in PerfBeacon.

## Credits

Inspired by Tim Kadlec's work for SpeedCurve: https://github.com/tkadlec/netlify-build-plugin-speedcurve
