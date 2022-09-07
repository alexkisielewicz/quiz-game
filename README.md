// Issues:
// - choices stays selected on touch devices (can see it in DevTools too)
// - max possible score is 9 instead of 10 
// - no delay to see if the last 10th question was answered correctly
// - clicking should be disabled after choice is clicked


// FOR README: 
// mp3 source --> https://archive.org/details/tvtunes_6995
// local storage --> https://lage.us/Javascript-Pass-Variables-to-Another-Page.html
// audio files --> https://tuna.voicemod.net/search?search=bond
// audio files --> https://www.soundboard.com/sb/jamesbond
// audio files --> https://www.voicy.network/
// favicon --> https://icons8.com/
// randomIndex --> https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array



<h1 align="center">James Bond Quiz Game - JavaScript Project</h1>

### Developer: Aleksander Kisielewicz

![Am I Responsive](docs/mockup_responsiveness.png)

[View live website here](https://alexkisielewicz.github.io/Portfolio-Project-1/) :computer:

[View full page screenshot](docs/screencapture-portfolio-project-1.png)

This is Yoga Studio website created for Portfolio Project #1 (HTML&CSS) for Diploma in Full Stack Software Development at [Code Institute](https://www.codeinstitute.net). It is responsive across a range of devices and it is easy to navigate for site users. 
<br>
The users of this website will be able to find all importtant information about Yoga Studio such as about the studio, classes timetable, learning resources, photo gallery, booking form, contact and address information. The site is created for yoga enthusiasts who wants to join local studio or practice at home following on-line lessons.  

<br>

# Table of content 

*   [Project](#project)
    *   [Strategy/Scope](#strategyscope)
    *   [Site owner goals](#site-owner-goals)
    *   [Site user goals](#user-goals)
*   [User Experience (UX)](#user-experience-ux)
    *   [Color Scheme](#colour-scheme)
    *   [Typography](#typography)
    *   [Structure](#structure)
*   [Technology](#technology)
    *   [Languages used](#languages-used)
    *   [Frameworks, libraries & software used](#languages-used)
*   [Testing](#testing)
    *   [Accessibility](#accessibility)
    *   [Performance](#performance)
    *   [Validation](#validation)
    *   [HTML](#html)
    *   [CSS](#css)
    *   [Browser compatibility](#browser-compatibility)
    *   [Platforms/devices](#platformsdevices)
    *   [Bugs/known issues](#bugsknown-issues)
    *   [Responsiveness](#responsiveness)
*   [Deployment](#deployment)
*   [Credits](#credits)
    *   [Code](#code)
    *   [Media](#media)
    *   [Acknowledgements](#acknowledgements)



#   Project
##  Strategy/Scope

Yoga Studio website aims to provide essential information about the studio and its offer to the user in a clear and visually pleasing way. It targets people who are looking for information about yoga and want to join local club or start learning yoga on-line. 
<br>

 The content is presented on scrolling page with sections dedicated to categorised informations. The <b>primary objective</b> is to find new studio members by leading them to classes booking form. With this in mind website highlights studio key points and presents yoga catagories to help users determine which is the right fit for them. <b>The secondary objective</b> is to provide on-line learning resources, giving user a choice between basic and advanced techniques.  
<br>
To achieve the strategy goals I implemented following features:
* simple website layout with a menu bar sticked to the top of the viewport for easy navigation,  
* a carousel with caption images and call-to-action buttons forwarding user to relevant sections,
* imformative "About" and "Learn" sections, 
* multiple call-to-action buttons across the whole page,  
* "Sign-in!" section with booking form providing feedback on submission,    
* consistent images across the whole page to immerse the user in Site Owner's story. 
<br>

## Site owner goals

- to promote Yoga Studio in the local area by offering in-studio classes and on-line by providing learning resources, 
- to provide important information about Yoga Studio, such as: business background, offered classes, classes timetable, instructors silhouettes, contact information, address, opening times, social media profiles,  
- to provide multimedia showing the studio,  
- to provide booking form for the users allowing them to join the club and starting yoga activities,    
- provide image gallery with photos from the studio to promote yoga and encourage new people to join, 
- provide social meddia links to obtain new followers who become part of Yoga Studio community, 
- to provide website that looks well across a range of devices (responsiveness).  

##  User goals

- as a new user I want to:
    - navigate easily through the page, 
    - learn more about yoga, 
    - find information about Yoga Studio and it's offer, 
    - check classes timetable, 
    - check opening times,
    - check the photos from the studio to find out what's the "vibe" in there,  
    - book my classes/join the studio 
    - find out who teaches yoga, 
    - learn yoga techniques by watching tutorials, 
    - contact Yoga Studio, 
    - check address, get directions to Studio, 
    - follow Yoga Studio on social media, 

    <br>

- as a returning user I want to:
    -   navigate easily through the page, 
    -   check classes timetable,
    -   check opening times,  
    -   book yoga classes, 
    -   watch on-line yoga lessons,  
    -   contact Yoga Studio,
    -   get directions to Yoga Studio
    -   see the pictures from yoga sessions. 

<br>

#   User Experience (UX)

##  Colour Scheme

Colour palette was selected using coolors.co generator. 
For beast readability and clean look white colour was chosen for the bacgkround, "Black Chocolate #272722" for text. I chose "Light Salmon #FF9F76" colour for hover, buttons and navigation elements to stand out and delicate "Miami Pink #FFD9EA" for sections background. "French Bistre #7A6D5B" colour was used for text in the footer. "Light Gray #D0D2D6" was used for boxes shadow effect and form input hover.   

![Colour Scheme](docs/yoga_studio_color_palette.png)

<br>

##  Typography

-   The Raleway font is the main font used throughout the whole website with Sans Serif as the fallback.The Raleway is a clean, modern looking font and is attractive. It is sourced from [Google fonts](https://fonts.google.com/specimen/Raleway) and it's linked to css document via @import.  

![Google fonts](docs/raleway_font.png)

- [Type Scale](https://type-scale.com/) - tool were used to visualize different font sizes.

![Type Scale](docs/typescale.png)

<br>

##  Structure

### Wireframes - [View all wireframes - PDF file](https://github.com/alexkisielewicz/Portfolio-Project-1/tree/main/docs/yoga_studio_portfolio_project_1.pdf)



Page is designed in well known scrolling page style that users like. It provides fast access to information and immerses user in the story. Navigation bar is always visible in the viewport, that reduces number of clicks to reach desirable content. Website consists of following sections: 

## Navbar 

The navigation bar is customised Bootstrap Navbar. It contains custom logo made using Adobe Express on-line tool and 7 links to relevant sections. All menu elements are highlighted on hover and navbar is sticked to the top of the viewport when scrolling. On small screens navbar shows well-known "hamburger" icon and collapsible menu. 

![Navbar](docs/screenshot_navbar.png) 

## Carousel

Bootstrap carousel shows 3 slides with photos that cover whole viewport on big screens. Each caption consists of Header, short slogan and call-to-action button that is linked to relevant key section. Carousel slides cycle through automaticaly but site user can take control over this function thanks to slider buttons and active slide indicator.  

![Carousel](docs/screenshot_carousel.png)

## About
The About section is descriptive part of a website and provides information about company's goal and purpose. It also promotes yoga as activity that brings healt benefits to the user. The business key points are presented using row of icons. Use of negative space make it easy for user to read the content and focus on important parts. 

![About](docs/screenshot_about.png)

## Timetable
Timetable section contains of a table presenting information about weekly activities in the studio. The classes are cetagorised in gour levels: intro, beginner, advanced and pregnancy. The cells of each category are highlited in different colour. The table is scrollable horizontaly on smaller screens. Underneath the table there is call-to-action button linked to class booking form.     

![Timetable](docs/screenshot_timetable.png)

## Learn
In this section there is a short decription of company's offer. Bootstrap accordion feature has been used to accomodate five headers and paragpraphs describing different yoga styles and offered classes. For those who are looking for on-line learning resources, there are two categories of lessons - for beginner and advanced user. I imagine that full content of articles and video lessons would be available on those sub pages.     

![Learn](docs/screenshot_learn.png)

## Instructors
This section presents photo avatars of yoga instructors working in Yoga Studio. Sup pages would present full silhouettes of each instructor. 

![Instructors](docs/screenshot_instructors.png)

## Gallery
The image gallery contains visually consistent and eye-pleasing photographs that provide user an insight of how Yoga Studio looks like and what is the "vibe" in there. Photo grid is made of 5 columns by 3 pictures in each column. It takes all viewport width and is responsive on all devices. On a smaller screens up to 600px wide, a single photo takes all screen width. The grid layout idea was inspired by tutorial found on [w3cschhols.com](https://www.w3schools.com/howto/howto_js_image_grid.asp) 

![Gallery](docs/screenshot_gallery.png)

## Quote

The "Quote of the day" section displays a yoga related quote that should motivate user, attract him to yoga or persuade him to make a contact or booking.  

![Quote](docs/screenshot_quote.png)

## Youtube video
Video section presents full width iframe that contains YouTube video with relevant content. It links the user with business's YouTube channel and encourage him to interact longer with the content and build deeper interest in yoga and as a result - to become new customer. 

![Youtube](docs/screenshot_youtube.png)

## "Sign-in" - booking form
The booking form is a key point of a website where user is being led consequently to make interaction and join the business as a new customer. All form fields are marked as required and are validated. The form provides feedback in case the users input is incorrect. Date select field requires further script to prevent user from picking a date from the past. Upon successful completion of the form website provides user a feedback by transfering him to thankyou.html page.    

![Booking](docs/screenshoot_booking.png)

## Footer
The classic footer is preceded by Google Map section that indicated precise location of Yoga Studio. The footer contains of three columns, that provides information accordingly about address, contact and opening hours. The last column presents social media icons that encourage user to follow the business on various platforms. In bottom right corner of a website is  located an icon with "back to top" link.    

![Footer](docs/screenshot_footer.png)

## Thank you page
The page where user is transferred to upon successful completion of the booking form. User doesn't have to use browser "go back" button, the link to the main page is provided.      


![Thankyou](docs/screenshoot_thankyou.png)

## HTTP 404 Page
An error page in case that user tries to open a website that cannot be found on the web server. User doesn't have to use browser "go back" button, the link to the main page is provided.      

![404](docs/features_404.png)


#   [Technology](#technology)
    
##  [Languages used](#languages-used)

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
    
##  [Frameworks, libraries & software used](#languages-used)

- [Bootstrap 5.2.0:](https://getbootstrap.com) - Bootstrap was used to create website grid and to make it responsive. Other features used and customised: 
    * Navbar,
    * Carousel,
    * Acordion,
    * Shortcode for spacing elements and table cell background colour (eg. px-5, warning). 
- [Balsamiq](https://balsamiq.com/) - Balsamiq was used to create the [wireframes](#structure) during the design process.

- [Coolors.co](https://coolors.co/) - was used to create color palette. 

- [Google Fonts](https://fonts.google.com/specimen/Raleway) - Google fonts were used to import the 'Raleway' font into the style.css file which is used on all pages throughout the project.

- [Type Scale](https://type-scale.com/) - a type tool used to visualize font size. 

- [Google Maps](https://www.google.com/maps) - was used to embed map with Yoga Studio location. 

- [YouTube](https://www.youtube.com) - was used to embed video on a website. 

- [Font Awesome:](https://fontawesome.com/) - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.

- [Git](https://git-scm.com/) - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

- [GitPod](https://www.gitpod.io) - IDE used to code the project. 

- [Visual Studio Code for Windows](https://code.visualstudio.com/) - IDE used to code the project.  

- [GitHub](https://github.com/) - GitHub is used to store the project's code after being pushed from Git.

- [Adobe Photoshop](https://www.adobe.com/ie/products/photoshop.html) - Photoshop was used to resize the pictures. 

- [Adobe Express](https://express.adobe.com/) - online service used to create logo. 

- [Audioeye.com](https://www.audioeye.com/color-contrast-checker) - used to analyse contrast. 

- [BD_sizer](https://bd-sizer.en.softonic.com/) - used for resizeing pictures in the gallery.

- [TinyPNG](https://tinypng.com/) - used for images compression.

- [Convertio.co](https://convertio.co/jpg-webp/) - online JPG to WEBP converter. 

- [CSS Beautifier](https://www.freeformatter.com/css-beautifier.html) - used for formatting css file for optimal readability. 

- [Am I Responsive](https://ui.dev/amiresponsive) - online tool used to create mockup to present responsive design of this project. 

- [Go Full Page](https://gofullpage.com/) - Google Chrome extension used to capture full page screen shot.  

- [Lightshot](https://app.prntscr.com/) - Google Chrome extension used to capture screenshots for this README document. 

- [Lighthouse](https://developers.google.com/web) - Google webdev tool used for performance testing. 

- [Wave Web Accessibility Evaluation Tool](https://wave.webaim.org/) - used to validate accessibility. 

- [Favicon.io](https://www.favicon.io) - tool used to create favicon. 


<br>

#    Testing

##   Accessibility

Foreground and background color contrast check was done using [Audioeye.com](http://www.audioeye.com) online tool.

![Contrast 1](docs/contrast1.png) 

![Contrast 2](docs/contrast2.png) 


[WAVE](https://wave.webaim.org/) Web Accessibility Evaluation Tool was used to check accessibility. It reported one error "Missing alternative text". It is related to carousel background photo linked via CSS stylesheet. Alternative text cannot be set in this case. Four alerts are minor and related to justified text in the paragraphs. 

![](docs/validator_wave.png)

##   Performance

 [Lighthouse](https://developers.google.com/web) - Google webdev tool used for performance testing. <br>

![Lighthouse](docs/lighthouse.png)

##   Validation

###   HTML

- [W3C Markup Validator](https://validator.w3.org/nu/) - validation service used. 

:x: index.html - first result found 2 errors that refer to unclosed element and missing open element. <br>
Three warnings refer to lack of heading in sections such as Gallery, YouTube video or Google Map and also recommend using h2-h6 headers instead of h1 used in Carousel caption.  

![First test](docs/validator_html_errors.png) 

:heavy_check_mark: index.html - after error fixes, final result: ![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Falexkisielewicz.github.io%2FPortfolio-Project-1%2F)

![Final test](docs/validator_html_final.png)

Result for 404.html page :heavy_check_mark:
![404.html](docs/validator_404_thankyou.png) 

Result for thankyou.html page :heavy_check_mark:
![thankyou.html](docs/validator_html_thankyou.png) 

###   CSS

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)  - validation service used. 

- [Custom stylesheet](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Falexkisielewicz.github.io%2FPortfolio-Project-1%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en-EN) -  No Error Found. :heavy_check_mark: 

- [Bootstrap stylesheet](https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css) - has errors :x: 

![CSS Validator](docs/validator_css.png)

##   Browser compatibility

Website was tested manually on following browsers: Google Chrome, Edge, Firefox, Safari, Brave. The results were satisfactory.   

##   Platforms/devices 

Website was tested manually on Apple Iphone X, Apple iPad, Apple Macbook Air, Samsung Galaxy Tab S7+, Ultrawide display 3440x1440 and classic 16:9 2560x1440 display. The results were satisfactory.  

## Responsiveness 

I confirmed that this website is responsive and all the functions are displayed correctly and booking booking form work fine.   

##   Bugs/known issues

There was a minor issue spotted. Google Dev tools and Apple iPAD display position of "call to action" button in different way. My intention was to place it underneath the carousel caption text. Ipad displays it on top of the caption.  

![Bug](docs/bug1.png)

#   Deployment
    
The project was deployed to GitHub Pages using the following steps: 

1. Log in to GitHub and locate the [GitHub Repository 
Portfolio-Project-1](https://github.com/alexkisielewicz/Portfolio-Project-1)
2. Locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "Pages" in "Code and automation" section.
4. Under "Source", click the dropdown called "Select branch:" and select "Main", click the dropdown called "Select folder" and select "/root".
5. The page will automatically refresh and you receive message "Your site is published at https://alexkisielewicz.github.io/Portfolio-Project-1/". Result below: 

![Deployment](docs/screenshot_deployment.png)

<br>

#   Credits

##  Code
-   [StackOverflow](https://stackoverflow.com/questions/27053633/how-to-make-an-array-of-audio-files-randomly-in-javascript) - the method to shuffle array and get random index. Used to get random audio files and questions from the arrays.
-   Mentor - Reuben Ferrante helped me finding solution for choices buttons, that were still clickable after user selected one choice. He edited the code with first "if" conditional - code in the file script.js starts at line 235. He also added function that loops through the buttons and check if they are selected. Depends on their state it adds or removes "disable" attribute. Code in the file script.js starts at line 214.

##  Media

-   All images used were sourced from free stock photos [StickPNG.com](https://www.stickpng.com/)
-   Quiz questions sources: 
    * [Entertainment.ie](https://entertainment.ie/movies/movie-news/17-quiz-questions-about-james-bond-457692/)
    * [UltimateQuizQuestions.com](https://www.ultimatequizquestions.com/james-bond-quiz/)
    * [Metro.co.uk](https://metro.co.uk/2021/09/30/james-bond-27-pub-quiz-questions-to-test-your-007-knowledge-15340805/)

## Learning resources

- [Code Institute course and learning platform](https://codeinstitute.net/)
- [The book "JavaScript: The Definitive Guide, 7th Edition](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/)
- [StackOverflow](https://stackoverflow.com/)
- [W3Schools](https://www.w3schools.com/js/default.asp)

##  Acknowledgements

-   My Mentor Reuben Ferrante for helpful feedback and guidance at all stages of the project. 
-   Code Institute Slack Community for being invaluable knoledge base.    


## Disclaimer
-   <b>James Bond Quiz Game was created for educational purpose only.</b> 