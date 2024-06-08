#!/usr/bin/env python
import random
import pandas as pd
import sys
import re

def get_entries_from_excel(file_path):
    df = pd.read_excel(file_path)
    # Clean the entries to remove numerical prefixes, punctuation, and leading/trailing whitespace
    df['Name'] = df['Name'].apply(lambda x: re.sub(r'^[\d.]+', '', str(x)).encode('ascii', 'ignore').decode('ascii').strip())
    return df['Name'].tolist()

def choose_winner(entries):
    return random.choice(entries)

if __name__ == "__main__":
    file_path = sys.argv[1]  # Get the file path from the command line arguments
    entries = get_entries_from_excel(file_path)
    winner = choose_winner(entries)
    print(winner)  # Output only the winner's name
