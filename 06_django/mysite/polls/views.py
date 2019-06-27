from django.http import HttpResponse

def index(request):
    return HttpResponse('Hello there!')

def detail(request, question_id):
    return = HttpResponse("Looking at question %s." % question_id)

def results(request, question_id):
    return HttpResponse("Results of question %s" % question_id)

def vote(request, question_id):
    return HttpResponse("Voting on question %s." % question_id)
