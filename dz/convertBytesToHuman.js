/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */
/*jslint es6:true*/
export default function convertBytesToHuman(bytes) {
  if (typeof bytes !== "number"){
    console.log("Вы ввели не число!");
    return false;
  }
  if (bytes < 0) {
    console.log("Вы ввели отрицательное число!")
    return false;
  }
  const My_Array = ['B', 'KB', 'MB', 'GB', 'TB']
  let i = 0;

  while (bytes >= 1024) {
      bytes /= 1024;
      i++;
      if (i >= 4) {
          break;
      }
  }
    console.log(bytes + ' ' + My_Array[i]);
    return(bytes + ' ' + My_Array[i]);

  // your solution goes here
}
