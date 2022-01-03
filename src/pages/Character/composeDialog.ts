import { CharacterProfile } from '../../types/CharacterProfile';

export function composeDialog(data: CharacterProfile) {
  let str = '<span>';

  // gender
  if (data.gender === 'male') str += 'His ';
  if (data.gender === 'female') str += 'Her ';
  if (data.gender !== 'male' && data.gender !== 'female') str += 'Its ';

  // name
  if (data.name === 'Darth Vader') {
    return (str = 'Lord Vader, What more can I say?');
  }
  str +=
    'name is <span style="font-weight:bold;">' + data.name + '</span> and has ';

  // hair_color
  if (data.hair_color === 'none' || data.hair_color === 'n/a')
    str += 'no hair and';
  else {
    let splitHair = data.hair_color.split(', ');
    //exceptions: blond, auburn, black(same background color)
    let mainHair = splitHair[0].replace(`"`, '');
    if (mainHair === 'blond') mainHair = '#faf0be';
    if (mainHair === 'auburn') mainHair = '#A52A2A';
    if (mainHair === 'black') mainHair = '#4f4f4f';
    str += `<span style="font-weight:bold; color:${mainHair};"> ${data.hair_color} hair</span> and `;
  }

  // eye_color
  let mainEyeColor = data.eye_color;
  //exceptions: blue-gray, blue, hazel, black(same background color)
  if (mainEyeColor === 'blue-gray') mainEyeColor = '#6699cc';
  if (mainEyeColor === 'blue') mainEyeColor = '#a1caf1';
  if (mainEyeColor === 'hazel') mainEyeColor = '#a5c6bb';
  if (mainEyeColor === 'black') mainEyeColor = '#4f4f4f';
  str += `<span style="font-weight:bold; color:${mainEyeColor};"> ${data.eye_color} eyes</span>. `;

  // confirmation
  if (data.gender === 'male') str += 'Is he the one you are looking for?';
  if (data.gender === 'female') str += 'Is she the one you are looking for? ';
  if (data.gender !== 'male' && data.gender !== 'female')
    str += `I guess, these aren't the Droids you're looking for.`;

  str += '</span>';
  return str;
}
