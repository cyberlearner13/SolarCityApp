
<center>
<h1>Solar City App</h1>
<a href="https://glacial-wave-21085.herokuapp.com/">SolarCity App Website</a>
<h2>Full Stack MongoDB, Node and React</h2>
<h2>PROJECT DEADLINE: FEB 24 2017
<h2>PROJECT DURATION: FEB 12 2017 - FEB 24 2017 (12 DAYS)

<h2>Quick Start</h2>
<h6>1. clone the repo</h6>
<h6>2. run npm install</h6>
<h6>3. run npm run dev</h6>
<h6>4. run npm start</h6>

<h5>How to use the website</h5>
<a href="https://glacial-wave-21085.herokuapp.com/">https://glacial-wave-21085.herokuapp.com/ To view the form and all customers list(on the right)</a><br>
<a href="https://glacial-wave-21085.herokuapp.com/customer/1">https://glacial-wave-21085.herokuapp.com/customer/1 To view a specific user id(on the right of the screen)</a>

<h5>How to use the API</h5>
<a href="https://glacial-wave-21085.herokuapp.com/api/customers">https://glacial-wave-21085.herokuapp.com/api/customers To view the api JSON of all customers</a><br>
<a href="https://glacial-wave-21085.herokuapp.com/api/customers/1">https://glacial-wave-21085.herokuapp.com/api/customers/1 To view the api of a specific customer</a>

<h2> Tech Stack</h2>
Tech Stack :computer: | Description :clipboard:
    --- | ---
    Node JS | To create the node web server and API, server-side code for the application using JS
    Express JS | Node.js framework to create powerful and useful features
    React | A highly popular JavaScript library for UI development(single page front-end app)
    MongoDB | A relational database to store in/out JSON through RESTful API
    
Dependencies | Description :clipboard:
    --- | ---
    Express | The node web server will render initial static HTML from our HTML from our front-end React components.
    Mongo | The node API server talks to the MongoDB database
    React | Frontend for UI development, to describe the user interface
    ReactDOM | The library to render the user interface on both the frontend and the backend

Dev Dependencies | Description :clipboard:
    --- | ---
    Webpack | This is the tool I used to translate modular code into something that the browser understands(modular code everywhere)
    Babel (Webpack loader) | This is to transform the JSX extension code into what React understands. 
    Nodemon | When I change things in the node project, nodemon will monitor our file and auto-restart the server 

<h2>Description</h2>

<p>The architure is split between a back-end and a web front-end. This project is a Node web server and Node API server. I used React on the frontend to consume data through the user interface(single page app). Furthermore, I used MongoDB database to read and write data by providing an in/out RESTful API in JSON. Seperation of react components in a Model-View-Controller style architechture architecture</p>

<p>I have used pure react, so no Redux or even React Router(I used the page State instead). I have adopted the server-render first strategy and made sure my react frontend application is isomorphic so that it renders initial HTML for all supported routes. This gives me an advantage with SEO, which is very important.</p>

<span>** Note how I transform the source files into a bundled file for the browser 'public/bundle.js'. I configured webpack to work with the project structure in the webpack.config.js file on root level</span><br>
<span>** Note the .babelrc file on the root level is to configure babel to work with our selected presets.</span><br>
<span>** Note the index name is used to reference the starting point in every directory.</span><br>
<span>** Note that in the start script I use nodemon execution wrapper and babel-node instead of node because I want the code to work with babel and nodemon. Then we run the babel-loader for every file that end with a .js.</span>

<p>The public directory hosts my static assets like HTML, Javascript, and CSS files that will be loading on the client. Express serves these public files directly with its static middleware</p>

<h2>Problem Description</h2>
<p>To build an online SolarCity sales web application that accepts a customer's name, age, address, and why they are interested in Solar.</p>
<h3>Requirements</h3>
<p>1. The architecture should be split between a back-end and a web front end.</p>
<p>2. Provide an in/out RESTful API in JSON</p>
<p>3. Use a backend database MongoDB to store customer information JSON data</p>
<p>4. **Full-stack**: includes both fron-end and back-end</p>
<p>5. A REACT single page front-end app that consumes data from the API</p>
<p>6. Utilize a simple build script function using npm start</p>

<h2>My technical experience</h2>
<h5>I built a dozen web apps using pure node js(including very strong experience with functional progamming and call-backs) and express js framework (1 year experience)</h5>
<h5>I have in depth experience building MERN web apps and using REACT as my front end UI framework (6 months experience)</h5>
<h5>I am very comfortable using MySQL DBs or NoSQL DBs such as MongoDB and google's Firebase realtime database</h5> 


<h2>If more time...</h2>
<p>If I had more time on this project I would improve the UI/UX of the website and create a backend internal tool for SolarCity sales reps to manage customers information from online individuals that indicate interest in Solar Panels.</p>
<p>Additionally, I would consume the API I built to build a mobile app using REACT Native</p>

<h2>Work I'm proud of</h2>
<a href="https://play.google.com/store/apps/details?id=com.GamifyStudios.SuperHeroJump&hl=en">Mobile Game on play store</a>

<a href="https://www.quora.com/profile/Talab-Hussein">>Check out my Quora profile to view my answers to questions in CS</a>

<a href="www.talabhussein.me">Personal Website</a>

</center>
