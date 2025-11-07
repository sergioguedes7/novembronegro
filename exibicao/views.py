from exibicao import app
from flask import render_template, url_for 

@app.route('/')
def homepage():
    return render_template('paginainicial.html')

@app.route('/novembronegro')
def novembronegro():
    return render_template('sobre_novembronegro.html')