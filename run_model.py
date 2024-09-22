import sys
import pickle
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier

try:
    model_file = open("model.pickle", "rb")
    model : KNeighborsClassifier = pickle.load(model_file)
except:
    print("model pickle.load error")

x = [sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6], sys.argv[7], sys.argv[8]]
# x = [50, 98, 1.83, 142, 6, 0, 35, 72] # based of form input
columns = ["Age", "BMI", "Glucose", "Pregnancies", "Insulin", "SkinThickness", "BloodPressure"]
features = ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'Age']
df = pd.DataFrame(columns=features)
df.loc[0] = [x[4], x[3], x[7], x[6], x[5], int(x[1])/(float(x[2])**2), x[0]]
prediction = model.predict(df)

print(prediction[0])
sys.stdout.flush()

