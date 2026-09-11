import html.parser
class Filter(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
    def handle_data(self, d):
        t = d.strip()
        if t: self.text.append(t)
p = Filter()
p.feed(open('dash.html').read())
print('\n'.join(p.text))
