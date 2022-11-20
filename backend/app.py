from skimage import io
from skimage.transform import resize
import s3fs

import numpy as np
from flask import Flask
from flask import request
import cv2

import numpy as np
from numpy import newaxis
import pickle
import cv2
from os import listdir

from tensorflow import keras
import tensorflow as tf
from keras import backend as K
from keras.preprocessing import image

import time

import mysql.connector

import boto3

cnx = mysql.connector.connect(user='admin', password='hackwestern',
                              host='Hack-western-9.chu7zm5ttrq2.us-east-1.rds.amazonaws.com',
                              database='locationData')
cursor = cnx.cursor()
app = Flask(__name__)

model = keras.models.load_model(r"model-v3.h5")

# model = keras.models.load_model("./model-v4-1.h5")
prevImage = None
while True:
    url = "http://mydrip.ca/hackwestern/temp.jpg"
    image = io.imread(url)
    image = np.asarray(image, dtype="uint8")
    image = cv2.resize(image, (640, 480))
    image = np.expand_dims(image, axis=0)
    if not (image == prevImage).all():
        pred = int(model.predict(image)[0][0])
        print(pred)
        ts = time.time()
        query = 'INSERT INTO CountPeople (partID, ctr) VALUES (1, ' + str(pred) + ')'
        print(query)
        cursor.execute(query)
        cnx.commit()
        prevImage = image
    time.sleep(10)

