[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# 14-the-tech-blog

This is a full stake Blog website called "The Tech Blog". Users can sign-up or log in to their dashboard to post/edit/delete their blog, or visit the home page and view others blogs. User can leave a comment on others blogs too.

## Table of Contents
1. [Setup](#setup)
2. [Design](#design)
3. [Links](#links)
4. [Demo](#demo)
5. [License](#license)

<a name="setup"></a>

## Setup

Do not need to set up if you visit the live site: [link](https://aqueous-scrubland-00021.herokuapp.com/), otherwise please follow the below insturction.

Please make sure there's a database selected. You will need to run commands in mysql shell to execute the schema.sql under the "db" folder. Log in to your mysql, then:

```
soruce ./db/schema.sql;
```

Once you have the database created, you can feed the app with existing seeds in the command line and start the app with below command (not necessary):

```
npm install
npm run seed
npm start
```

<a name="design"></a>

## Design

* MVC (Model-View-Controller) model is built in this website
* The Model manages how the database looks like for the website
* The View manages how the front page looks like using Handlebars, javascript and CSS
* The Controller manages how the back end structure and what requests from the user do
* User can log in, log out, sign in to the blog website
* User can post, edit, delete a blog, leave comment under other blogs

<a name="links"></a>

## Links

Check out the live Heroku deployed site: [The Tech Blog](https://aqueous-scrubland-00021.herokuapp.com/).

Or Github page for the code: [Github Page](https://github.com/shaotangyen/14-the-tech-blog).

<a name="demo"></a>

## Demo

<img src="./assets/demo.gif" alt="app-demo" style="width:800px;"/>

<a name="license"></a>

## License

Copyright 2021 Shao Yen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.