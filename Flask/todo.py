from flask import Flask;
from flask import render_template,request;
app=Flask(__name__)

list=["balu","sineka","ramesh"]

@app.route("/todo",methods=["GET","POST"])
def todo():
    
    if request.method=="POST":
        list.append(request.form["itemdata"])
    return render_template("example.html",items=list)

if __name__=="__main__":
    app.run(debug=True)