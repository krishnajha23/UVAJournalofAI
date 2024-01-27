
path = 'AI Article.txt'
out_name = path[0:-4] + ".html"

with open(path, 'r') as stream:
    text = stream.readlines()
    print(text)
    for line in text:
        sent = line.strip()
        if "(title)" in (sent):
            tag = sent.index("(title)")
            sent = sent[0:tag]
            sent = sent.strip()
            sent = '<h1>' + sent + '</h1>'
            print(sent)