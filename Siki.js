//Siki.js - Library JavaScript//
//By: Logorah - Indonesia - 2019//
//
//Mengambil element tertentu berdasarkan ID//
function $(a)
    {return document.getElementById(a);};
//Menulis pada halaman dokumen//
function Echo(a)
    {return document.write(a);};
//Menulis pada elemen tertentu//
function Render(a,b)
    {return $(b).innerHTML = a;};
//Mengambil data pada URL, by: Cahya//
function $_GET(a)
    {if(a!==null){var v=[],hh;var hs=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');for(var i = 0;i<hs.length;i++){hh = hs[i].split('=');v.push(hs[0]);v[hh[0]] = hh[1];};return v[a];}else{return null;};};
//Berpindah halaman//
function Go(a)
    {window.location.href=a;};
//
//Membaca dan mengambil data dalam mydata tertentu//
function S_Select_Read(db,a,b)
    {if(a==null||a==""||db==null||db==""){return false;}else if(b==undefined){return db[a];}else{var x= db[0];var n=x.indexOf(b);return db[a][n];};};
//Mini, membaca dan mengambil data dalam mydata tertentu//
function S_SR(db,a,b)
    {if(a==null||a==""){return false;}else{return S_Select_Read(db,a,b);};};
//Mengambil panjang data//
function S_L(db)
    {return db.length;};
//Mengambil jumlah kolom tertentu//
function S_L_If(db,a,b)
    {var t=0;for(let i = 1; i < db.length;i++){if(S_SR(db,i,a)==b){t++;}else{t=t;};};return t;};
//Mengmabil jumlah key pada mydata//
function S_Key(db)
    {return S_l(db[0]);};
//Menulis format mata uang//
function S_Num(a,b,c)
    {var r = b.toString().split('').reverse().join(''), rb = r.match(/\d{1,3}/g);rb = rb.join('.').split('').reverse().join(''); return a+rb+c;};
//Menjumlakan semua baris berdasarkan key//
function S_Sum(db,a)
    {var t=0;for(let i = 1; i < db.length;i++){t =t+Number(S_SR(db,i,a));};return t;};
//Menjumlahkan baris berdasarkan nilai tertentu//
function S_Sum_If(db,a,b,c)
    {var t=0;for(let i = 1; i < db.length;i++){if(S_SR(db,i,b)==c){t =t+Number(S_SR(db,i,a));}else{t=t;};};return t;};
///