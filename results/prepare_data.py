import os
import re
import pandas as pd

home = here = os.getcwd()
os.chdir(here + '/output/data/nexus6p')
here = os.getcwd()

dirs = os.listdir()

out_frame = pd.DataFrame({'browser': [], 'language': [], 'algorithm': [], 'consumption': []})


def aggregate_run_files(directory, browser, lang, alg):
    files = os.listdir(directory)
    for f in files:
        if f == "Aggregated.csv":
            continue
        data = pd.read_csv(directory+f)
        df = pd.DataFrame(data)
        consumption = 0

        # Calculate AUC
        for i, row in df.iterrows():
            power = row['Battery Power* [uW] (Raw)']
            time = row['Time  [ms]']
            if (i > 0) :
                time = time - df.iloc[i - 1]['Time  [ms]']

            if pd.isna(time) or pd.isna(power):
                continue

            # power in microWatts, time in milliseconds
            consumption += ((power/1000000) * (time/1000))
        out_frame.loc[len(out_frame.index)] = [browser, lang, alg, consumption]
    
for d in dirs:
    if re.search("page-rank", d):
        r = "^.*-(page-rank)-build-([\w]*)-run-html$"
    else:
        r= "^.*-([\w]*)-build-([\w]*)-run-html$"

    groups = re.search(r, d).groups()

    aggregate_run_files(d+'/chrome/trepn/', 'chrome', groups[1], groups[0])
    aggregate_run_files(d+'/fenix/trepn/', 'firefox', groups[1], groups[0])

out_frame.to_csv(home + '/results.csv')
