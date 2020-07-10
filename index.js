const {
  env: {
    //Your PerfBeacon Token (See Tokens page)
    PERFBEACON_TOKEN,
    PERFBEACON_SITE_ID,
    //provided by Netlify
    COMMIT_REF,
  },
} = require('process');

const fetch = require('node-fetch');

module.exports = {
  async onSuccess({
    utils: {
      build: { failPlugin, failBuild },
    },
  }) {
    console.log('Preparing to trigger PerfBeacon tests');

    try {
      const { status, statusText } = await fetch(
        'https://app.perfbeacon.com/v1/deploys',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            token: PERFBEACON_TOKEN,
            site_id: PERFBEACON_SITE_ID,
            commit_id: COMMIT_REF,
          }),
        }
      );

      if (status != 200) {
        return failPlugin(
          "PerfBeacon test couldn't be submitted. Status: " + statusText
        );
      }

      console.log('PerfBeacon test submitted!');
    } catch (error) {
      return failBuild('PerfBeacon test failed', { error });
    }
  },
};
