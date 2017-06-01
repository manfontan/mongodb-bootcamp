from pymongo import MongoClient

user = "dbmaster"
password = "adminPa55wd123"
host = "192.168.14.102"

client = MongoClient(
    'mongodb://{}:{}@{}/?authMechanism=PLAIN&authSource=$external'.format(user, password, host))

db = client.maindata  # equal to: > use your_db

print(db.collection_names())  # Return a list of collections in 'your_db'

# Check if collection "your_collection" exists in db (your_db)
print("people" in db.collection_names())

# Check if the collection is empty
collection = db.people
print(collection.count() == 0)
