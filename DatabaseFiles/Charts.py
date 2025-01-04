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

def fundchart_circle():
    # Labels and data
    Labels = ["Info Technology", "Consumer Discretionary", "Financials", 
              "Healthcare", "Communication Services", "Industrials", 
              "Consumer Staples", "Energy", "Utilities", "Materials"]
    data = [0.322, 0.117, 0.114, 0.099, 0.095, 0.082, 0.055, 0.031, 0.023, 0.018]

    # Create the figure and axis with the specified proportions
    fig, ax = plt.subplots(figsize=(11, 9), subplot_kw=dict(aspect="equal"))

    # Function to display percentages and absolute values
    def func(pct, allvals):
        absolute = int(np.round(pct / 100.0 * np.sum(allvals) * 100))  # Scale up to full percentage
        return f"{pct:.1f}%\n({absolute:d}%)"

    # Create the pie chart with percentage display
    wedges, texts, autotexts = ax.pie(
        data,
        autopct=lambda pct: func(pct, data),
        textprops=dict(color="w"),
        startangle=-40,
        wedgeprops=dict(width=0.4)  # Create a "donut" effect
    )

    # Move the percentages slightly outward
    for autotext in autotexts:
        autotext.set_position((autotext.get_position()[0] * 1.3, 
                               autotext.get_position()[1] * 1.3))

    # Add a legend
    ax.legend(wedges, Labels,
              title="Sectors",
              loc="center left",
              bbox_to_anchor=(0.9, 0, 1.8, 1))

    # Customize the percentage text size and style
    plt.setp(autotexts, size=8, weight="bold")

    # Add a title
    ax.set_title("Fund Allocation by Sector", fontsize=16, fontweight='bold', color='white', fontname="monospace")

    # Save the chart as a transparent PNG file
    plt.savefig("../Images/fundchart_circle.png", transparent=True, bbox_inches="tight", dpi=300)
    plt.show()

# Run the function
if __name__ == "__main__":
    fundchart_circle()
