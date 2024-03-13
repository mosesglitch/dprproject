import os
from io import BytesIO
from sqlalchemy import Column, String,ARRAY, Integer,Text,DateTime,func,event,orm
from flask import  jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import joinedload,mapper
import json
from faker import Faker
import random
from  datetime import datetime
import base64
import requests
# from .. import app
# app = Flask(__name__)
database_path= 'postgresql://paps:GTIip521Y8jinrGs7Ewe9jypD832oQe7@dpg-cnolm5a1hbls73867kb0-a.oregon-postgres.render.com/dprdb'  # SQLite database
db = SQLAlchemy()


def setup_db(app):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
# tz_kenya = pytz.timezone('Africa/Nairobi')

def db_drop_and_create_all():
    db.drop_all()
    db.create_all()

    
# Define the Project model
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    client = db.Column(db.String(100), nullable=False)
    site = db.Column(db.String(100), nullable=False)
    completion_date = db.Column(db.Date, nullable=True)
    project_number = db.Column(db.String(50), nullable=False, unique=True)

# Define the DailyProgressReport model
class DPR(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    weather = db.Column(db.String(100), nullable=True)
    images = db.relationship('Image', backref='progress_report_id', lazy=True)
    works = db.Column(db.Text, nullable=True)
    lost_days = db.Column(ARRAY(db.Integer), nullable=True)
    issues = db.Column(ARRAY(db.Text), nullable=True)

# Define the Image model
class ProgressImages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    dpr_id = db.Column(db.Integer, db.ForeignKey('dpr.id'), nullable=False)
    url = db.Column(db.String(255), nullable=False)

# Define the Work model
class Works(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    dpr_id = db.Column(db.Integer, db.ForeignKey('dpr.id'), nullable=False)
    activity = db.Column(db.String(100), nullable=False)
    planned_qty = db.Column(db.Integer, nullable=True)
    achieved_qty = db.Column(db.Integer, nullable=True)
    cumulative = db.Column(db.Integer, nullable=True)
    total_scope = db.Column(db.Integer, nullable=True)
    remarks = db.Column(db.Text, nullable=True)

# if __name__ == '__main__':
    # Create the database tables
    # db.create_all()
