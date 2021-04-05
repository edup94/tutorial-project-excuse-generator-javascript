window.onload = () => {
    document.querySelector('#btn').addEventListener("click", () => {
    document.querySelector('#excuse').innerHTML = generateExcuse();
    });
    console.log("Hello");
};

let generateExcuse = () => {

    let pronoun = ['A','My'];
    let subject = ['dog','grandma','mom','uncle'];
    let action = ['eate my','took my','stole my','bite my','destroyed my','exploded my'];
    let possetion = ['homework','toe','car','food','bike','body','money','bible'];
    let where = ['on the street.','in my house.','in the school.','in the park.','in the church.'];

    let pronounIndex = Math.floor(Math.random()* pronoun.length);
    let subjectIndex = Math.floor(Math.random()* subject.length);
    let actionIndex = Math.floor(Math.random()* action.length);
    let possetionIndex = Math.floor(Math.random()* possetion.length);
    let whereIndex = Math.floor(Math.random()* where.length);

    return pronoun[pronounIndex]+' '+subject[subjectIndex]+' '+action[actionIndex]+' '+possetion[possetionIndex]+' '+where[whereIndex];
};

        
        