function OldConstructor(id, name, type){
  this.id = id;
  this.name = name;
  this.type = type;
}

const OldInstance = new OldConstructor(1, "이상해씨", "풀");
console.log(OldInstance);

class NewConstructor {
  constructor(id, name, type){
    this.id = id;
    this.name = name;
    this.type = type;
  }
}

const NewInstance = new NewConstructor(4, "파이리", "불");
console.log(NewInstance);