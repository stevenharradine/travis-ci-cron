# travis-ci-cron

## usage
### Install dependancies
```
npm install
```

### run the script
```
node script.js {{ travis_ci_token }} {{ travis_role_1 }} {{ travis_role_n }}
```
#### example
```
node script.js REDACT "telusdigital%2Fansible-php" "telusdigital%2Fansible-python"
```
