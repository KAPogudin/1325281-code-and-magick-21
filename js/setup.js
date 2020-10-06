'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон' ];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var C_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var E_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var randomIndexOne = Math.floor(Math.random() * 4);
var randomIndexToo = Math.floor(Math.random() * 5);
var randomIndexThre = Math.floor(Math.random() * 6);
var randomIndexFor = Math.floor(Math.random() * 7);

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

    var wizards = [
      {
        name: WIZARD_NAMES[randomIndexOne] + '-'+ WIZARD_SURNAMES[randomIndexOne],
        coatColor: C_COLORS[randomIndexToo],
        eyesColor: E_COLORS[randomIndexThre]
      },
      {
        name: WIZARD_NAMES[randomIndexFor] + '-'+ WIZARD_SURNAMES[randomIndexFor],
        coatColor: C_COLORS[randomIndexOne],
        eyesColor: E_COLORS[randomIndexToo]
      },
      {
        name: WIZARD_NAMES[randomIndexThre] + '-'+ WIZARD_SURNAMES[randomIndexThre],
        coatColor: C_COLORS[randomIndexFor],
        eyesColor: E_COLORS[randomIndexOne]
      },
      {
        name: WIZARD_NAMES[randomIndexToo] + '-'+ WIZARD_SURNAMES[randomIndexToo],
        coatColor: C_COLORS[randomIndexThre],
        eyesColor: E_COLORS[randomIndexFor]
      }
    ];


var renderWizard = function(wizard) {

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


