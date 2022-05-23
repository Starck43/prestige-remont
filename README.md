# престиж-ремонт.рф

[![Current Deploy Status](https://api.netlify.com/api/v1/badges/003a376c-79c6-4a0f-8137-c627e253d9c9/deploy-status)](https://app.netlify.com/sites/prestige-remont/deploys)

![](screenshot.jpg)

1. To view a static site **[click here](https://престиж-ремонт.рф/)**.
2. To open a site's code **[visit repository](https://github.com/Starck43/prestige-remont)**.
3. To add/change content **[open Wordpress](https://wp.престиж-ремонт.рф/wp-login)**.


## Site code

SSR site written on React/Gatsby with headless CMS and hosted on Netlify server

 - `gatsby-config.js` - to change plugin's settings and metadata for SEO
 - `src/main.js` - to change additional personal data and API url
 - `src/pages/index.js` - main page index.html
 - `src/templates/portfolio.js` - porfolio pages template (output files: <project-name.html>)

### Main page sections

✔️ Header
✔️ Work
✔️ About
✔️ Promotion
✔️ Offers
✔️ Skills
✔️ Footer

### Send email

For sending message on server it uses custom [Wordpress API](https://wp.престиж-ремонт.рф/wp-json/contact/v1/send).


## CMS Content

> As CMS was chosen Wordpress for content (hosting on reg.ru)
> To change PHP API code open functions.php in active WP theme folder

### Wordpress Pages

Pages link uses for add/change content on main page divided on several sections. Every new page is a section on main page.
In admin menu go to [Pages > New Page]:

1. Enter a title
2. Change content
3. Change a page slug. Use only preset page url names:
   - Header (index)
   - Work (work)
   - About (about-us)
   - Promotion (promotion)
   - Offers (offers)
   - Skills (skills)
   - Footer (contacts)

### Wordpress Posts

It's a page with images carousel created for all Works. A new post it's a new portfolio page.
In admin menu go to [Posts > New Post]:

1. Enter a title
2. Add excerpt as option
3. Add featured Image as cover in Work section on main page
4. Insert projects photos as gallery Gutenberg Block in content
5. Replace slug on your individual one in latin if you want (not necessary)

### Wordpress API

API for sending email on site, go to the file: **[functions.php](sftp://server184.hosting.reg.ru/var/www/u1352939/data/www/wp.xn----itbbcj1ahhckeini.xn--p1ai/wp-content/themes/twentytwentyone-child/functions.php)**


## How To Develop

Before working with a project you need to install the Node.JS, Git and Yarn.
In terminal clone and run prestige-remont project:

```bash
# Clone this repository to your project's folder
$ git clone https://github.com/Starck43/prestige-remont.git

# Go into the repository
$ cd prestige-remont

# Install dependencies
$ npm i (or yarn)

# Start development server
$ gatsby develop
```


## Deployment

When you are done with development you should commit changes and push them back to github.

#### Deploying to Github

```bash
$ git add ./
$ git commit -m "some changes added"
$ git push origin
```

If you want to view a compiled site on github.io, please, read [Deploying on Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Technologies Used

- [React](https://reactjs.org/)
- [Gatsby](https://www.gatsbyjs.com/)
- [Bootstrap React](https://react-bootstrap.github.io/)
- [Wordpress](https://wordpress.org/)
- [Netlify](https://www.netlify.com/)
