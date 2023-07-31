export const fetchFakeTrackInfo = async (val: string) => {
  console.log("val:", val);
  return new Promise<string>((res) => {
    setTimeout(() => res("123456789"), 3000);
  });
};
