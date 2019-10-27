db.grantRolesToUser("node",[{role:"readWrite",db:"store"}])

db = db.getSiblingDB('store')

db.createCollection('books')
books = db.getCollection('books')

books.insertMany([
  {name:'Big Java',price:200},
  {name:'Python 101',price:150},
  {name:'Fun C++',price:270}
])

