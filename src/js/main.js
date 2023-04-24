// Переменная, хранящая язык, выбранный пользователем
let selectedLanguage = 'en';

// Переменные, отслеживающие состояния клавиш Caps Lock и Shift
const capsLock = false;
const shift = false;

// Клавиатура с раскладкой английского языка
const keyboardKeysEnglish = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLk', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'Shift'],
  ['Ctrl', 'option', 'cmd', ' ', 'cmd', 'option', '&#9668', '&#9660', '&#9658'],
];

// Клавиатура с раскладкой русского языка
const keyboardKeysRussian = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['CapsLk', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650', 'Shift'],
  ['Ctrl', 'option', 'cmd', ' ', 'cmd', 'option', '&#9668', '&#9660', '&#9658'],
];

// Массив клавиш русской раскладки с зажатой клавишей Shift
const keyboardKeysRussianShift = [
  ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '&#8592'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
  ['CapsLk', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#9650', 'Shift'],
  ['Ctrl', 'option', 'cmd', ' ', 'cmd', 'option', '&#9668', '&#9660', '&#9658'],
];

// Массив клавиш английской раскладки с зажатой клавишей Shift
const keyboardKeysEnglishShift = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '&#8592'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
  ['CapsLk', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650', 'Shift'],
  ['Ctrl', 'option', 'cmd', ' ', 'cmd', 'option', '&#9668', '&#9660', '&#9658'],
];

// Коды клавиш
const keyCode = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

// Массив с названиями клавиш на английском и русском языках
const codeName = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp', 'ShiftRight', 'ControlLeft',
  'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

// Проверяем, сохранен ли язык в локальном хранилище
// Если нет, устанавливаем язык по умолчанию (английский)
// eslint-disable-next-line no-unused-vars
selectedLanguage = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';

// Создание основных элементов
const aboutSection = document.createElement('p');
const wrapperElement = document.createElement('div');
const mainElement = document.createElement('div');
const keysContainerElement = document.createElement('div');
const inputBlockElement = document.createElement('textarea');
aboutSection.classList.add('about');
aboutSection.innerText = 'To change language press Cmd + Option on physical keyboard or Win on virtual keyboard. Created on MacOs 13.3.1 (22E261)';
inputBlockElement.classList.add('input-block');
mainElement.classList.add('keyboard-container');
wrapperElement.classList.add('wrapper');
keysContainerElement.classList.add('keyboard__keys');
mainElement.appendChild(keysContainerElement);
wrapperElement.appendChild(inputBlockElement);
wrapperElement.appendChild(mainElement);
wrapperElement.appendChild(aboutSection);
document.body.appendChild(wrapperElement);

const createButtons = (arr) => {
  // С помощью метода forEach() происходит перебор массива arr.
  // Для каждого элемента массива rowArr создается элемент div с классом keyboard-keys-row.
  // Этот элемент будет содержать клавиши текущей строки.
  arr.forEach((rowArr) => {
    const row = document.createElement('div');
    row.className = 'keyboard__row';
    keysContainerElement.appendChild(row);
    rowArr.forEach((buttonText) => {
      const button = document.createElement('div');
      button.className = 'key';
      button.id = keyCode[arr.indexOf(rowArr)][rowArr.indexOf(buttonText)];
      button.innerHTML = buttonText;
      row.appendChild(button);
    });
  });
};

// Проверяем наличие значения в localStorage
localStorage.getItem('lang') !== null
  // Если значение есть, проверяем, язык какой клавиатуры нужен
  ? localStorage.getItem('lang') === 'keyboardKeysRussian'
    // Если нужна русская клавиатура, создаем кнопки с русскими символами
    ? createButtons(keyboardKeysRussian)
    // Если нужна английская клавиатура, создаем кнопки с английскими символами
    : createButtons(keyboardKeysEnglish)
  // Если значение отсутствует, устанавливаем язык "en" и создаем кнопки с английскими символами
  : (localStorage.setItem('lang', 'en'), createButtons(keyboardKeysEnglish));

// Обрабатываем нажатие клавиш
document.addEventListener('keydown', (event) => {
  const textArea = document.querySelector('.input-block');
  const { code } = event;

  // Обработка нажатия клавиши "Tab"
  code === 'Tab'
    ? handleTab()
    // Обработка нажатия клавиши "CapsLock"
    : code === 'CapsLock'
      ? (handleCapsLock(), btn.classList.toggle('pressed'))
      // Обработка нажатия клавиш-шифтов
      : code === 'ShiftLeft' || code === 'ShiftRight'
        ? replaceKeyboard(localStorage.getItem('lang') === 'en' ? keyboardKeysEnglishShift : keyboardKeysRussianShift)
        // Обработка нажатия клавиш "AltLeft" и "AltRight"
        : code === 'AltLeft' || code === 'AltRight'
          ? event.preventDefault()
          // Обработка нажатия сочетания клавиш "Ctrl + Alt" или "Alt + Ctrl"
          : (event.ctrlKey && event.altKey) || (event.altKey && event.ctrlKey)
            ? changeLanguage()
            // Проверка, является ли клавиша специальной
            : isSpecial(code)
              ? textArea.focus()
              // Вывод символа на экран
              : printSymbols(code);

  // Отображение анимации
  showAnimation(code);
});

// Обработчик события на отпускание клавиши
document.addEventListener('keyup', (event) => {
  // Получаем все кнопки клавиатуры
  const buttons = document.querySelectorAll('.key');
  const { code } = event;
  // Если отпущена клавиша Shift, возвращаем исходную клавиатуру
  code === 'ShiftLeft' || code === 'ShiftRight'
    ? replaceKeyboard(localStorage.getItem('lang') === 'en' ? keyboardKeysEnglish : keyboardKeysRussian)
    : null;
  // Проходим по всем кнопкам клавиатуры и удаляем класс 'pressed' у той, чей id совпадает с code
  buttons.forEach((btn) => {
    btn.id === event.code
      ? btn.classList.toggle('pressed')
      : null;
  });
});

keysContainerElement.addEventListener('mousedown', (event) => {
  const { id } = event.target;
  id === 'Tab' // если нажата клавиша "Tab"
    ? handleTab()
    : id === 'MetaLeft' // если нажата клавиша "MetaLeft" (Win/Cmd)
      ? changeLanguage()
      : id === 'ShiftLeft' || id === 'ShiftRight' // если нажата клавиша "ShiftLeft" или "ShiftRight"
        ? replaceKeyboard(localStorage.getItem('lang') === 'en' ? keyboardKeysEnglishShift : keyboardKeysRussianShift)
        : id === 'Space' // если нажата клавиша "Space"
          ? handleSpace()
          : id === 'Enter' // если нажата клавиша "Enter"
            ? handleEnter()
            : id === 'Backspace' // если нажата клавиша "Backspace"
              ? handleBackspace()
              : id === 'Delete' // если нажата клавиша "Delete"
                ? handleDelete()
                : id === 'CapsLock' // если нажата клавиша "CapsLock"
                  ? (handleCapsLock(), btn.classList.toggle('pressed'))
                  : id === 'ArrowLeft' || id === 'ArrowUp' || id === 'ArrowRight' || id === 'ArrowDown' // если нажата клавиша "ArrowLeft", "ArrowUp", "ArrowRight" или "ArrowDown"
                    ? printSymbols(id)
                    : isSpecial(id) // если нажата особая клавиша
                      ? textArea.focus()
                      : printSymbols(id); // в противном случае обычная клавиша
  showAnimation(id); // показываем анимацию клавиши
});
