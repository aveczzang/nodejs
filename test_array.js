let array = [52, 273, '아침', '점심', true, false];

console.log(array);

array[0] = 0;
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);

console.log("for 반복문을 이용한 출력");
for (i=0; i<6; i++) {
    console.log(array[i]);
}