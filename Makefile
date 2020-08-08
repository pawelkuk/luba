.PHONY: dbpopulation
dbpopulation:
	cat dbpopulation.py |  docker-compose exec -T web ./manage.py shell