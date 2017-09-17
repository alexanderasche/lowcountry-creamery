/*============================================================================

  SITEWIDE SCRIPTS

==============================================================================*/

/*  Body  */
const body = document.body;
const HTML = document.querySelector("html");
let pageTitle = document.querySelector('meta[property="og:title"]');
pageTitle = pageTitle && pageTitle.getAttribute("content");
pageTitle = pageTitle.replace(/\s+/g, '-').toLowerCase();
document.body.classList.add(pageTitle);


/*  Header & Navigation  */
const topNavigation = document.getElementById("navigation-top");
const mainNavigation = document.getElementById("main-navigation");
topNavigation.appendChild(mainNavigation);

const socialLinks = document.querySelector("#navigation-top #sqs-social");
let socialText = document.createElement('p');
socialText.innerHTML = "Follow Us!";
socialLinks.prepend(socialText);

const mobileHeader = document.createElement('div');
const mobileNavLink = document.getElementById("mobile-navigation-label");
mobileNavLink.innerHTML = "Menu";

mobileNavLink.onclick = () => {
  HTML.style.overflowY = HTML.style.overflowY === 'hidden' ? '' : 'hidden';
}


/*  Banner  */
const bannerContent = document.getElementById("page-title-wrapper");
const bannerSeal = document.createElement('img');
bannerSeal.src = "https://static1.squarespace.com/static/59936f8e6b8f5b8a32d76c22/59bc0db86f4ca32f36fcc628/59bc481046c3c4ee1975524c/1505511447997/lowcountry-creamery-seal.png?format=750w";
bannerContent.prepend(bannerSeal);

if (pageTitle === "home") {
  const bannerTitle = document.getElementById("page-title");
  bannerTitle.innerHTML = "Fresh <i class='fa fa-star' aria-hidden='true'></i> Sustainable <i class='fa fa-star' aria-hidden='true'></i> Local";
  
  const scrollDown = document.createElement("button");
  scrollDown.innerHTML = "<i class='fa fa-chevron-down' aria-hidden='true'></i>";
  scrollDown.id = "scroll-down";
  bannerContent.appendChild(scrollDown);

  scrollDown.onclick = () => {
    const bannerWrapper = document.getElementById("banner-area-wrapper");
    const bannerArea = document.getElementById("banner-area");
    const bannerOffset = parseInt(window.getComputedStyle(bannerWrapper, null).getPropertyValue("margin-top"));
    const bannerHeight = parseInt(window.getComputedStyle(bannerArea, null).getPropertyValue("height"));
    const scrollOffset = bannerOffset + bannerHeight;
    $('html, body').animate({ 
      scrollTop: scrollOffset
    }, 400, 'swing');
  }

  const bannerFooter = document.createElement("div");
  bannerFooter.innerHTML = "<h2>We have a passion <span>for dairy</span></h2>";
  bannerFooter.id = "banner-footer";
  const bannerBottom = document.getElementById("navigation-bottom");
  bannerBottom.parentNode.insertBefore(bannerFooter, bannerBottom);
}