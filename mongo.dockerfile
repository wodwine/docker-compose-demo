FROM mongo

ENV MONGO_INITDB_ROOT_USERNAME node
ENV MONGO_INITDB_ROOT_PASSWORD node
ENV MONGO_INITDB_DATABASE admin

ADD mongodb.js /docker-entrypoint-initdb.d/

EXPOSE 27017
# to access
# mongo -u node -p node --authenticationDatabase admin
