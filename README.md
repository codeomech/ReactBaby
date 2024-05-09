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



