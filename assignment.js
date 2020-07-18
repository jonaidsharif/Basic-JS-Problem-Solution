//feetToMile area start

function feetToMile(feet){
    var mile=feet*5280
    return mile;
}
var convert = feetToMile(79200);
console.log(convert);

//feetToMile area end

//tinyFriends area start

function tinyFriend(names){
    var smallest = names[0];
    for(var i=0; i < names.length; i++){
        var currentName = names[i];
        if(currentName < smallest){
            smallest = currentName;
        }
    }
    return smallest
}
var smallest = tinyFriend(["jonaid","mastakim","elmaeza","ayub","mohammmad"]);
console.log("Lowest value is: ", smallest);

//tinyFriends area end

//woodCalculator area start

function woodCalculator(chair,table,bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var woodResult = woodCalculator(5,3,5);
console.log(woodResult);

//woodCalculator area end

//brickCalculator area start

function brickCalculator(floor){
    let totalHeight;
    let totalBrick;
    if(floor<=10){
        totalHeight = floor * 15;
        totalBrick = totalHeight * 1000;
    }   
    else if(floor<=20){
        totalHeight =(10 * 15)+(10 * 12);
        totalBrick = totalHeight * 1000;
    }
    else{
        moreFloor = 30-20;
        totalHeight = (10 * 15)+(10 * 12)+(30 * 10);
        totalBrick = totalHeight * 1000;
        
    }
    return totalBrick;
}
console.log(brickCalculator(30));

//brickCalculator area end