const themes = [
  { mainColor: ' #2b303a', accentColor: '#92dce5', secondaryColor: 'white' },
  { mainColor: ' #F2FF49', accentColor: '#FF4242', secondaryColor: 'black' },
  { mainColor: ' #502419', accentColor: '#7EA172', secondaryColor: 'white' },
  { mainColor: ' #D30C7B', accentColor: '#FFE3DC', secondaryColor: 'white' },
  { mainColor: ' #6E2594', accentColor: '#ECD444', secondaryColor: 'white' },
];
function handleTheme() {
  const themeButton = document.getElementById('themeButton');
  const root = document.documentElement;
  let index = 0;
  themeButton.addEventListener('click', () => {
    if (index == themes.length - 1) {
      index = -1;
    }
    index += 1;
    currentColorPallette = themes[index];
    root.style.setProperty('--main-color', `${currentColorPallette.mainColor}`);
    root.style.setProperty(
      '--accent-color',
      `${currentColorPallette.accentColor}`
    );
    root.style.setProperty(
      '--secondary-color',
      `${currentColorPallette.secondaryColor}`
    );
    const currentColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--main-color');
    console.log(currentColor);
  });
}
handleTheme();
