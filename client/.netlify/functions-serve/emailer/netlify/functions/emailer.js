"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/emailer.js
var emailer_exports = {};
__export(emailer_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(emailer_exports);
var handler = async (event) => {
  console.log("Inside netlify funct handler");
  const RESEND_API_KEY = process.env.VITE_RESEND_API_KEY;
  const body = JSON.parse(event.body);
  const name = body.name;
  const email = body.email;
  const message = body.message;
  const timestamp = (/* @__PURE__ */ new Date()).toLocaleString();
  console.log(name);
  console.log(email);
  console.log(message);
  console.log(timestamp);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*"
    },
    body: "Hello from Lambda!"
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=emailer.js.map
