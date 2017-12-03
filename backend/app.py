from flask import Flask,request,abort
import db_module
import json
import sys

app = Flask(__name__)

@app.route('/')
def check():
    return 'API Running on port 5000'

@app.route('/getfarmlist', methods=['GET','POST'])
def get_farms():
    if request.method == 'GET':
        return json.dumps(db_module.get_farm_list())
    else:
        abort(404)

@app.route('/farm/<farm_id>', methods=['GET', 'POST'])
def fetch(farm_id):
    if request.method == 'GET':
        return json.dumps(db_module.get_farm_data(farm_id))
    else:
        abort(404)

@app.route('/getitemlist', methods=['GET','POST'])
def get_items():
    if request.method == 'GET':
        return json.dumps(db_module.get_item_list())
    else:
        abort(404)

@app.route('/item/<item_id>', methods=['GET', 'POST'])
def fetchitems(item_id):
    if request.method == 'GET':
        return json.dumps(db_module.get_item_data(item_id))
    else:
        abort(404)


PORT = int(sys.argv[2])
if __name__ == '__main__':
    app.run(port=PORT, debug=True)