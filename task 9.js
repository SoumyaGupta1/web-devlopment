let raceNumber = Math.floor(Math.random() * 1000);
var registered = true;
var runnerAge = 20;

if (runnerAge>18 && registered)
{
  raceNumber+=1000;
}
  if(runnerAge>18 && registered)
  {
  console.log(raceNumber +  " race starts at 9:30 ");
  }
  else if (runnerAge>18 && !registered)
  {
    console.log(raceNumber +  " race starts at 11:00 ");
  }
   else if(runnerAge<18)
  {
console.log(raceNumber +  " race starts at 12:30 ");
  }
  