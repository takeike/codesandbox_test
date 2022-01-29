/**
 *
 */

//  var val1="var1"
//  console.log(val1)

//  val1="var変数を上書き"
//  console.log(val1)

//  var val1 = "var変数を再宣言"
//  console.log(val1)

// let val2="let変数"
// console.log(val2)

// val2="let変数を上書き"
// console.log(val2)

// const val3 = "const変数"
// console.log(val3)

// val3="const変数を上書き"
// const val3 = "sss"

// const val4 = {
//   name: "aaa",
//   age:28
// }
// console.log("1:",val4)

// val4.name="bbb"
// val4.address = "Guma"
// console.log(val4)

/**
 * テンプレート文字列
 */
// const name = "じゃけ"
// const age = 28

// const message1="私の名前は"+name+"です。年齢は"+age+"です"
// console.log(message1)

// const message2=`私の名前は${name}です。年齢は${age}です-`
// console.log(message2)

/**
 * アロー関数
 */
// const func1 = function (str) {
//   return str;
// };

// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2です"));

// const func3 = (a, b) => {
//   return a + b;
// };
// console.log(func3(1, 2));

// const func4 = (a, b) => a + b;

// console.log(func4(1, 2));

/**
 * b分割大ニュ
 */
// const myProfile = {
//   name:"じゃけ",
//   age:28
// }
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`
// console.log(message1)

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です`
// console.log(message2)

// const myProfile = ['じゃけ', 28]
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`
// console.log(message3)

// const [name, age] = myProfile
// const message4 = `名前は${name}です。年齢は${age}歳です`
// console.log(message4)

/**
 * デフォルト値
 */
// const sayHello = (name="guest") => console.log(`こんにちは！${name}さん`)
// sayHello("take")

/**
 * map...
 * */
const nameArr = ["tanaka", "yamada", "sato"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const newNameArr = nameArr.map((name) => {
//   if (name === "sato") {
//     return name
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr)

/**
 * 三項演算子
 */
// const num = '1300'
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : 'input number'

// console.log(formattedNum)

// const checkSum = (num1, num2) => {
//   return num1+num2 > 100 ? 'limit over' : num1+num2
// }

// console.log(checkSum(10,200))

const flag1 = false;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か２はtrueになります");
}
