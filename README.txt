
I implemented a web application for voting simulation as a UI project.
You can find the full details of the simulation here: https://www.student.cs.uwaterloo.ca/~cs349/f15/a4.html

Important:
- There is a web service that is used in my application that given parameters of a normal distribution, number of voters and a center of opinion, it will simulate an election. To be able to use my application, the web service should be downloaded from the link I provided above.
- This application is fully responsive and the only library used is Jquery.
- I used the MVC design pattern. In the Js directory you can see my Model, controller and View files.



Explanation: 
In the inputs for simulating elections, there is a field called resolution. If you put n, the size of each "centre of opinion" will be n x n. So if you put 1 (which is the default) you get the best resolution. 

Note: The simulations will appear at the buttom of the page after you you click on "Get the simulation"

Note: The website is responsive with respect to the size of the window. If the screen is big enough all the graphs will be inline,
      if it's medium sized the 4 graphs will be in 2 rows on top of each other
      if the screen is small, the graphs will be vertical
