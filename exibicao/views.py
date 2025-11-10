from exibicao import app
from flask import render_template, url_for 

@app.route('/')
def homepage():
    return render_template('paginainicial.html')

@app.route('/pesquisa1')
def pesquisa1():
    return render_template('pesquisas/pesquisa1.html')

@app.route('/pesquisa2')
def pesquisa2():
    return render_template('pesquisas/pesquisa2.html')
