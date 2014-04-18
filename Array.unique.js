// ( [ 1, 1, 2, 3, 3, 4 ] ).unique() -> [ 1, 2, 3, 4 ]
Array.prototype.unique = function() {
  var r = [];
  var i = 0;
  var l = this.length;
  for ( ; i < l; i++ ) {
    if ( r.indexOf( this[ i ] ) == -1 ) {
      r.push( this[ i ] );
    }
  }
  return r;
}
