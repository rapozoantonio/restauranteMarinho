const idiomas = document.querySelectorAll('.flag');
const flagsArray = Array.from(idiomas);

// Function to update the text content on the page
function updateTexts(translations, idioma) {
  // Using data-translate-key to update text content
  document.querySelectorAll('[data-translate-key]').forEach(element => {
    const key = element.getAttribute('data-translate-key');
    if (translations[idioma] && translations[idioma]['header'][key]) {
      element.textContent = translations[idioma]['header'][key];
    }
    if (translations[idioma] && translations[idioma]['home_slider'][key]) {
      element.textContent = translations[idioma]['home_slider'][key];
    }
    if (translations[idioma] && translations[idioma]['home_content'][key]) {
      element.textContent = translations[idioma]['home_content'][key];
    }
    if (translations[idioma] && translations[idioma]['footer'][key]) {
      element.textContent = translations[idioma]['footer'][key];
    }
    if (translations[idioma] && translations[idioma]['about_section_one'][key]) {
      element.textContent = translations[idioma]['about_section_one'][key];
    }
    if (translations[idioma] && translations[idioma]['about_section_two'][key]) {
      element.textContent = translations[idioma]['about_section_two'][key];
    }
    if (translations[idioma] && translations[idioma]['menu_section_one'][key]) {
      element.textContent = translations[idioma]['menu_section_one'][key];
    }
    if (translations[idioma] && translations[idioma]['menu_section_two'][key]) {
      element.textContent = translations[idioma]['menu_section_two'][key];
    }
    if (translations[idioma] && translations[idioma]['menu'][key]) {
      element.textContent = translations[idioma]['menu'][key];
    }
    if (translations[idioma] && translations[idioma]['drinks'][key]) {
      element.textContent = translations[idioma]['drinks'][key];
    }
    if (translations[idioma] && translations[idioma]['executive_menu'][key]) {
      element.textContent = translations[idioma]['executive_menu'][key];
    }
    if (translations[idioma] && translations[idioma]['sharing_menu'][key]) {
      element.textContent = translations[idioma]['sharing_menu'][key];
    }
    if (translations[idioma] && translations[idioma]['main_menu'][key]) {
      element.textContent = translations[idioma]['main_menu'][key];
    }
    if (translations[idioma] && translations[idioma]['starters_menu'][key]) {
      element.textContent = translations[idioma]['starters_menu'][key];
    }
    if (translations[idioma] && translations[idioma]['salads_menu'][key]) {
      element.textContent = translations[idioma]['salads_menu'][key];
    }
    if (translations[idioma] && translations[idioma]['snacks_menu'][key]) {
      element.textContent = translations[idioma]['snacks_menu'][key];
    }
    if (translations[idioma] && translations[idioma]['sandwiches_menu'][key]) {
      element.textContent = translations[idioma]['sandwiches_menu'][key];
    }
    if (translations[idioma] && translations[idioma]['soups_menu'][key]) {
      element.textContent = translations[idioma]['soups_menu'][key];
    }
    if (translations[idioma] && translations[idioma]['kids_menu'][key]) {
      element.textContent = translations[idioma]['kids_menu'][key];
    }
    if (translations[idioma] && translations[idioma]['desserts_menu'][key]) {
      element.textContent = translations[idioma]['desserts_menu'][key];
    }
    if (translations[idioma] && translations[idioma]['beverages_menu'][key]) {
      element.textContent = translations[idioma]['beverages_menu'][key];
    }
    if (translations[idioma] && translations[idioma]['classic_and_others'][key]) {
      element.textContent = translations[idioma]['classic_and_others'][key];
    }
    if (translations[idioma] && translations[idioma]['beer_and_shots'][key]) {
      element.textContent = translations[idioma]['beer_and_shots'][key];
    }
  });
}

// Function to fetch translations and update texts
function loadTranslations(idioma) {
  fetch('js/translations.json') // Adjust the path if necessary
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(translations => {
      updateTexts(translations, idioma);
    })
    .catch(error => {
      console.error('Error fetching the translations:', error);
    });
}

// Event listeners for language selection
flagsArray.forEach((flag) => {
  flag.addEventListener('click', () => {
    const idioma = flag.getElementsByTagName('span')[0].textContent.toUpperCase().replace('-', '_'); // Replacing hyphen with underscore for matching JSON keys
    pickedLang(idioma);
  });
});

// Function called when a language flag is clicked
function pickedLang(idioma) {
  //console.log(`${idioma} picked lang`);
  loadTranslations(idioma);
}
