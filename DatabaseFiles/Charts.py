import matplotlib.pyplot as plt
import numpy as np

"""
def fundchart_horizontal():
    
    labels = ["Information Technology", "Consumer Discretionary", "Financials", "Healthcare", 
              "Communication Services", "Industrials", "Consumer Staples", "Energy", "Utilities", "Materials"]
    weights = [0.322, 0.117, 0.114, 0.099, 0.095, 0.082, 0.055, 0.031, 0.023, 0.018]

    plt.figure(figsize=(11, 13))  
    plt.barh(labels, weights, color="grey", edgecolor="white")
    plt.xlabel("Weight", fontname = "monospace", fontsize = 12, fontweight ='bold', color = 'white')
    plt.ylabel("Sectors", fontname = "monospace", fontsize = 12, fontweight ='bold', color = 'white')
    plt.title("Fund Allocation by Sector", fontsize=16, fontweight='bold', color='white', fontname = "monospace")
    plt.xticks(fontsize = 12, fontweight ='bold', color = 'white')
    plt.yticks(rotation = 45, ha='right', fontsize = 12, fontweight ='bold', color = 'white')
    plt.xlabel("Weight", fontsize = 12, fontweight ='bold', color = 'white')
    plt.ylabel("Sectors", fontsize = 12, fontweight ='bold', color = 'white')
    plt.barh(labels, weights, color="white", edgecolor="grey")
    plt.gca().spines['top'].set_color('white')      
    plt.gca().spines['right'].set_color('white')    
    plt.gca().spines['bottom'].set_color('white')  
    plt.gca().spines['left'].set_color('white')   

    plt.gca().spines['top'].set_linewidth(2)     
    plt.gca().spines['right'].set_linewidth(2)
    plt.gca().spines['bottom'].set_linewidth(2)
    plt.gca().spines['left'].set_linewidth(2)
    plt.savefig("../Images/fundchart_horizontal.png", transparent=True)
    plt.tight_layout(pad=9.0)
    plt.show()

if __name__ == "__main__":
    fundchart_horizontal()
"""

def fundchart_Donut():
    Labels = ["0.32% Info technology",
              "0.11% Consumer Discretionary",
              "0.11% Financials",
              "0.09% Healthcare",
              "0.09% Communication Services",
              "0.08% Industrials",
              "0.05% Consumer Staples",
              "0.03% Energy",
              "0.02% Utilities",
              "0.01% Materials"]
    data = [0.322, 0.117, 0.114, 0.099, 0.095, 0.082, 0.055, 0.031, 0.023, 0.018]

    wedges, texts = ax.pie(data, wedgeprops=dict(width=0.5), startangle=-40)

    bbox_props = dict(boxstyle="square,pad=0.3", fc="w", ec="k", lw=0.72)
    kw = dict(arrowprops=dict(arrowstyle="-"), bbox = bbox_props, zorder = 0, va = "center")
            
    
