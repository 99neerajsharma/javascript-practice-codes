const getData = (data, success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        console.log("successful");
        resolve(data);
      } else {
        console.log("reject");
        reject(data);
      }
    }, 2000);
  });
};

getData(1, true)
  .then((res) => {
    return getData(2, false);
  })
  .then((res) => {
    return getData(3, true);
  })
  .then((res) => {
    console.log("done");
  })
  .catch((err) => {
    console.log("error occured", err);
  });

async function getAllData() {
  try {
    res = await getData(1, true);
    console.log(res);
    res2 = await getData(2, false);
    console.log(res2);
    console.log(res2);
  } catch (err) {
    console.log("catch error", err);
  }
}
