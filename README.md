## Prestige-remont site project on Reatc/Gatsby with Wordpress content

![](screenshot.jpg)

To view a static site, **[click here](https://престиж-ремонт.рф/)**.
To change site content, **[open Wordpress](https://wp.престиж-ремонт.рф/wp-login)**.

Just change `src/main.js` to get your personal data.
To change gatsby settings including Wordpress API, open gatsby-config.js

## Main page sections

✔️ Header
✔️ Work
✔️ About
✔️ Promotion
✔️ Offers
✔️ Skills
✔️ Footer

### Wordpress Pages

1. Enter a title.
2. Add content.
3. Change a page slug. Use only preset page url names (slug):
   Header - index
   Work - work
   About - about-us
   Promotion - promotion
   Offers - offers
   Skills - skills
   Footer - contacts

## Portfolio pages

It's a page with img-carousel created for all Works on main page

### Wordpress Posts

New post is a new portfolio work.

1. Enter a title.
2. Add excerpt as option.
3. Add featured Image as cover in Work section.
4. Insert projects photos as gallery Gutenberg Block in content.
5. Change slug if you want in latin (not necessary).

## How To Use

Before working with a project you need to install the Node.JS and Yarn.
From your command line, clone and run prestige-remont project:

```bash
# Clone this repository to your project's folder
$ git clone https://github.com/Starck43/prestige-remont.git

# Go into the repository
$ cd prestige-remont

# Install dependencies
$ yarn

# Start development server
$ gatsby develop
```

#### Personalize page content in `/src/main.js` & modify it as per your need.

## Deployment

When you are done with development, you should commit changes and push them back to github.

#### Deploying to Github

```bash
$ git add ./
$ git commit -m "some changes added"
$ git push origin
```

If you want to view a compiled site on github.io, please, read [Deploying on Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.

#### Deploying to Netlify

Site deploys and builds automatically and is hosted directly with Netlify by linking prestige-remont repository on Github.

[Netlify site](https://app.netlify.com)

[![Netlify Current Status](https://api.netlify.com/api/v1/badges/003a376c-79c6-4a0f-8137-c627e253d9c9/deploy-status)](https://app.netlify.com/sites/prestige-remont/deploys)

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/starck43/prestige-remont)

For more information, read [hosting on Netlify](https://create-react-app.dev/docs/deployment/#netlify).

## Technologies Used

- [React](https://reactjs.org/)
- [Gatsby](https://www.gatsbyjs.com/)
- [Bootstrap React](https://react-bootstrap.github.io/)
- [Wordpress](https://wordpress.org/)
