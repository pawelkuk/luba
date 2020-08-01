from django.http import JsonResponse


def ping(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == "GET":
        return JsonResponse({"message": "pong"}, safe=False)
