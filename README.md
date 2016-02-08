# SEI 2016

Semana da Engenharia Informática 2016 - Workshop by Seegno

## Table of Contents
 - [Summary](https://github.com/seegno/sei16#summary)
 - [Requirements](https://github.com/seegno/sei16#requirements)
 - [Installation](https://github.com/seegno/sei16#installation)
 - [Run Application](https://github.com/seegno/sei16#run-application)

## Summary

Managing the application state in terms of data structure organization is usually a complex problem. New patterns like [Flux](https://facebook.github.io/flux/) or [Redux](http://rackt.org/redux/docs/introduction/) are designed to solve uni-directional data flows in a more explicit way.

During the workshop we're going to build a simple chat application in order to show how integrating **Redux** into **React** can solve complex problems such as routing, cache management or asynchronous events like fetching data from the server.

## Requirements

**Previous knowledge**
- Functional programming
- JavaScript - [ES2015](https://babeljs.io/docs/learn-es2015/)
- [ReactJS](https://facebook.github.io/react/docs/getting-started.html)
- [Redux](http://redux.js.org/)
- [Flux](https://facebook.github.io/flux/docs/overview.html#content) (Optional)

**System requirements**
- [Node](https://nodejs.org/en/) >= 4
- [npm](https://www.npmjs.com/) >= 3
- Modern text editor (e.g. [Atom](https://atom.io/))

## Installation

Clone project to you local directory:

```sh
git clone https://github.com/seegno/sei16.git
```

Install [npm](https://www.npmjs.com/) dependencies by running the following command in the terminal:

```sh
npm install
```

## Run Application

After installing _npm_ dependencies you're ready to go. Run the following command:

```sh
npm start
```

This starts a local server. Just open your browser, go to [localhost:3000](http://localhost:3000) and if you see a welcome message you're ready to go.
