# To use script just run python image-store-by-url.py <urls txt file path> <destination absolut path>

import argparse
import requests
import os

parser = argparse.ArgumentParser(description="Download images from a list of URLs")
parser.add_argument("file", help="The file containing the list of URLs")
parser.add_argument("destination", help="The destination path to save the images")

args = parser.parse_args()

with open(args.file, "r") as f:
    urls = [url.strip() for url in f.readlines()]

for url in urls:
    response = requests.get(url)
    if response.status_code == 200:
        filename = url.split("/")[-1]
        filepath = os.path.join(args.destination, filename)
        with open(filepath, "wb") as f:
            f.write(response.content)
            print(f"Image saved as {filename}")
    else:
        print(f"Failed to retrieve image from {url}")