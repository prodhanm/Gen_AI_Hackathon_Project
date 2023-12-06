import os

class Config:
    # SECRET_KEY = os.environ.get('SECRET_KEY')
    # print(SECRET_KEY)
    SECRET_KEY = "lkasjdf09ajsdkfljalsiorj12n3490re9485309irefvn,u90818734902139489230"

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    DATABASE_URL = os.environ.get('DATABASE_URL')

    if DATABASE_URL:

        SQLALCHEMY_DATABASE_URI = DATABASE_URL.replace('postgres://', 'postgresql://')
        
    else:
        SQLALCHEMY_DATABASE_URI = 'sqlite:///dev.db'

    SQLALCHEMY_ECHO = True
