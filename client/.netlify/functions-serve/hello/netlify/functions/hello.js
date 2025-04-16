"use strict";

// netlify/functions/hello.js
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World"
    })
  };
};
//# sourceMappingURL=hello.js.map
