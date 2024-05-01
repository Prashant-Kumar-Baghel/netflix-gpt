// To get logo image url just go to (Inspect->Network->img) 
const LOGO_URL="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
const LOGIN_URL="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
const USER_ICON="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
const IMG_URL = "https://avatars.githubusercontent.com/u/115722509?v=4"
const options = {//we need options in many places hence put inside constants file.
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGJlMzNjYjRhOWVkYmZjMGRiMTg1ZWQ1NGQzYWY4NSIsInN1YiI6IjY2MmQ3MjkyMDNiZjg0MDEyYWVhNmYxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9URPTVROdC05HyezlxOxHRgIc1gp2icCnG-dmXZFGZs'
    }
  };
  const poster_IMG_CDN="https://image.tmdb.org/t/p/w500";
export {LOGO_URL,LOGIN_URL,USER_ICON,IMG_URL,options,poster_IMG_CDN};//Always use constants instead of string.

