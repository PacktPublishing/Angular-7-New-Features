
type StringifyData<T> = {
  [K in keyof T]: string
};

function stringifyProps<T extends unknown[]>(...obj: T): StringifyData<T> {
  const newData = {} as StringifyData<T>;
  for (const prop in obj) {
    newData[prop] = String(obj[prop]);
  }
  return newData;
}

{
  var stringData = stringifyProps(100, true);
  var firstElement: string = stringData[0];
  var secondElement: string = stringData[1];
}

{
  var len: number = stringData.length
  stringData.pop();  
  stringData.forEach(x => console.log(x));
}
