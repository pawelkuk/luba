.PHONY: dbpopulate
  cat dbpopulation.py | docker-compose exec -T web ./manage.py shell
