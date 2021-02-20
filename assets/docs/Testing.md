> ### Testing User Stories

> These following tests were conducted to test the experience of each user outlined within the User Stories section of my README file [README.md] (https://github.com/sruss07/MS02_Photo_Scotland/blob/master/README.md)
>
>  * Users performing searches on mobiles and tablets
>    * Users, on entering the page, will be greeted by a navbar which contains the page title at the top left, a hamburger icon menu at the top right, with an animated photo carousel below.
>    * Users may scroll down the entire page for an initial viewing of the page. 
>    * Users would select the hamburger icon menu to open and view the links within this menu.
>    * The first link users would select would be the 'About Scotland' link. The page would scroll to the 'About Scotland' section, where users would learn about the purpose of the page and relevant facts and figures about Scotland.
>    * The second link users would select would be the 'Locations' link. The page would scroll to the 'Locations' section. Here, users would encounter the 'Select a Location' pull down menu button and a map containing pins located at each photography location.
>    * Users can then select the 'Select a Location' pull down menu button and select their desired location. Information on the selected location would then become visible to the user. 
>    * Links to Wikipedia articles for each location are also available for users to select below each location information section.
>    * When selected, the location pins on the map display the name of each pinned location. 
>    * The third link users would select would be the 'Contact Us' link. The page would scroll to the 'Contact Us' form. This form  would allow users to send enquiries about the page, locations and any trips that may be available. The form also has an option that allows the user to join the pages mailing list.
>    * Finally, fixed to the bottom of the page is the footer section. Contained within the footer are the pages social media links. In the future these social media sites will contain more location information, trip information, reviews and photo galleries.

> ### HTML
>
>  * Ran HTML code through [HTML Validator](https://validator.w3.org/) 
>  * Received error messages for no p element in scope but a p end tag seen. Error does not seem to cause any visible issues.
>
> ### CSS
> * Ran CSS code through [CSS Validator](https://jigsaw.w3.org/css-validator/)
>   *  No errors found.
> 
> ### JAVASCRIPT
>
>  * General
>    * Tested all variables by logging them to the console after each instance.
>    * Errors were found with maps functioning correctly. These errors were fixed accordingly with maps now functioning as planned.
>
> * Navigation & Intro
>   * Navigation Bar navbar links. All navbar links were clicked to ensure smooth scrolling to the relevant section of the website. Scrolling was consistently smooth to and between each section and from top to bottom and from bottom to top.
>   * Hambuger menu on mobile devices. Checked that the navbar menu links of Home, About Scotland, Locations and Contact were clickable in the dropdown menu. All links performed as desired, with the menu closing upon clicking the navbar link.
>   * Carousel image gallery. Checked to ensure a smooth transition between each image. Checked file names and code and ensured images loaded in a timely manner.

> * Photography Locations Section
>    * Clicked the "Seelect Location" dropdown button and all Location buttons appear as expected.
>    * Clicked each location button from the dropdown and information paragraphs and maps appear as expected.
>    * Clicked each reserve button from the dropdown and the relevant information andon map markers for each location and all popup information appear as expected.

>  * Contact Section
>    * Tested completed form submission and submit button changes colour confirming email has been sent. Performed as expected.
>    * Confirmed that email had been sent when completing and submitting form.
>    * Form resets to blank fields after form submission has been completed. 

>  * Footer Section
>    * Tested that all the Social Media icon links opened their respective external websites when clicked. Performed as expected.
 

> ### GENERAL (Site Testing on live page)
> 
>   * Navigation
>     * Clicked Navigation bar Logo/Text and confirmed it returns to Home/Intro.
>     * Clicked About Scotland on the navbar and scrolls to correct section.
>     * Clicked Locations on the navbar and scrolls to correct section.
>     * Clicked Contact on the navbar and scrolls to correct section.

>   * About Section
>     * Clicked on dropdown button and then associated external excerpt link and all open in a new tab in the browser as expected.

>   * Contact section
>     * Clicked Submit button without any form entries. Expected warning popup retuned of "Please fill out this field". Further, tested all required form fields for same.
>     * Checked that Radio buttons give option for either/or selection, and not both.
>
> ### RESPONSIVENESS
>
>   * DevTools - Devices tested across a range of widths: iphone5(320px) | Samsung S5 (360px) | iPhone 6/7/8/X (375px) | iPhone 6/7/8 Plus (414px) | iPad (768px) | iPad Pro (1024px) | Laptop (1200px) | Large Desktop screen (1920px)
>   * Viewed site on above range (including Responsive mode) on various browsers: Google Chrome, Firefox, Opera, Safari 