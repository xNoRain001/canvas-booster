(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.canvasBooster = factory());
})(this, (function () { 'use strict';

  var isSupport = function isSupport() {
    return document.createElement('canvas').getContext ? true : false;
  };

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  var getType = function getType(v) {
    if (v == null) {
      return "".concat(v);
    }

    var type = _typeof(v);

    return !/^(object|function)$/.test(type) ? type : Object.prototype.toString.call(v).slice(8, -1);
  };

  var isCanvas = function isCanvas(v) {
    return getType(v) === 'HTMLCanvasElement';
  };

  var drawGrid = function drawGrid() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // options is canvas element
    if (isCanvas(options)) {
      var canvas = options;
      options = Object.create(null);
      options.context = canvas.getContext('2d');
    }

    var _options = options,
        context = _options.context,
        _options$color = _options.color,
        color = _options$color === void 0 ? 'black' : _options$color,
        _options$lineWidth = _options.lineWidth,
        lineWidth = _options$lineWidth === void 0 ? 0.5 : _options$lineWidth,
        _options$stepX = _options.stepX,
        stepX = _options$stepX === void 0 ? 10 : _options$stepX,
        _options$stepY = _options.stepY,
        stepY = _options$stepY === void 0 ? 10 : _options$stepY;
    context.lineWidth = lineWidth;
    context.strokeStyle = color; // horizontal line

    for (var i = stepY + 0.5; i < context.canvas.height; i += stepY) {
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(context.canvas.width, i);
      context.stroke();
    } // vertical line


    for (var _i = stepX + 0.5; _i < context.canvas.width; _i += stepX) {
      context.beginPath();
      context.moveTo(_i, 0);
      context.lineTo(_i, context.canvas.height);
      context.stroke();
    }
  };

  var init = function init(booster) {
    booster.isSupport = isSupport;
    booster.drawGrid = drawGrid;
  };

  var booster = Object.create(null);
  init(booster);

  return booster;

}));
