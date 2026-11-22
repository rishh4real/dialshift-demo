# Dialshift demo

This public companion project installs and demonstrates the [`dialshift`](https://github.com/rishh4real/cli-internet-radio) terminal radio package.

## Verify the package

```bash
npm install
npm run verify
npm run build
```

`npm run verify` executes the installed package binary: `dialshift --help`. The build captures that real output in `dist/cli-output.txt`, which the deployed page displays.

The dependency points to the public GitHub package source until Dialshift is published to the npm registry:

```json
"dialshift": "github:rishh4real/cli-internet-radio#main"
```

Audio playback is designed for a local terminal because Dialshift uses the machine's `mpv` player. The live demo therefore proves installation and CLI execution, while full listening is run locally.

## Deployment

GitHub Actions publishes `dist/` to GitHub Pages after the package verification and build succeed.

Live demo: <https://rishh4real.github.io/dialshift-demo/>
