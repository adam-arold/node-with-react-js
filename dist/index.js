"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.listen(8080, () => {
  console.log("server started on port 8080");
});
//# sourceMappingURL=index.js.map