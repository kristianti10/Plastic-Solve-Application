var username = localStorage.getItem('username');
var ukuranTotebag = localStorage.getItem('ukuranTotebag');
var hargaTotebag = localStorage.getItem('hargaTotebag');
var alamatTotebag = localStorage.getItem('alamatTotebag');

$('#username').html(username);
$('#ukuranTotebag').html(': ' + ukuranTotebag);
$('#hargaTotebag').html(': ' + 'Rp. ' + hargaTotebag)
$('#alamatTotebag').html(': ' + alamatTotebag)
