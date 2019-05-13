<h1> <a href="https://learn-to-dance.herokuapp.com/">Dance-School</a> </h1>

<a id="backToTop"></a>

<p>Applied Technologies: Javascript, React, Redux, Express, Mongoose</p>

<p>Simple platform allows users to enroll in dance school and register for dance courses.</p>
<ul>

<li><a href="#screenShots">ScreenShots</a></li>
<li><a href="#apiRoutes">API routes</a></li>
</ul>




<section id="screenShots">
<a href="#backToTop">Back to the Top</a>
  <h2>ScreenShots</h2>

<h3>Landing Page</h3>
  <img src="https://github.com/Vlacross/Re-Cap-Client/blob/master/siteImages/Landing.jpeg?raw=true" object-fit="contain" alt="app-landingPage-screenshot">

<h3>App Info</h3>
  <img src="https://github.com/Vlacross/Re-Cap-Client/blob/master/siteImages/AppInfo.jpeg?raw=true" object-fit="contain" alt="app-info-screenshot">

<h3>Bio</h3>
<img src="https://github.com/Vlacross/Re-Cap-Client/blob/master/siteImages/Bio-OurStory.jpeg?raw=true" object-fit="contain" alt="dance-school-bio-screenshot">

<h3>Login</h3>
<img src="https://github.com/Vlacross/Re-Cap-Client/blob/master/siteImages/Login.jpeg?raw=true" object-fit="contain" alt="login-screenshot">

<h3>Dashboard</h3>
<img src="https://github.com/Vlacross/Re-Cap-Client/blob/master/siteImages/dashboard.jpeg?raw=true" object-fit="contain" alt="dashboard-screenshot">

<h3>Offered Courses</h3>
<img src="https://github.com/Vlacross/Re-Cap-Client/blob/master/siteImages/OfferedCourses.jpeg?raw=true" object-fit="contain" alt="offered-courses-screenshot">

<h3>LandingPage</h3>
<p>Mobile</p>
<img src="https://github.com/Vlacross/Re-Cap-Client/blob/master/siteImages/mobile/landingM.jpeg?raw=true" object-fit="contain" alt="app-landingPage-mobile-screenshot">

<h3>App Info</h3>
<p>Mobile</p>
<img src="https://github.com/Vlacross/Re-Cap-Client/blob/master/siteImages/mobile/appInfoM.jpeg?raw=true" object-fit="contain" alt="app-info-mobile-screenshot">

<h3>Single Course View</h3>
<p>Mobile</p>
<img src="https://github.com/Vlacross/Re-Cap-Client/blob/master/siteImages/mobile/SingleCourseM.jpeg?raw=true" object-fit="contain" alt="single-course-info-mobile-screenshot">

<h3>Login</h3>
<p>Mobile</p>
<img src="https://github.com/Vlacross/Re-Cap-Client/blob/master/siteImages/mobile/loginM.jpeg?raw=true" object-fit="contain" alt="app-login-mobile-screenshot">

<h3>Menu Logged Out</h3>
<p>Mobile</p>
<img src="https://github.com/Vlacross/Re-Cap-Client/blob/master/siteImages/mobile/navMenuLoggedOut.jpeg?raw=true" object-fit="contain" alt="nav-menu-logged-out-mobile-screenshot">

<h3>Menu Logged In</h3>
<p>Mobile</p>
<img src="https://github.com/Vlacross/Re-Cap-Client/blob/master/siteImages/mobile/navMenuLoggedinM.jpeg?raw=true" object-fit="contain" alt="nav-menu-logged-in-mobile-screenshot">

</section>


<section id="apiRoutes">

<h1>API Routes</h1>
<a href="#backToTop">Back to the Top</a>

<p>The api for the app has 3 main routes from the server root</p>
<h2>Root(/)</h2>

<h3>accounts</h3>
  <p>/remove(allows users delete their accounts)</p>

<h3>courses</h3>
  <p>details:id(allows the app-client query details for a specific course)</p>
  <p>remove:id(allows a user to drop out of a specific course)</p>
  <p>signup:id(allows a user tosign up for a specific course)</p>

<h3>login</h3>
  <p>newUser(allows users to create an account)</p>
  <p>refresh(refreshes the users jwt which hyrdates the clients user-state data)</p>



<h3>API Routes Tree</h3>

<img src="https://github.com/Vlacross/Re-Cap-Client/blob/master/siteImages/dance-school-api.png?raw=true" alt="api-routes-in-terminal-tree-diagram">

<a href="#backToTop">Back to the Top</a>
</section>


