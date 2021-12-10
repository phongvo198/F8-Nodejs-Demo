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
  sortable:(field,sort)=>{
    const sortType=field===sort.column?sort.type:'default';
    const icons={
      default:'oi oi-elevator',
      asc:'oi oi-sort-ascending',
      desc:'oi oi-sort-descending',
    }
    const types={
      default:'desc',
      asc:'desc',
      desc:'asc',

    }
    const type=types[sort.type];
    const icon=icons[sortType];
    return `<a href="?_sort&column=${field}&type=${type}"><span class="${icon}"></span></a>`;
  }
};
Number.prototype.padLeft = function (base, chr) {
  var len = String(base || 10).length - String(this).length + 1;
  return len > 0 ? new Array(len).join(chr || "0") + this : this;
};
