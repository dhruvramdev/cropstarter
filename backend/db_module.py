from pymongo import MongoClient

mongo_url = "mongodb://127.0.0.1:27017/"
db_name = "rjhck3"

client = MongoClient(mongo_url)
db = client[db_name]

def get_farm_data(farm_id):
    db_cursor = db.farm_data.find_one({'farm_id':farm_id})
    if not db_cursor:
        return {}
    return_dict = dict(db_cursor)
    del return_dict['_id']
    return return_dict

def get_farm_list():
    return_dict = list(db.farm_data.find())
    for items in return_dict:
        del items['_id']
    return return_dict


def get_item_data(item_id):
    db_cursor = db.item_data.find_one({'item_id':int(item_id)})
    if not db_cursor:
        return {}
    return_dict = dict(db_cursor)
    del return_dict['_id']
    return return_dict

def get_item_list():
    return_dict = list(db.item_data.find())
    for items in return_dict:
        del items['_id']
    return return_dict
