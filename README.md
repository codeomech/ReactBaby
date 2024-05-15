# ReactBaby
Namaste React (React learning)

lecture 7 (Routing)
UseEffect always called after every rendering of the HTML elememnts 
UseEffect have two thing one is callback function or code you want to perform after rendering of elemenets 
second is dependancy array 
1. If no dependancy array is given then Useeffect will called after every render 
2. if the dependancy array is empty [], useEffect is called on initial render (Just Once)
3. if we put something inside that array , So it would only change when that dependancy change
example => if btnName changes then it will be called only 

Routing
npm i react-router-dom
we have to import createBrowserRouter in our APP.JS
for routing we have to create routing configuarations

If you write rafce then it will automatically create react template

two types of routing
1) Service Side Routing
2) Client Side Routing (Single Page applications use client side routing mostly like the components are gettting replaced only and the page would reamin same , like we re not refreshing the page while navigating )

Dynamic Route (API)


Lecture 8 ClassBasedComponent()
lifecycle of parent -child 
Parent Constructor called
Parent Render called
Child Constructor
Child Render
Child Comp did Mount
Parent Comp did Mount

ComponentDidMount()
We call OUR API here only in Class Component as this to be called last by react after rendering so that's why it's a best option 


Custom hooks= first of all you have to follow the convention so you have to start the hook with "use"
And Custom hooks are functional component But they need two things like parameters what the variable is required and what they're going to return 
Example is = obtaning online status of User,

Also we're going to learn about lazy loading 
// chunking
// Code splitting
// Dynamic Bundling
so Parcel is a bundler it just make one JS file for our whole code, It's fine If your project has 10-15 components or a small scale application But If you're building large scale application then that file which have 100 of components become so heavy SO what we do we will divinde our JS file into a differnt JS file through lazy loading and we load that JS only when we navigate to that page 
Example As swiggy has two buisness like one is food delivery and one is instamart 
SO like swiggy engineers must separate thier whole JS into many JS files AS it's a large scale application 
