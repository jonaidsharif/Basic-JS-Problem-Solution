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
        if(currentName.length > smallest){
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

//brickCalculator
