// it contain the unique value
// it can take value like array;


let obj=new Set();

obj.add({"a":10});
obj.add({"a":100});
obj.add({"a":1000});

for(value of obj){
    console.log(value)
}