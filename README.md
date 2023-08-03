# Adriana Sample App with NX mono repository (AdrianaOrg)

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Start the app

```
$ npm install
$ npx nx serve adriana-sample-app
```

Open your browser and navigate to http://localhost:4200/.

## Generate module

```
$ npx nx generate @nx/react:library --name=<MODULE_NAME>
```

### Example

```
$ npx nx generate @nx/react:library --name=commons
```

## Generate components

```
$ npx nx generate @nx/react:component --name=<COMPONENT_NAME> --project=<MODULE_NAME> --export=true
```

### Example

```
$ npx nx generate @nx/react:component --name=<common-module-1> --project=<commons> --export=true
```

## Deployment

```
$ npx nx build adriana-sample-app
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed.
