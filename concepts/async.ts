// Promise <string > Promise <void >
const makePromise = (): Promise<string> => {
  return new Promise<string>((res, err) => {
    const data = "sad";
    if (data) res(data);
    else err("no data");
  });
};
