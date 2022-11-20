import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import seaborn as sns
import matplotlib.pyplot as plt
import shutil
from sklearn.model_selection import train_test_split
import tensorflow as tf
from tensorflow import keras
from os import listdir
import cv2
from keras.preprocessing import image


import zipfile
with zipfile.ZipFile('drive/MyDrive/images.npy.zip', 'r') as zip_ref:
    zip_ref.extractall("images")

# Preparing the target values
label_df = pd.read_csv('drive/MyDrive/labels.csv')
label_df.columns = ['id' , 'people']
labels = np.array(label_df['people'])

# Load images
img = np.load('images/images.npy')


# Splitting dataset 80/20 for train and test
x_train, x_test, y_train, y_test = train_test_split(img, labels, test_size=0.2)

# Layering CNN model
model = tf.keras.Sequential([
    
    tf.keras.layers.Conv2D(64, (3,3), input_shape=(480,640,3), 
                           activation=tf.keras.activations.relu),
    tf.keras.layers.MaxPool2D(2,2),
    tf.keras.layers.Conv2D(128, (3,3), activation=tf.keras.activations.relu),
    tf.keras.layers.MaxPool2D(2,2),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(128, activation=tf.keras.activations.relu),
    tf.keras.layers.Dense(1)
    
])

model.compile(loss=tf.keras.losses.Huber(), optimizer=tf.keras.optimizers.Adam(lr=1e-6), metrics=['accuracy'])
model.summary()

# Train model
model.fit(x_train, y_train, validation_data=(x_test, y_test), epochs=50, batch_size=8)

model.save('drive/MyDrive/model-v3.h5')

model = keras.models.load_model("drive/MyDrive/model-v3.h5")

results = model.evaluate(x_test, y_test, verbose=0)