let a=promp("enter the no a");
let b=promp("enter the no b");
let c=promp("enter the no c");
let d=promp("enter the no d");
let e=promp("enter the no e");
a=Integer.ParseInt(a);
b=Integer.ParseInt(b);
c=Integer.ParseInt(c);
d=Integer.ParseInt(d);
e=Integer.ParseInt(e);
if(a>b && a>c && a>d && a>e){
alert('a is the greater no');
}
else if(b>c && b>a && b>d && b>e){
alert('b is the greater no');
}
else if(c>b && c>a && c>d && c>e){
alert('c is the greater no');
}
else if(d>b && d>c && d>a && d>e){
alert('d is the greater no');
}
else{
alert('e is the greater no');
}
