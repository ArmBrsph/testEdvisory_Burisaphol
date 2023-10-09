"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNote = createNote;
exports.deleteNoteByID = deleteNoteByID;
exports.findManyNote = findManyNote;
exports.updateNoteByID = updateNoteByID;
var _model = require("../models/model");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function createNote(data) {
  var newNote = new _model.noteModel(data);
  return newNote.save();
}
function updateNoteByID(id, data) {
  data["HistoryNote"] = new Date();
  console.log(data);
  return _model.noteModel.findByIdAndUpdate(id, data);
}
function deleteNoteByID(id) {
  return _model.noteModel.findByIdAndRemove(id);
}
function findManyNote(query) {
  var baseQuery = {};
  if (query.search) {
    baseQuery = _objectSpread(_objectSpread({}, baseQuery), {
      Note: {
        $regex: new RegExp(query.search, 'i')
      }
    });
  }
  if (query.customer) {
    baseQuery = _objectSpread(_objectSpread({}, baseQuery), {
      Customer: {
        $regex: new RegExp(query.customer, 'i')
      }
    });
  }
  if (query.catagory) {
    baseQuery = _objectSpread(_objectSpread({}, baseQuery), {
      CatagoryNote: {
        $regex: new RegExp(query.catagory, 'i')
      }
    });
  }
  return _model.noteModel.find(baseQuery);
}