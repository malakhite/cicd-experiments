test('displays 42 after click', () => {
  document.body.innerHTML =
    '<p id="answer"></p>' +
    '<button id="button" />';
  require('../answer');
  
  document.getElementById('button').click();
  expect(document.getElementById('answer').innerHTML).toEqual('42');
  expect(document.getElementById('answer').style.fontSize).toEqual('18pt');
})