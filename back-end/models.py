from peewee import *
from flask_login import UserMixin

DATABASE = PostgresqlDatabase('places', user='adminmatt', password='password')

class User(UserMixin, Model):
    id = IntegerField(primary_key=True)
    username = CharField(unique=True)
    email = CharField(unique=True)
    password = CharField()

    class Meta:
        database = DATABASE



def initialize():
    DATABASE.connect()
    DATABASE.create_tables([User], safe=True)
    DATABASE.close()