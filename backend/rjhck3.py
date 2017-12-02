
# coding: utf-8

# In[4]:


from pymongo import MongoClient

mongo_url = "mongodb://127.0.0.1:27017/"
db_name = "rjhck3"

client = MongoClient(mongo_url)
client.drop_database(db_name)
db = client[db_name]
db.create_collection('farm_data')


# In[11]:


db.drop_collection('farm_data')
farm_data_list = [
    {
    'farm_id':'76',
    'name':'Nikhil Pandey',    
    'crop':'Maize',
    'area':'Udaipur',
    'state':'Rajasthan',
    'pledged':15000,
    'requirement':20000,
     'investors':2,
     'returns':4
    },
    {
    'farm_id':'69',
    'name':'Adarsh Agarwal',    
    'crop':'Wheat',
    'area':'Jaipur',
    'state':'Rajasthan',
    'pledged':25000,
    'requirement':30000,
     'investors':5,
     'returns':3
    }
]
db.farm_data.insert_many(farm_data_list)
db.farm_data.count()


# In[ ]:




