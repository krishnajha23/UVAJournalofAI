
path = 'AIWebpage\\articles\\Journal of AI Article 1.txt'
out_path = path[0:-4] + ".html"
author = ''


out = ["<!DOCTYPE html>", '<html lang="en">', '<head>', '<meta charset="utf-8" />', '<meta charset="utf-8" />',
       '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />', '<meta name="description" content="" />', '<meta name="Authors" content="" />', f'<title>{author}</title>', '<!-- Favicon-->', '<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />', '<!-- Bootstrap icons -->', '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">', '<!-- Core theme CSS (includes Bootstrap)-->', '<link href="css/styles.css" rel="stylesheet" />', '</head>', '<body>', '<!-- Responsive navbar-->', '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">', '<div class="container">', '<<a class="navbar-brand" href="home.html">', '<img src="assets/sigailogo.jpeg" alt="Unavailable" width="60">', '</a>>', '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>', '<div class="collapse navbar-collapse" id="navbarSupportedContent">', '<ul class="navbar-nav ms-auto mb-2 mb-lg-0">', '<li class="nav-item"><a class="nav-link" href="about.html">About</a></li>', '<li class="nav-item"><a class="nav-link" href="blog.html">Articles</a></li>', '<li class="nav-item"><a class="nav-link" href="contacts.html">Contact Us</a></li>', '</ul>', '</div>', '</div>', '</nav>', '<div class="container">', ]


with open(path, 'r',) as stream:
    text = stream.readlines()
    for line in text:
        sent = line.strip()
        if "(title)" in (sent):
            tag = sent.index("(title)")
            sent = sent[0:tag]
            sent = sent.strip()
            out.append('<div class="my-5">')
            sent = '<h1 class="">' + sent + '</h1>'
            out.append(sent)
            print(sent)
        elif ("(author)" in sent):
            tag = sent.index("(author)")
            sent = sent[0:tag]
            sent = sent.strip()
            author = sent
            sent = '<h3>' + sent + '</h3>'
            out.append(sent)
            out.append("</div>")
            print(sent)
        elif ("(head)" in sent):
            tag = sent.index("(head)")
            sent = sent[0:tag]
            sent = sent.strip()
            sent = '<h3>' + sent + '</h3>'
            out.append(sent)
            print(sent)
        elif ("(sm-br)" in sent):
            tag = sent.index("(sm-br)")
            sent = sent[0:tag]
            sent = sent.strip()
            sent = '<p class="lh-lg">' + sent + '</p>'
            out.append(sent)
            print(sent)
        else:
            sent = sent.strip()
            sent = '<p class="lh-lg">' + sent + '</p>'
            out.append(sent)
    
sent = "</body>"
out.append(sent)

with open(out_path, "w") as stream:
    for line in out:
        print(line, file=stream)