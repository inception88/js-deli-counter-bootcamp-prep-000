function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  var x = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  return x;
}

<<<<<<< HEAD
function nowServing(katzDeli) {
 var a='There is nobody waiting to be served!'
 if (katzDeli.length>0){
  var serve = `Currently serving ${katzDeli[0]}.`;
=======
function nowServing() {
 var a='There is nobody waiting to be served!'
 if (katzDeli.length>0){
  var serve = katzDeli.shift();
>>>>>>> 9a446747ed9cfd94ebef9f13f1e1c1c70c3441f1
  katzDeli.shift()
   return serve;
 }
 else return a;
}
<<<<<<< HEAD

function currentLine(katzDeliLine) {
  var line='The line is currently:';
  var i=1;
  for(i=1;i<=katzDeliLine.length;i++){
    if (i!=katzDeliLine.length)
    line = line+` ${i}. ${katzDeliLine[i-1]},`;
    else{
    line = line+` ${i}. ${katzDeliLine[i-1]}`;
    return line;}
  }
  if (katzDeliLine.length === 0);{
  var line1 = 'The line is currently empty.'
    return line1;
  }
}
/*
=======
/*
  describe('nowServing', () => {
    it('returns the line is empty when no one is on line', () => {
      expect(nowServing([])).toEqual("There is nobody waiting to be served!");
    });

    it('returns an announcement about the person it is serving, and shifts the line', () => {
      const deliLine = ["Steven", "Blake", "Avi"]
      expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
      expect(deliLine).toEqual(["Blake", "Avi"]);
    });
  });

  describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      expect(currentLine([])).toEqual("The line is currently empty.");
    });

>>>>>>> 9a446747ed9cfd94ebef9f13f1e1c1c70c3441f1
    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})
*/