# React Redux library app

## Pages:
[List of all books available](localhost:3000/books)
[Info about particular book](localhost:3000/books/1)
[List of all authors](localhost:3000/authors)
[Info about partticular author](localhost:3000/authors/1)


## Setup

- clone this project
- install dependencies via `npm install`
- run a test server by `npm start`

## Scripts

- `npm start` run a test server
- `npm run build` build production app

## Guide

### Path Alias (resolve)
Anything in `src/components` can be required by only `components/xx/xx.js`

see `webpack.config.js` `resolve` for more.

### Style Guide
Use [css-modules](https://github.com/css-modules/css-modules) to style react component.

Also, I use postcss to enhance css functions. You can write scss-like css, and use some future feature via cssnext.

### Server Mocks

Write your server mocks at `src/mocks`.

### Devtools

 To change the Devtool position press `ctrl + q` . To hide the dev tool press `ctrl + h`

## TODO

- [ ] remove ToDo app example
- [ ] implement filters