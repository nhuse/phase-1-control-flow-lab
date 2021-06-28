function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return 'This one is on me!'
  }
  else if(feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if(feet > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  let response;
  city === 'NYC' ? (response = 'Ok, sounds good.') : (response = 'No go.');
  return response;
}

function switchOnCharmFromTip(generousity){
  // Write your code here!
  let response;
  switch(generousity) {
    case 'not as generous':
      response = 'Thank you.'
      break;
    case 'generous':
      response = 'Thank you so much.'
      break;
    default:
      response = 'Bye.'
      break;
  }
  return response;
}