.PHONY: dbpopulation pre-commit
dbpopulation:
	cat dbpopulation.py |  docker-compose exec -T web ./manage.py shell
pre-commit:
	pre-commit install
