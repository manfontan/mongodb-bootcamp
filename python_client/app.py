from pymongo import MongoClient

user = "dbmaster"
password = "adminPa55wd123"
host = "192.168.14.103"
myCollections = ['people']

client = MongoClient(
    'mongodb://{}:{}@{}/?authMechanism=PLAIN&authSource=$external'.format(user, password, host))

db = client.maindata  # equal to: > use your_db
dbCollections = db.collection_names()

for name in myCollections:
    # Check if collection "your_collection" exists in db (your_db)
    # Return a list of collections in 'your_db'
    print(name + ' collection exists: ' + str(name in dbCollections))


client.close()
