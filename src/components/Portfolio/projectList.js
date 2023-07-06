import Proj1 from '../../assets/images/autospa.png'
import Proj2 from '../../assets/images/stocks.png'
import Proj3 from '../../assets/images/spacemath.png'

export const projectList = [
    {
        name: "AutoSpa Website",
        image: Proj1,
        skills: "HTML, CSS",
        description: "During my internship with EG America, I was tasked with the development of a website promoting the company's newest business venture. This was the first front-end software development project that I've completed.",
        url: "https://www.autospa-carwash.com/"
    },
    {
        name: "Stock Price Predictor",
        image: Proj2,
        skills: "Python, Pandas, Sci-Kit Learn, Seaborn",
        description: "During my senior year of college, I collaborated with two other classmates to perform data analysis and modeling on United States Stock Market Data. Using a random forest classifier, we were able to predict whether the price of an individual stock would increase or decrease on the following day. Ultimately, we acheived above a 50% precision rate with our model for the three stock tickers we chose to investigate.",
        url: "https://github.com/nicksach/Data_Mining/tree/main/final_project"
    },
    {
        name: "Space Math",
        image: Proj3,
        skills: "Javascript, HTML, JSON",
        description: "During my senior year of college, I had the opportunity to collaborate with three other CS majors on a design project. We chose to create a new method for inputting digital mathematical notation, aiming to replace the current solution: LaTeX. We created a program that parses user input, identifies math notation between the given delimiter, and outputs text containing neatly formatted math equations. The Alpha version is built into a simple static website and is capable of interpreting English, Spanish, and Chinese inputs, all while producing an accessible output that can be utilized by screen-reading tools.",
        url: "https://github.com/nicksach/SpaceMath"
    },
]