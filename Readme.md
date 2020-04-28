# Errbit-Generator

Generates a fake errbit error.

## Usage

```bash
yarn install
yarn run compile
```

```bash
ERRBIT_HOST=$errbit_host \
ERRBIT_PROJECT_ID=$errbit_project_id \
ERRBIT_PROJECT_KEY=$errbit_project_key \
node dist/src/app.js
```

Optionally, provide

```bash
NODE_TLS_REJECT_UNAUTHORIZED=0 \
```

If you have trouble with self-signed certificates.
