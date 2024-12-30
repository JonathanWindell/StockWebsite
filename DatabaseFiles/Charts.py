import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


def fundchart_horizontal():
    # Labels och vikter för diagrammet
    labels = ["Information Technology", "Consumer Discretionary", "Financials", "Healthcare", 
              "Communication Services", "Industrials", "Consumer Staples", "Energy", "Utilities", "Materials"]
    weights = [0.322, 0.117, 0.114, 0.099, 0.095, 0.082, 0.055, 0.031, 0.023, 0.018]

    # Skapa horisontellt stapeldiagram
    plt.figure(figsize=(8, 10))  # Justera för höjden av alla etiketter
    plt.barh(labels, weights, color="grey", edgecolor="white")
    plt.xlabel("Weight")
    plt.ylabel("Sectors")
    plt.title("Fund Allocation by Sector")
    plt.savefig("fundchart_horizontal.png", transparent = True)
    plt.tight_layout()
    plt.show()

if __name__ == "__main__":
    fundchart_horizontal()