from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

class Post(db.Model):
    __tablename__ = 'posts'
    ## ask what determines what environment we are in and why line 8 is important
    if environment == "production":
        __table_args__= {'schema' : SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    community_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("communities.id")))
    cause_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("causes.id")))
    goal_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("goals.id")))
    event_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("events.id")))
    text = db.Column(db.String(1000))
    created_at = db.Column(db.DateTime(timezone=True), default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), default=func.now())
