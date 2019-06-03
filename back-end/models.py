from peewee import *
from flask_login import UserMixin
from flask_bcrypt import generate_password_hash

DATABASE = PostgresqlDatabase('barhap', user='adminmatt', password='password')

class User(UserMixin, Model):
    username = CharField(unique=True)
    email = CharField(unique=True)
    city = CharField()
    state = CharField()
    password = CharField()

    class Meta:
        database = DATABASE

    @classmethod
    def create_user(cls, username, email, city, state, password, **kwargs):
        email = email.lower()
        try:
            cls.select().where(
                (cls.email==email)
            ).get()
        except cls.DoesNotExist:
            user = cls(username=username, email=email, city=city, state=state)
            user.password = generate_password_hash(password)
            user.save()
            return user
        else:
            raise Exception("user with that username/email already exists ya dingus!!")



def initialize():
    DATABASE.connect()
    DATABASE.create_tables([User], safe=True)
    DATABASE.close()


# possibly need to add lat and lng fields to User class. Holding off for now because don't want ot break anything.
# users can create profiles, login, logout, and keep lat/lng data saved, but when server restarts it goes ka-put.
# but that info comes from front end api, isn't user inputted, sooooooo.........????????

#THINGS I TRIED:
#added lat and lng to the User class, updated w/ new barhapp (2 p's) database
#added lat and lng to the create_user() parameters
#added lat=lat and lng=lng to the user=cls() parameters
#everything always ends the same way, CORS error dealing with Access-Control-Allow-Origins