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

  var isObject = function isObject(v) {
    return getType(v) === 'Object';
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
        lineWidth = _options$lineWidth === void 0 ? 1 : _options$lineWidth,
        _options$stepX = _options.stepX,
        stepX = _options$stepX === void 0 ? 10 : _options$stepX,
        _options$stepY = _options.stepY,
        stepY = _options$stepY === void 0 ? 10 : _options$stepY,
        _options$margin = _options.margin,
        margin = _options$margin === void 0 ? 0 : _options$margin;
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    var width = context.canvas.width;
    var height = context.canvas.height; // horizontal line

    for (var x1 = margin, x2 = width - margin, y = margin + stepY + 0.5, boundary = height - margin; y < boundary; y += stepY) {
      context.beginPath();
      context.moveTo(x1, y);
      context.lineTo(x2, y);
      context.stroke();
    } // vertical line


    for (var y1 = margin, y2 = height - margin, x = margin + stepX + 0.5, _boundary = width - margin; x < _boundary; x += stepX) {
      context.beginPath();
      context.moveTo(x, y1);
      context.lineTo(x, y2);
      context.stroke();
    }
  };

  var drawAxis = function drawAxis() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // options is canvas element
    if (isCanvas(options)) {
      var canvas = options;
      options = Object.create(null);
      options.context = canvas.getContext('2d');
    }

    if (!isObject(options.axis)) {
      options.axis = {};
    } else {
      options.axis.margin ? options.axis.margin += 0.5 : null;
    }

    if (!isObject(options.tick)) {
      options.tick = {};
    }

    if (!isObject(options.highlightedTick)) {
      options.highlightedTick = {};
    }

    var _options$axis = options.axis,
        _options$axis$margin = _options$axis.margin,
        axisMargin = _options$axis$margin === void 0 ? 20.5 : _options$axis$margin,
        _options$axis$lineWid = _options$axis.lineWidth,
        axisLineWidth = _options$axis$lineWid === void 0 ? 1 : _options$axis$lineWid,
        _options$axis$color = _options$axis.color,
        axisColor = _options$axis$color === void 0 ? 'black' : _options$axis$color;
    var _options$tick = options.tick,
        _options$tick$spacing = _options$tick.spacing,
        tickSpacing = _options$tick$spacing === void 0 ? 10 : _options$tick$spacing,
        _options$tick$lineWid = _options$tick.lineWidth,
        tickLineWidth = _options$tick$lineWid === void 0 ? 1 : _options$tick$lineWid,
        _options$tick$color = _options$tick.color,
        tickColor = _options$tick$color === void 0 ? 'black' : _options$tick$color,
        _options$tick$length = _options$tick.length,
        tickLength = _options$tick$length === void 0 ? 6 : _options$tick$length;
    var _options$highlightedT = options.highlightedTick,
        _options$highlightedT2 = _options$highlightedT.lineWidth,
        highlightedTickLineWidth = _options$highlightedT2 === void 0 ? 1 : _options$highlightedT2,
        _options$highlightedT3 = _options$highlightedT.color,
        highlightedTickColor = _options$highlightedT3 === void 0 ? 'black' : _options$highlightedT3,
        _options$highlightedT4 = _options$highlightedT.length,
        highlightedTickLength = _options$highlightedT4 === void 0 ? 10 : _options$highlightedT4;
    var _options = options,
        context = _options.context;
    var width = context.canvas.width;
    var height = context.canvas.height;
    var xAxisStart = {
      x: axisMargin,
      y: height - axisMargin
    };
    var xAxisEnd = {
      x: width - axisMargin,
      y: height - axisMargin
    };
    var yAxisStart = {
      x: axisMargin,
      y: height - axisMargin
    };
    var yAxisEnd = {
      x: axisMargin,
      y: axisMargin
    };

    var _drawAxis = function _drawAxis() {
      context.strokeStyle = axisColor;
      context.lineWidth = axisLineWidth;
      drawXAxis();
      drawYAxis();
      drawXAxisTick();
      drawYAxisTick();
    }; // X 轴


    var drawXAxis = function drawXAxis() {
      context.beginPath();
      context.moveTo(xAxisStart.x, xAxisStart.y);
      context.lineTo(xAxisEnd.x, xAxisEnd.y);
      context.stroke();
    }; // Y 轴


    var drawYAxis = function drawYAxis() {
      context.beginPath();
      context.moveTo(yAxisStart.x, yAxisStart.y);
      context.lineTo(yAxisEnd.x, yAxisEnd.y);
      context.stroke();
    };

    var drawXAxisTick = function drawXAxisTick() {
      var length = null;

      for (var i = xAxisStart.x + tickSpacing, counter = 1; i < xAxisEnd.x; i += tickSpacing, counter++) {
        context.beginPath();

        if (counter % 5 === 0) {
          context.strokeStyle = highlightedTickColor;
          context.lineWidth = highlightedTickLineWidth;
          length = highlightedTickLength >> 1;
        } else {
          context.strokeStyle = tickColor;
          context.lineWidth = tickLineWidth;
          length = tickLength >> 1;
        }

        context.moveTo(i, xAxisStart.y + length);
        context.lineTo(i, xAxisStart.y - length);
        context.stroke();
      }
    };

    var drawYAxisTick = function drawYAxisTick() {
      var length = null;

      for (var i = yAxisStart.y - tickSpacing, counter = 1; i > yAxisEnd.y; i -= tickSpacing, counter++) {
        context.beginPath();

        if (counter % 5 === 0) {
          context.strokeStyle = highlightedTickColor;
          context.lineWidth = highlightedTickLineWidth;
          length = highlightedTickLength >> 1;
          context.restore();
        } else {
          context.strokeStyle = tickColor;
          context.lineWidth = tickLineWidth;
          length = tickLength >> 1;
        }

        context.moveTo(yAxisStart.x + length, i);
        context.lineTo(yAxisStart.x - length, i);
        context.stroke();
      }
    };

    _drawAxis();
  };

  var init = function init(booster) {
    booster.isSupport = isSupport;
    booster.drawGrid = drawGrid;
    booster.drawAxis = drawAxis;
  };

  var booster = Object.create(null);
  init(booster);

  return booster;

}));
