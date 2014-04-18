//     0  1  2  3  4  5
// ( [ 1, 2, 4, 5, 3, 6 ] ).indexOf( 3 ) -> 4
if ( Array.prototype.indexOf === undefined ) {
  Array.prototype.indexOf = function( e ) {
    var i = 0;
    var l = this.length;
    for ( ; i < l; i++ ) {
      if ( this[ i ] === e ) {
        return i;
      }
    }
    return -1;
  }
}
