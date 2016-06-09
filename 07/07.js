function distance (coo1, coo2){
  var X =	coo1.x - coo2.x
  var Y =   coo1.y - coo2.y
  var Dis = Math.abs(X) + Math.abs(Y)
  return Dis
}