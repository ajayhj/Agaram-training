from flask import Flask;
from flask import render_template;
from flask_cors import CORS
app=Flask(__name__)
CORS(app)

@app.route("/welcome")


def show():
    return "<h1>welcome ajay hiii</h1>"

@app.route("/home")
def home():
    return("hi")

@app.route("/user/<username>")

def  printName(username):
    return username

@app.route("/contact/<name>")
def renderHtml(name):
    return render_template("index.html",name=name,name_list=["vicky","abinesh","ajay"])
