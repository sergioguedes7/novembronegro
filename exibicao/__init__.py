from flask import Flask, render_template

app = Flask(__name__)

from exibicao.views import homepage, pesquisa1, pesquisa2