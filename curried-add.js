// Note: I had to get help on this one (couldn't find a way to implement this)

function curriedAdd(total) {
    if (total === undefined) return 0;
    return function addNext(num) {
      if (num === undefined) return total;
      total += num;
      return addNext;
    };
}

module.exports = { curriedAdd };
