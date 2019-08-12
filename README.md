<p align="center">
  <a href="https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530">
    <img alt="TDD " src="/doc/book-cover.jpg" width="250" />
  </a>
</p>
<h1 align="center">
 Test Driven Development: By Example<br>
 <a href="https://travis-ci.org">
    <img src="https://travis-ci.org/artem-galas/tdd-wycash-ts.svg?branch=master">
 </a>
 <a href="https://github.com/google/gts">
    <img src="https://img.shields.io/badge/code%20style-google-blueviolet.svg">
 </a>
</h1>

Test Driven Development: By Example [Kent Beck](https://www.kentbeck.com/)

## Goal of this repository
<p align="center">
  <a href="https://www.typescriptlang.org/">
    <img
      alt="Typescript"
      src="./doc/ts-logo.png"
      width="200"
    />
  </a>
</p>

Original book was released in 2002 and used Java + [JUnit](https://junit.org/junit5/) for the first part and Python for second part. 
I would like to rewrite those examples to Typescript + [Jest](https://jestjs.io/).

## Pre requirements
1. Be sure you have installed `node v10.16.0` or more
2. Your favorite IDE:
    - [VsCode](https://code.visualstudio.com/) + [Jest Extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
    - [WebStorm](https://www.jetbrains.com/webstorm/)
3. Open project folder and run `yarn install` or `npm install` for installing all dependencies

## Repo structure
Since the book consists of two parts, the repository also has two parts:
- wycash - application that shows how to use TDD. 
The main idea of this application make manipulations with different currencies (5$ + 10 CHF = 20$) 
- xUnit - testing tools which will be tested with itself (write xUnit and test it with xUnit)

All commit message have a convention: `part_01(ch01): first test pass`. 
So it easy to look through the chapters.

## Developer notes
For generate project [gts](https://github.com/google/gts) was used.

- Running tests
```bash
yarn test
```
- Compile project
```bash
yarn run compile
```
- Check code style
```bash
yarn run check
```
- Fix code style issues using [prettier](https://prettier.io/)
```bash
yarn run fix
```
