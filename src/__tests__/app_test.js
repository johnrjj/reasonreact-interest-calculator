// Generated by BUCKLESCRIPT VERSION 1.8.0, PLEASE EDIT WITH CARE
'use strict';

var App                  = require("../app.js");
var Jest                 = require("bs-jest/lib/js/src/jest.js");
var Curry                = require("bs-platform/lib/js/curry.js");
var ReasonReact          = require("reason-react/lib/js/src/reasonReact.js");
var ReactShallowRenderer = require("bs-react-test-renderer/lib/js/src/reactShallowRenderer.js");

describe("src/app.re", (function () {
        Jest.test("is defined", (function () {
                var component = ReactShallowRenderer.renderWithRenderer(ReasonReact.element(/* None */0, /* None */0, App.make("Foo Title", /* array */[])));
                return Curry._1(Jest.ExpectJs[/* toBeDefined */23], Curry._1(Jest.ExpectJs[/* expect */0], component));
              }));
        return Jest.test("renders", (function () {
                      var tree = ReactShallowRenderer.renderWithRenderer(ReasonReact.element(/* None */0, /* None */0, App.make("Foo Title", /* array */[])));
                      return Curry._1(Jest.ExpectJs[/* toMatchSnapshot */15], Curry._1(Jest.ExpectJs[/* expect */0], tree));
                    }));
      }));

/*  Not a pure module */
