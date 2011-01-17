Object.extend = function(target, obj){
  for (var i in obj){
  if ({}.hasOwnProperty.call(obj, i)){
    target[i] = obj[i];
  }
  }
  return target;
}