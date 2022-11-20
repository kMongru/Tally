import csv
from csv import writer
from collections import defaultdict

weekday = [0,0,0,0,0,0,4,3,2,1,2,3,4,6,7,8,9,13,15,13,8,2,0,0]
weekend = [0,0,0,0,0,0,2,3,4,5,7,6,12,13,15,14,8,3,3,2,2,1,0,0]
byday = [14, 17, 25, 9, 12, 11, 12]

def pct(val: int) -> float:
    return val / 100

def getData(file: str) -> dict():
    
    res = defaultdict(list)
    
    with open(file, newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter=',', quotechar='|')
        next(reader)
        for row in reader:
            res[row[0]].append(row[1:])
            
    return res

def writeRow(row, file, state='w'):
    with open(file, state) as fd:
        wr = writer(fd)        
        wr.writerow(row)

def filterData(storeId: str, sales: dict) -> "list[str]":
    
    track = defaultdict(int)
    allSales = []

    for weekDept in sales[storeId]:
        track[(weekDept[0], weekDept[-1])] += float(weekDept[1])

    for (day, dep), tot in track.items():
        
        curDay = 0
        while curDay < 3:
            for i in range(0, 24):
                allSales.append([storeId, dep, day, i + 1, tot * pct(byday[curDay]) * pct(weekend[i])])
            curDay += 1
        
        while curDay < 7:
            for i in range(0, 24):
                allSales.append([storeId, dep, day, i + 1, tot * pct(byday[curDay]) * pct(weekday[i])])
            curDay += 1   
            
    return allSales             
            
# segments = getData(r'C:\Users\walee\OneDrive - The University of Western Ontario\Desktop\Projects\automatic-fiesta\data-cleaning\segments.csv')
END_FILE = r'C:\Users\walee\OneDrive - The University of Western Ontario\Desktop\Projects\automatic-fiesta\data-cleaning\hourlySalesData.csv'

sales = getData(r'C:\Users\walee\OneDrive - The University of Western Ontario\Desktop\Projects\automatic-fiesta\data-cleaning\sales.csv')

writeRow(['Store', 'Department', 'Day', 'Hour', 'Total'], END_FILE)

for store in range(1, 4):
    for i, r in enumerate(filterData(str(store), sales)):
        print(i)
        writeRow(r, END_FILE, 'a')