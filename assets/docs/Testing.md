> ### HTML
>
>   * Ran HTML code through [HTML Validator](https://validator.w3.org/) 
>   * Received error messages for no p element in scope but a p end tag seen. Error does not seem to cause any visible issues.
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
>   * Carousel image gallery. Checked to ensure a smooth transition between each image. Checked file names and a code and ensured images loaded in a timely manner.



>   * Clicked each country button and relevant API info (country info and flag) replaces the placeholder image and text as expected.
> * Game Reserve section
>    * Clicked "1. Select a Country" button and dropdown list of country buttons appears as expected.
>    * Clicked each country button from the dropdown and relevant image, webcam and map focus appears as expected.
>    * Clicked "2. Select a Reserve button and dropdown list of reserve buttons appears as expected.
>    * Clicked each reserve button from the dropdown and the relevant information and map focus as expected for all reserves on each country.
>    * On all of the above, ensured that relevant fields are reset once a new selection is made.
>    * Started webcam feed for each country and ensured that it stopped/reset on button clicks from all other buttons and selections, except for the reserve buttons. This was specifically chosen to keep playing whilst looking at reserves in the same country.
>    * Clicked all markers in the map (for each reserve in each country) and all display relevant information expected.
>     * Further to above, each website URL on marker info opens in a new tab in the browser as expected.

>  * Contact Section
>    * Tested completed form submission and modal appears confirming email has been sent.
>    * Confirmed that form resets to blank fields after form submission has been completed.
>  * Passed all code through [JSHINT](https://jshint.com/) and the following were rectified as a result. 
>    * Changed country api values to dot notation.
>    * Added let keyword to api variables for better practice (i.e. _for (let language in langData)_, instead of _for (language in langData)_)
>
> ### GENERAL (Site Testing on live page)
> 
>   * Navigation
>     * Clicked Navigation bar Logo/Text and confirmed it returns to Home/Intro.
>     * Clicked About on the navbar and scrolls to correct section.
>     * Clicked Game Reserves on the navbar and scrolls to correct section.
>     * Clicked Contact on the navbar and scrolls to correct section.
>   * About Section
>     * Clicked URL _href_ from "Info supplied by **REST Countries API**" and site opened on the same tab in the browser. Added target="_blank" (which was missing). Retested and opens in a new tab in the browser as desired.
>     * Clicked on each link for "[Excerpt from Official Park Website.]" and all are opening in a new tab in the browser as expected.
>   * Contact section
>     * Clicked Submit button without any form entries. Expected warning popup retuned of "Please fill out this field". Further, tested all required form fields for same.
>     * Checked that Radio buttons give option for either/or selection, and not both.
>
> ### RESPONSIVENESS
>
>   * DevTools - Devices tested across a range of widths: iphone5(320px) | Samsung S5 (360px) | iPhone 6/7/8/X (375px) | iPhone 6/7/8 Plus (414px) | iPad (768px) | iPad Pro (1024px) | Laptop (1200px) | Large Desktop screen (1920px)
>   * Viewed site on above range (including Responsive mode) on various browsers: Google Chrome, Firefox, Opera, Safari 
>   * Viewed on physical devices: small phone (320px) | large phone (414px) | large tablet (768px) | Medium laptop (1366px) | Large Desktop screen (1920px)