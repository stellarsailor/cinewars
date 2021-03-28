![Imgur](https://i.imgur.com/TBK31Oi.png)

# Cine Wars: The Rise of Minsu

### Live Link : https://cine-wars.com
Cine Wars is a React app that lists characters from Star Wars series with Gaming UI.

## Motivation
Even though this web app is a simple project with two view pages, I always thought that websites should have any interesting feature. 
Therefore I tried to add some storyline. :smile:

Imagine, you are a high-grade person from the Galactic Empire, you are on board the Star Destroyer, and you are looking for someone's information.
You asked your subordinate(Stormtrooper) to prepare the person database. 

That is the main plot of this website and I added a dialogue box to make users be absorbed in having a conversation with Stormtrooper.

## Tools
- __TypeScript__
- React.js with CRA
- Functional Components with __React Hooks__
- __Redux__, Redux-thunk
- Custom style and layout with styled-component and react-grid-system

   > I tried to not depend on design libraries like BootStrap or Material-UI. I prefer CSS-in-JS style component using styled-component or emotion.
- TDD with __testing-library(rtl)__
- Deployed to __AWS S3 / Cloudfront / Route53__ with a custom domain

## Features
List Page
- [x] Display a list of characters
- [x] Each item should display the name, birth year, height, and mass
- [x] The list should use pagination
- [x] Each item should be clickable and bring you to the detail page

Character Page
- [x] Show all the properties of the character
- [x] Back button to the list page

## Additional Features
- [x] Loading Indicator 

  > I made a custom loading indicator as an image of spinning Galactic Empire logo.
- [x] Consistency between list and detail page with global state management

  > I managed state of a page number, character list of the page, and dialogue text with Redux. 
  I prefer to use DUCKS pattern, but I am willing to learn more about other global state management style or other libraries like MobX, Constate and Recoil.
- [x] Custom Header Logo Image / Favicon
- [x] Responsive and compatible with various browser(Chrome, Safari, Edge, and Samsung Internet, however, Firefox has [minor issue](#issues).)

  > 4k might not compatible.

![Imgur](https://i.imgur.com/XunM6a3.png)
- [x] Background Music Player (Galactic Empire Theme) / Star Destroyer

  > I still can't forget the moment I first saw the scene that Star Destroyer appeared in "A New Hope". I tried to implement that feeling with the bgm.
  > I enjoyed it a lot making this project :blush: and if you look at my Github username, you can see why I love space movies. :star:
- [x] Added every character's portrait image and Lazy Loading with Skeleton

  > SWAPI does not provide character's image, so I added image one by one and it took really long time. :dizzy_face:
- [x] Different dialogue text by every character! It parses colors as well. [See `composeDialog()`](https://github.com/stellarsailor/cinewars/blob/main/src/pages/Character/composeDialog.ts)

![Imgur](https://i.imgur.com/eDiLepi.png)

## Issues
- [ ] iOS Safari audio player has a bug

  > I guess it is due to Safari's policy related to user interaction. 
- [ ] When loader size is inherit by parents, it resizes viewport and sometimes makes scrolls. 

  > I guess it is due to `diplay: flex` and react-grid-system library.
- [ ] In Firefox web, the main list table is not centered.

## Problem and solutions
1. The fetched data doesn't have id column and I firstly thought using sequential index as a key but `id: 17` data was missing. 
I decided to use 'url' column for the key by `slice()`, because every url has same front part. `https://swapi.dev/api/people/[:id]`
I could use regex to parse the id, but `slice()` is a faster option.

2. Pagination lock is implemented when page is equal to 1, `< Prev` button is locked, 
and when next fetching page is not existed and current list length of this page is less than 10, that is the last page, `Next >` button is locked.

3. To give gaming like user experience, I had to add Typewriter animation in the dialogue box. Firstly, I tried css `animation: typing` and failed. 
I guess due to `display: flex`, but couldn't make it. Secondly, I tried to keep update the state by adding one character, it was difficult dealing with asynchronous functions. 
I ended up using the library 'react-typist'. I want to develop typewriter animation by myself if I have additional time.

4. I wanted to make different dialogue text including colors by a character I considered how to implement this, the first approach was a bit wrong. (you can see [here](https://github.com/stellarsailor/cinewars/commit/7e96a5445b13822883c3a3a28013014530a35960))
I ended up making html tag string and convert to html tag. 
I could use `dangerouslySetInnerHTML` simply but I know it could occur XSS security problem, so I used the library 'react-html-parser'.
It easily renders the component from html string.

5. There is http network issue with `fetch()` in [the testing code](https://github.com/stellarsailor/cinewars/blob/main/src/pages/Character/Character.test.js).
It looks like could solve by changing method from `fetch()` to `axios()`. However, in this project, I had to use fetch API.

   > I used testing-library(rtl) for the first time, it feels like rtl usually focuses on the result of rendering. It would be useful to test from the perspective of the user.
My testing code is beginner level, I know the importance of TDD and want to learn and practice more about it.

6. `CORS problem. Mixed Content: The page at 'https://mycloudfronturl.cloudfront.net/character/5' was loaded over HTTPS, but requested an insecure resource 'http://swapi.dev/api/people/5/'. 
This request has been blocked; the content must be served over HTTPS.` 
There was an CORS error but I was sure that I did fetch request on https only by `replace('http', 'https')`.
However, the fact is that the SWAPI is served at http and my cloudfront server is loaded https, so the browser blocks the request.
since I have no control over the api, I added meta tag `<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">`. It solves.

7. If I spend additional time in terms of performance. I think I would add a caching feature because the character data is not changed very often in the database.
Therefore if I accumulates the characters list data in Redux state additionally when a user navigates the page from 2 to 8, 
it would get rid of inefficient fetching when the user navigates pages from 8 to 3 again.


## Timeline :date:
- 24 Mar - Boilerplate, basic fetch logic
- 25 Mar - Redux, main fetch logic, design&layout
- 26 Mar - Added bgm player, favicon, other design factors.
- 27 Mar - TDD cases for view pages, bug fixes
- 28 Mar - Deployment, documentation
