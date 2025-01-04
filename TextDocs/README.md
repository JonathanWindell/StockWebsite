Stock website:
This project was developed as a learning exercise to help me acquire and practice various web development and data analysis techniques. It was not intended as a production-level project but as an opportunity to gain hands-on experience with a variety of tools and technologies. The project features a basic stock analysis platform that displays stock prices, company information, earnings reports, and market sector charts.

Purpose:
   1: The primary goal of this project was to learn how to:
   2: Structure a database and manage data using PostgreSQL.
   3: Fetch data from APIs and store it in a relational database.
   4: Build a backend using Flask to serve data and manage routing.
   5: Create a dynamic and interactive frontend using HTML, CSS, and JavaScript.
   6: Generate data visualizations with Matplotlib to display stock and sector performance.
   7: Integrate frontend and backend through GET requests to show live data on the website.
   
Learning Outcomes:
This project helped me improve and develop skills in:

   1: Database Design: Structuring tables, defining relationships, and optimizing data storage.
   2: API Integration: Fetching data from external sources and storing it in a local database.
   3: Frontend Development: Building a clean and interactive user interface with HTML, CSS, and JavaScript.
   4: Backend Development: Implementing server-side logic using Flask, handling data requests, and serving dynamic content.
   5: Data Visualization: Generating interactive charts and graphs with Matplotlib.

Demo
You can view a live demo of the project at [Live Demo Link].

Tech Stack:
This project leverages the following technologies:
   1: Flask: Lightweight web framework to build the backend and handle HTTP requests.
   2: PostgreSQL: Relational database to store stock data, earnings reports, and other relevant information.
   3: Postman for API calls to structure database tables
   4: Jinja2: Templating engine for rendering dynamic web pages based on data from the server.
   5: JavaScript: Used for handling frontend interactivity and dynamic content rendering.
   6: CSS/HTML: For creating a clean, responsive, and user-friendly layout.
   7: Matplotlib: Used to generate charts for fund sectors.

How It Works:
   1: Backend (Flask): The Flask server handles the routing and logic for data fetching, processing, and rendering. It interacts with the PostgreSQL database to 
     fetch stock data and news articles.
   2: Database (PostgreSQL): The database stores stock prices, company earnings, quarterly and annual earnings. Data is fetched via API calls and stored in the database for 
     efficient retrieval. 
   3: Frontend: HTML and CSS are used to create a clean, responsive design. JavaScript is used to fetch and display real-time data from the backend, updating charts and stock information dynamically.


Installation/ Usage 
To use the project install following. 

1: Clone the project

2: Install following dependices in terminal
   1: VENV
   2: Flask
   3: Flask CORS
   4: Jinja2
   5: Psycopg2
   6: Werkzeug (Should install while downloading VENV)
3: Extensions in VSC
   1: Live server
   2: Python 
4: Windows applications
   1: Node JS
(All requirements can be found in requirements.txt file)
5: Database structure and API calls
   1: In this google drive file youo can find pictures of the structure of all tables and values of every column if you wish to copy this project to it's full extent
   link: https://drive.google.com/drive/folders/18NGqOODN0qvnev7C3T5KLFWjBSluiAGG?usp=drive_link
   2: You can extrct all data using the Alpha Vantage API calls. The API calls that are used are following.
      1: Intraday
      2: Company Overview
      3: Earnings (Note that Earnings are divided into Annual and Quarterly
      4: ETF profile & Holdings
   

6: To run project run following command
   1: .\venv\Scripts\activate
   2: python DatabaseServer.py
   3: Live server 

User features:
   1: Stock Price Tracking: Historical performance, and company summaries.
   2: Graphic Visualizations: Use charts powered by Matplotlib to analyze market data and sector performance.
   3: User Experience: Simple, intuitive interface designed for easy navigation and quick access to key stock market insights.

Known Issues
   1: The stock data may is not updated in real-time due to limitations with the free API. I've instead decided to make requests to API and then save all data in 
   a database given that this is only a learning project. 
   2: Some charts may not render properly if there is insufficient data. Example is Company Overview for TSLA & AMZN

   

   



   
