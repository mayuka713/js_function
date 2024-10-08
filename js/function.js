// 与えられた引数priceと引数shippingFeeを加算し、その値を出力する関数を定義する
const addArguments = (price, shippingFee) => {
  console.log(price + shippingFee + "円");
};

//スコープ

// 与えられた引数numを2倍にし、その値を戻り値として返す関数を定義する
const double = (num) => {
  return num * 2;
};
// 関数の戻り値を出力する
console.log(double(30));


// 関数の中で定数を宣言し、関数の中で定数を使う
const useVariable = () => {
  const userName  = '侍太郎'
  console.log(userName);
}

// 関数を呼び出す
useVariable();
// 関数の中で宣言した定数を関数の外で使う
console.log(userName);


