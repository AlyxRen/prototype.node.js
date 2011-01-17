var Prototype, Class, Template, Enumerable, $A, $w, $H, $R, Try;
Prototype =   require('./lib/Prototype');
              require('./lib/Object');
Class =       require('./lib/Class');
              require('./lib/Function');
              require('./lib/Date');
              require('./lib/RegExp');
              require('./lib/String');
Template =    require('./lib/Template');
Enumerable =  require('./lib/Enumerable');
$A =          require('./lib/Array').A;
$w =          require('./lib/Array').w;
$H =          require('./lib/Hash');
$R =          require('./lib/Range');
Try =         require('./lib/Try');


module.exports = {
  Prototype: Prototype,
  Template: Template,
  Class: Class,
  Enumerable: Enumerable,
  $A: $A,
  $w: $w,
  $H: $H,
  $R: $R,
  Try: Try
};