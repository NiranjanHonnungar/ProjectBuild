import csv
import xlrd
import pandas as pd


def fixBadZipfile(zipFile):
    f = open(zipFile, 'r+b')
    data = f.read()
    pos = data.find(b'\x50\x4b\x05\x06')  # End of central directory signature
    if (pos > 0):
        f.seek(pos + 22)   # size of 'ZIP end of central directory record'
        f.truncate()
        f.close()


filepath = "C:/Users/rajin/Downloads/atten.xlsx"
destinationFile = "C:/Users/rajin/Desktop/Output/output.xlsx"
fixBadZipfile(filepath)
writer = pd.ExcelWriter(destinationFile, engine="xlsxwriter")
attendance = pd.ExcelFile(filepath)
for name in attendance.sheet_names:
    print(name)
    df = pd.read_excel(filepath, name)
    for col in df.columns:
        if "Reason" in col:
            df = df.drop(col, axis=1)
    df.to_excel(writer, sheet_name=name)
    for column in df:
        column_width = max(df[column].astype(str).map(len).max(), len(column))
        col_idx = df.columns.get_loc(column)
        if 'Date' in column:
            writer.sheets[name].set_column(col_idx, col_idx, 30)
        else:
            writer.sheets[name].set_column(col_idx, col_idx, column_width)
writer.save()
