// ( { a: 1, b: 1 } ).merge( { b: 2, c: 2 } ) -> { a: 1, b: 2, c: 2 }
Object.prototype.merge = function( s ) {
  var r = this;
  for ( var p in s ) {
    r[ p ] = s[ p ];
  }
  return r;
}
