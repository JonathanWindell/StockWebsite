import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


def fundchart():
    labels = ["Information Technology", "Consumer Discretionary", "Financials", "Healthcare", "Communication Services",
              "Industrials", "Consumer Staples", "Energy", "Utilities", "Materials"]
    weight = [0.322, 0.117, 0.114, 0.099, 0.095, 0.820, 0.055, 0.310, 0.230, 0.018]

    plt.figure(figsize=(10, 6))
    plt.bar(labels, weight, color = "skyblue", edgecolor = "black")
    plt.bar(labels, weight)
    plt.xlabel("Sectors")
    plt.ylabel("Weight")
    plt.title("Fund Chart")
    plt.tight_layout()
    plt.show()

if __name__ == "__main__":
    fundchart()