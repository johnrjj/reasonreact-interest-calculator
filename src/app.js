// Generated by BUCKLESCRIPT VERSION 1.8.0, PLEASE EDIT WITH CARE
'use strict';

var Block       = require("bs-platform/lib/js/block.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var React       = require("react");
var Pervasives  = require("bs-platform/lib/js/pervasives.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var ReasonReact = require("reason-react/lib/js/src/reasonReact.js");

function calcInterest(p, r, t, n) {
  return p * Math.pow(1.0 + r / n, n * t);
}

var component = ReasonReact.statefulComponent("App");

function getAmount(p, r, t, n) {
  try {
    var parsedP = Caml_format.caml_float_of_string(p);
    var parsedR = Caml_format.caml_float_of_string(r);
    var parsedT = Caml_format.caml_int_of_string(t);
    var parsedN = Caml_format.caml_float_of_string(n);
    return Pervasives.string_of_float(calcInterest(parsedP, parsedR, parsedT, parsedN));
  }
  catch (exn){
    return "Error";
  }
}

function handleChange(source, $$event, state, _) {
  var input = $$event.target.value;
  var $js;
  switch (source) {
    case "principle" : 
        $js = /* record */[
          /* principle */input,
          /* rate */state[/* rate */1],
          /* yearsToGrow */state[/* yearsToGrow */2],
          /* timesCompoundedPerYear */state[/* timesCompoundedPerYear */3]
        ];
        break;
    case "rate" : 
        $js = /* record */[
          /* principle */state[/* principle */0],
          /* rate */input,
          /* yearsToGrow */state[/* yearsToGrow */2],
          /* timesCompoundedPerYear */state[/* timesCompoundedPerYear */3]
        ];
        break;
    case "timesCompoundedPerYear" : 
        $js = /* record */[
          /* principle */state[/* principle */0],
          /* rate */state[/* rate */1],
          /* yearsToGrow */state[/* yearsToGrow */2],
          /* timesCompoundedPerYear */input
        ];
        break;
    case "yearsToGrow" : 
        $js = /* record */[
          /* principle */state[/* principle */0],
          /* rate */state[/* rate */1],
          /* yearsToGrow */input,
          /* timesCompoundedPerYear */state[/* timesCompoundedPerYear */3]
        ];
        break;
    default:
      $js = state;
  }
  return /* Update */Block.__(0, [$js]);
}

function make(_, _$1) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function (state, self) {
      var amount = getAmount(state[/* principle */0], state[/* rate */1], state[/* yearsToGrow */2], state[/* timesCompoundedPerYear */3]);
      return React.createElement("div", {
                  className: "App"
                }, React.createElement("div", {
                      className: "page"
                    }, React.createElement("div", {
                          className: "page-header"
                        }, React.createElement("h1", undefined, "ReasonReact Interest Calculator")), React.createElement("div", {
                          className: "card"
                        }, React.createElement("div", {
                              className: "input-container"
                            }, React.createElement("label", undefined, "Principle"), React.createElement("input", {
                                  value: state[/* principle */0],
                                  onChange: Curry._1(self[/* update */2], (function (param, param$1, param$2) {
                                          return handleChange("principle", param, param$1, param$2);
                                        }))
                                })), React.createElement("div", undefined, React.createElement("label", undefined, "Rate"), React.createElement("input", {
                                  value: state[/* rate */1],
                                  onChange: Curry._1(self[/* update */2], (function (param, param$1, param$2) {
                                          return handleChange("rate", param, param$1, param$2);
                                        }))
                                })), React.createElement("div", undefined, React.createElement("label", undefined, "Years to grow"), React.createElement("input", {
                                  value: state[/* yearsToGrow */2],
                                  onChange: Curry._1(self[/* update */2], (function (param, param$1, param$2) {
                                          return handleChange("yearsToGrow", param, param$1, param$2);
                                        }))
                                })), React.createElement("div", {
                              className: "total-container"
                            }, React.createElement("label", undefined, "Total"), React.createElement("p", undefined, amount)))));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* principle */"1000",
              /* rate */"0.03",
              /* yearsToGrow */"10",
              /* timesCompoundedPerYear */"12"
            ];
    });
  return newrecord;
}

exports.calcInterest = calcInterest;
exports.component    = component;
exports.getAmount    = getAmount;
exports.handleChange = handleChange;
exports.make         = make;
/* component Not a pure module */
