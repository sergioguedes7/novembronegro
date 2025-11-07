from flask import Flask, render_template

app = Flask(__name__)

from exibicao.views import homepage, sobre_novembronegro