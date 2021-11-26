module.exports = {
  sum: (a, b) => a + b,
  formatDatetime: function (date) {
    dformat =
      [
        date.getDate().padLeft(),
        (date.getMonth() + 1).padLeft(),
        date.getFullYear(),
      ].join("/") +
      " " +
      [
        date.getHours().padLeft(),
        date.getMinutes().padLeft(),
        date.getSeconds().padLeft(),
      ].join(":");
    return dformat;
  },
};
Number.prototype.padLeft = function (base, chr) {
  var len = String(base || 10).length - String(this).length + 1;
  return len > 0 ? new Array(len).join(chr || "0") + this : this;
};
