
# Inlämningsuppgift  
by **Sabina Andersson** och **Tomas Fridekrans**

***

For this assignment we chose to replicate [Tier](https://www.tier.app)  

## Design
__Breakpoints__  
We found two main breakpoints at *768px* for mobile and *928px* for desktop and tablets  

__Media__ is all mixed formats and taken from Tier themselves through inspect>sources>wp-content> various folders.

__Media__ we've used:
- Video (.mp4)
- Images (.PNG, .JPG and .SVG)

__Colors__  are from a screen shot and then color-picker in photoshop.  
Main colors:   
- dark-blue: #00103c;  
- teal-blue: #69d2aa;  
- regular-blue: #001c6e;  
- white: #ffffff  
- black: #000000  

__The font__ used is 'Euclid Square', which was found in the wp-content folder as well.  
Downloaded from [FontsHub](https://fontshub.pro/font/euclid-square-download)

__Animation__  
There were some fun animations on some of the link buttons,  
which we tried to replicate, and the spin of the hamburgermenu.  
A little javascript was needed for this to work.

__StyleSheets__  
We have a main style file, **style.css**,  in which we import all stylefiles for the different sections of the site.

**About the herosection**  
We could not get this section to be fully responsive when using multiple layers of images, moving parts, texts and buttons. We chose to do this with an image instead as it represents the design of the original website more than our attempts.

On form email input we kept the focus outline for accessability.

In the topnav-menu (when clicking on the hamburger menu in the header) the original site animates in from left to right at 750px width (instead of the "original" right to left), after this animation they have missed to adapt the lines under the ul/li so they continue along the whole container. We kept the underlines in the "correct" way during all responsive modes.

## Screenshots for mobile, tablet, desktop  

![Tier Mobile Design](/screens/TierMobile.png)  
![Tier Tablet Design](/screens/TierTablet.png)  
![Tier Desktop Design](/screens/TierDesktop.png)


