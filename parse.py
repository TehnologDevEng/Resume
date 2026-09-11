import urllib.request
from html.parser import HTMLParser

class Filter(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
    def handle_data(self, data):
        data = data.strip()
        if data:
            self.text.append(data)

parser = Filter()
parser.feed(open('resume.html').read())
print('\n'.join(parser.text))
