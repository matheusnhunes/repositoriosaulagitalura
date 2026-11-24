from wsgiref.simple_server import make_server

def aplicacao(environ, start_response):
    produtos = [{
        'nome': 'Produto 1',
        'preco': 10.99
    }, {
        'nome': 'Produto 2',
        'preco': 19.99
    }, {
        'nome': 'Produto 3',
        'preco': 5.99
    }]

    linhas_html = ''
    for produto in produtos:
        linhas_html += f'<li>{produto["nome"]} - R$ {produto["preco"]:.2f}</li>'

    start_response('200 OK', [('Content-Type', 'text/html;charset=utf-8')])
    
    with open('index.html', 'r', encoding='utf-8') as file:
        html = file.read()

    html_final = html.replace('{{produtos}}', linhas_html)
    return [html_final.encode('utf-8')]


make_server('', 5000, aplicacao).serve_forever()