import matplotlib.pyplot as plt

def fundchart_horizontal():
    # Labels och vikter för diagrammet
    labels = ["Information Technology", "Consumer Discretionary", "Financials", "Healthcare", 
              "Communication Services", "Industrials", "Consumer Staples", "Energy", "Utilities", "Materials"]
    weights = [0.322, 0.117, 0.114, 0.099, 0.095, 0.082, 0.055, 0.031, 0.023, 0.018]

    # Skapa horisontellt stapeldiagram
    plt.figure(figsize=(11, 13))  # Justera för höjden av alla etiketter
    plt.barh(labels, weights, color="grey", edgecolor="white")
    plt.xlabel("Weight", fontname = "monospace", fontsize = 12, fontweight ='bold', color = 'white')
    plt.ylabel("Sectors", fontname = "monospace", fontsize = 12, fontweight ='bold', color = 'white')
    plt.title("Fund Allocation by Sector", fontsize=16, fontweight='bold', color='white', fontname = "monospace")
    plt.xticks(rotation = 45, ha='right', fontsize = 12, fontweight ='bold', color = 'white')
    plt.yticks(rotation = 45, ha='right', fontsize = 12, fontweight ='bold', color = 'white')
    plt.xlabel("Weight", fontsize = 12, fontweight ='bold', color = 'white')
    plt.ylabel("Sectors", fontsize = 12, fontweight ='bold', color = 'white')
    plt.barh(labels, weights, color="white", edgecolor="grey")
    plt.gca().spines['top'].set_color('white')      
    plt.gca().spines['right'].set_color('white')    
    plt.gca().spines['bottom'].set_color('white')  
    plt.gca().spines['left'].set_color('white')   

    plt.gca().spines['top'].set_linewidth(2)      # Sätt tjockleken på ramen till 2
    plt.gca().spines['right'].set_linewidth(2)
    plt.gca().spines['bottom'].set_linewidth(2)
    plt.gca().spines['left'].set_linewidth(2)
    plt.savefig("../Images/fundchart_horizontal.png", transparent=True)
    plt.tight_layout(pad=4.0)
    plt.show()

if __name__ == "__main__":
    fundchart_horizontal()

