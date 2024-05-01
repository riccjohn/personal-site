# John Riccardi

## Setup

### Prerequisites

**node**
This project is using [asdf-vm](https://asdf-vm.com/) and the plugin [asdf-nodejs](https://github.com/asdf-vm/asdf-nodejs) to manage node versions. You can install those, or use your own node version manager. The supported node version will be noted in `.tool-versions`. If you have `asdf` and `asdf-nodejs` installed, just run:

```shell
asdf install
```

**pnpm (package manager)**

This project uses [pnpm](https://pnpm.io/) but you can likely use `npm` or `yarn` if you'd like. To install `pnpm`, just run `npm i -g pnpm` to have `npm` install it globally.

### Clone the project

```shell
git clonegit@github.com:riccjohn/personal-site.git
```

### Install Dependencies

```shell
pnpm i
```

### Start the dev server

```
pnpm dev
```
