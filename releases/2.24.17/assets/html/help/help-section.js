let eNavigator,eFooterNavigator,ePrev,eNext,eCurrentPageTitle,currentPage,pages;function createNavigatorHeader(){const e=requireElementById("navigator");return e.innerHTML='<nav>\n    <a id=\'back-button\' class=\'nav-button\'>\n        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">\n            <path fill="#636b6e" fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"/>\n        </svg>\n    </a>\n    <div id=\'currentPage\'>\n        <h1 id=\'currentPageText\'></h1>\n    </div>\n    <a href=\'./\' class=\'nav-button\'><svg class=\'svg-icon\' width="17" height="17" viewBox="0 0 4.4979 4.4979" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n    <g transform="translate(-97.231 -62.155)" fill="#636b6e"><path d="m97.959 64.03v2.623h1.078v-1.3229h0.81009v1.3229h1.078v-2.623z" stop-color="#000000" stroke-width=".28265" style="-inkscape-stroke:none;paint-order:stroke markers fill"/><path transform="matrix(.32946 0 0 .21753 97.238 61.632)" d="m13.624 14.214c-0.27271 0.47235-13.363 0.47235-13.636 0-0.27271-0.47235 6.2724-11.809 6.8178-11.809s7.0905 11.336 6.8178 11.809z" stop-color="#000000" stroke-width=".26458" style="-inkscape-stroke:none;paint-order:stroke markers fill"/></g></svg></a>\n</nav>',e}function requireElementById(e){const t=document.getElementById(e);if(!t)throw new Error(`Required element with id "${e}" not found in the page.`);return t}function createFooterNavigator(){const e=requireElementById("footer-navigator");return e.innerHTML="<a id='prev' class='nav-button'>previous page</a>\n<span> </span>\n    <a id='next' class='nav-button'>next page</a>",e}function discoverPages(){const e=document.getElementsByClassName("page");pages=[];for(let t of e)pages.push({key:t.id,title:t.getAttribute("data-title")});return console.log(pages),pages}function showPageBasedOnCurrentHash(){currentPage=location.hash.slice(1),showPage(currentPage)}function showPage(e){currentPage=e;let t=pages.findIndex((t=>t.key===e));-1===t&&(t=0,e=pages[0].key),eCurrentPageTitle.innerText=pages[t].title;const n=pages[t-1],a=pages[t+1];n?(ePrev.innerText="< "+n.title,setVisible(ePrev,!0)):(ePrev.innerText="< ",setVisible(ePrev,!1)),a?(eNext.innerText=a.title+" >",setVisible(eNext,!0)):(eNext.innerText=" >",setVisible(eNext,!1));const r=document.getElementsByClassName("page");for(let t of r)setVisible(t,t.id===e)}function navigate(e){let t=pages.findIndex((e=>e.key===currentPage));-1===t&&(t=0),t+=e,t<0&&(t=0),t>=pages.length&&(t=pages.length-1),window.location.hash=pages[t].key}function setVisible(e,t){t?e.classList.remove("hidden"):e.classList.add("hidden")}window.addEventListener("DOMContentLoaded",(function(){pages=discoverPages(),eNavigator=createNavigatorHeader(),eFooterNavigator=createFooterNavigator(),eBack=requireElementById("back-button"),ePrev=requireElementById("prev"),eNext=requireElementById("next"),eCurrentPageTitle=requireElementById("currentPageText"),ePrev.addEventListener("click",(()=>{navigate(-1)})),eNext.addEventListener("click",(()=>{navigate(1)})),eBack.addEventListener("click",(()=>{history.back()})),showPageBasedOnCurrentHash()})),window.addEventListener("hashchange",showPageBasedOnCurrentHash);