function createArray(p1,p2,p3){
    let n1=p1;
    let n2=p2;
    let n3=p3;
    let arr = [n1,n2,n3];
    console.log("The Elements are: ");
    console.log(arr);
}
createArray(10,20,30);
createArray(-1,0,1);

function squareNUmbers(p1,p2,p3){
    let n1=p1;
    let n2=p2;
    let n3=p3;
    let arr1 = [n1,n2,n3]; 
    for(let i=0;i<arr1.length;i++){
        arr1[i]=arr1[i]*2;
    }
    console.log("The Elements after squared: ");
    console.log(arr1);
}
squareNUmbers(2,3,4);

function getEvenNumbers(p1,p2,p3){
    let n1=p1;
    let n2=p2;
    let n3=p3;
    let arr1 = [n1,n2,n3]; 
    let count=0;
    let arr2=[];
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]%2==0){
            arr2[count++]=arr1[i];
        }
    }
    console.log("The Even Elements are: ");
    console.log(arr2);
}
getEvenNumbers(2,3,4);

function collectNames(p1,p2,p3){
    let n1=p1;
    let n2=p2;
    let n3=p3;
    let arr = [n1,n2,n3];
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].toUpperCase();
    }
    console.log("The Names in UpperCase are: ");
    console.log(arr);
}
collectNames("Anu","Banu","Daisy");

function addTen(p1,p2,p3){
    let n1=p1;
    let n2=p2;
    let n3=p3;
    let arr1 = [n1,n2,n3]; 
    for(let i=0;i<arr1.length;i++){
        arr1[i]=arr1[i]+10;
    }
    console.log("The Elements after Adding 10: ");
    console.log(arr1);
}
addTen(2,3,4);

function getEvenNumbers(p1,p2,p3){
    let n1=p1;
    let n2=p2;
    let n3=p3;
    let arr1 = [n1,n2,n3]; 
    let count=0;
    let arr2=[];
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]%2==0){
            arr2[count++]=arr1[i];
        }
    }
    console.log("The Even Elements are: ");
    console.log(arr2);
}
getEvenNumbers(2,3,4);


function fruitArray(p1,p2,p3){
    let n1=p1;
    let n2=p2;
    let n3=p3;
    let arr1 = [n1,n2,n3]; 
    let arr2 = ["apple","banana"];
    if(n1 && n2 && n3){
        console.log("The Fruits are : ");
        console.log(arr1);
        return;
    }
    else{
        console.log("The Fruits are : ");
        console.log(arr2);
    }
}
fruitArray("Orange","Papaya","Pineapple");
fruitArray();
