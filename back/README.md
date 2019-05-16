# Back-end

## Run tests

### Initial setup

To be able to run the tests you need to run the commands below

#### Pipenv setup

We recommend the use of [pipenv](https://github.com/pypa/pipenv) to run tests on isolated environment

```bash
pip install --user pipenv
```

#### Dependencies installation

```bash
(cd back/ && pipenv install --ignore-pipfile --dev)
```
### Run all tests on application

```bash
(cd back/ && pipenv run python -m coverage run --source services -m pytest -vvrxXs tests)
```

### How to run a specific test file

```bash
(cd back/ && pipenv run python -m coverage run --source services -m pytest -vvrxXs ${test_file_path})
```

### How to see coverage report

```bash
(cd back/ && pipenv run python -m coverage report -m)
```

## Run application on development mode

```bash
(cd back/ && pipenv run gunicorn --threads 16 -w 1 -b 0.0.0.0:5000 run:APP)
```