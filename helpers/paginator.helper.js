module.exports = (limit) => {
  limit = +limit;

  if (!limit || !parseInt(limit) || limit < 5) {
    return 5;
  } else if (limit > 20) {
    return 20;
  } else {
    return limit;
  }
};


