!function e(t,n,r){function a(i,c){if(!n[i]){if(!t[i]){var d="function"==typeof require&&require;if(!c&&d)return d(i,!0);if(o)return o(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[i]={exports:{}};t[i][0].call(u.exports,function(e){var n=t[i][1][e];return a(n||e)},u,u.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)a(r[i]);return a}({1:[function(e,t,n){"use strict";document.body;var r=document.querySelector("html"),a=document.querySelector('meta[property="og:title"]');a=(a=a&&a.getAttribute("content")).replace(/\s+/g,"-").toLowerCase(),document.body.classList.add(a);var o=document.getElementById("navigation-top"),i=document.getElementById("main-navigation");o.appendChild(i);var c=document.querySelector("#navigation-top #sqs-social"),d=document.createElement("p");d.innerHTML="Follow Us!",c.prepend(d);document.createElement("div");var l=document.getElementById("mobile-navigation-label");l.innerHTML="Menu",l.onclick=function(){r.style.overflowY="hidden"===r.style.overflowY?"":"hidden"};var u=document.getElementById("page-title-wrapper"),m=document.createElement("img");if(m.src="https://static1.squarespace.com/static/59936f8e6b8f5b8a32d76c22/59bc0db86f4ca32f36fcc628/59bc481046c3c4ee1975524c/1505511447997/lowcountry-creamery-seal.png?format=750w",u.prepend(m),"home"===a){document.getElementById("page-title").innerHTML="Fresh <i class='fa fa-star' aria-hidden='true'></i> Sustainable <i class='fa fa-star' aria-hidden='true'></i> Local";var s=document.createElement("button");s.innerHTML="<i class='fa fa-chevron-down' aria-hidden='true'></i>",s.id="scroll-down",u.appendChild(s),s.onclick=function(){var e=document.getElementById("banner-area-wrapper"),t=document.getElementById("banner-area"),n=parseInt(window.getComputedStyle(e,null).getPropertyValue("margin-top"))+parseInt(window.getComputedStyle(t,null).getPropertyValue("height"));$("html, body").animate({scrollTop:n},400,"swing")};var p=document.createElement("div");p.innerHTML="<h2>We have a passion <span>for dairy</span></h2>",p.id="banner-footer";var f=document.getElementById("navigation-bottom");f.parentNode.insertBefore(p,f)}},{}]},{},[1]);