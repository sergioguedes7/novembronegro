from exibicao import app
from flask import render_template

@app.route('/')
def homepage():
    return render_template('paginainicial.html')

@app.route('/sobreonovembronegro')
def sobre_novembronegro():
    return render_template('sobre_novembronegro.html')