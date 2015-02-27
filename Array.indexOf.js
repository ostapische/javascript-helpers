//     0  1  2  3  4  5
// ( [ 1, 2, 4, 5, 3, 6 ] ).indexOf( 3 ) -> 4
// starts from a[ 2 ] = 4
// ( [ 1, 2, 4, 5, 3, 6 ] ).indexOf( 3, 2 ) -> 4
// a.length = 6
// starts from a[ 6 - 2 ] = 3
// ( [ 1, 2, 4, 5, 3, 6 ] ).indexOf( 3, -2 ) -> 4
if ( Array.prototype.indexOf === window.undefined ) {
  Array.prototype.indexOf = function( e, f ) {
    var l = this.length;
    var i = 0;
    if ( f !== window.undefined ) {
      i = ( f < 0 ? l + f : f );
      if ( i < 0 ) { i = 0; }
    }
    for ( ; i < l; i++ ) {
      if ( this[ i ] === e ) {
        return i;
      }
    }
    return -1;
  }
}
