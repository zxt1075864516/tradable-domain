// Global variables
let i18n = null; // Stores the current language dictionary
let currentLang = SITE_CONFIG.defaultLang; // Tracks the currently active language
let langSelect = null; // Reference to the language selector DOM element
// Cache loaded languages to prevent duplicate loading
const loadedLanguages = new Set();

// Wait for the DOM to be fully loaded before starting the app
window.addEventListener("DOMContentLoaded", () => {
  startApp();
});

/**
 * Main application entry point.
 * Initializes the app by loading the language and rendering components.
 */
async function startApp() {
  try {
    // 1. Render the language selector UI
    renderLangSelector();

    // 2. Load the appropriate language file (based on config or user preference)
    await loadLanguage(currentLang);

    // 3. Set the dropdown value to the current language
    if (langSelect) {
      langSelect.value = currentLang;
    }

    // 4. Render the domain name and contact list
    renderDomain();
    renderContacts();

    // 5. Initialize the domain name animation
    initDomainAnimation();
  } catch (err) {
    console.error("Startup failed:", err);
  }
}

/**
 * Loads a language file dynamically.
 * Uses a Promise to handle the asynchronous script loading.
 * @param {string} lang - The language code (e.g., 'en', 'zh')
 */
function loadLanguage(lang) {
  return new Promise((resolve) => {
    // Determine the target language (fallback to default if not found)
    const targetLang = SITE_CONFIG.langPaths[lang]
      ? lang
      : SITE_CONFIG.defaultLang;

    // Get the file path for the language
    const path = SITE_CONFIG.langPaths[targetLang];

    // If already loaded, just switch the reference and resolve
    if (loadedLanguages.has(targetLang)) {
      i18n = window[`LOCALE_${targetLang.toUpperCase()}`];
      applyTexts(); // Update the UI texts immediately
      resolve();
      return;
    }

    // Create a new script element to load the language file
    const script = document.createElement("script");
    script.src = path;

    // Handle the onload event
    script.onload = function () {
      // Mark as loaded
      loadedLanguages.add(targetLang);

      // Reference the global variable containing the translations
      const key = `LOCALE_${targetLang.toUpperCase()}`;
      i18n = window[key];

      // Update the UI with the new texts
      applyTexts();

      // Resolve the Promise to continue execution
      resolve();
    };

    // Append the script to the body to start loading
    document.body.appendChild(script);
  });
}

/**
 * Applies translated texts to the DOM elements.
 * Updates the status bar and description content.
 */
function applyTexts() {
  if (!i18n) return;

  // Update the status element with an icon and translated text
  document.querySelector(
    ".status"
  ).innerHTML = `<i class="fas fa-check-circle"></i> ${i18n.status}`;

  // Update the description text
  document.querySelector(".desc").innerHTML = i18n.desc;
}

/**
 * Renders the domain name.
 * Prioritizes: Config > Current Hostname > Default ("example.com")
 */
function renderDomain() {
  const domainEl = document.getElementById("targetDomain");
  let displayDomain = "example.com"; // Default fallback

  // 1. Check if domain is set in SITE_CONFIG
  if (SITE_CONFIG.domain?.trim()) {
    displayDomain = SITE_CONFIG.domain.trim();
  } else {
    // 2. Fallback to current hostname (if not localhost or local IP)
    try {
      const host = window.location.hostname;
      if (host && !host.includes("localhost") && !host.startsWith("192")) {
        displayDomain = host;
      }
    } catch (e) {
      // Ignore errors
    }
  }
  // Set the text content of the domain element
  domainEl.textContent = displayDomain;
}

/**
 * Renders the contact list based on SITE_CONFIG.contacts.
 * Creates elements for each contact item and attaches click events for copying.
 */
function renderContacts() {
  const container = document.getElementById("contactList");
  if (!i18n) return; // Ensure language is loaded

  // Iterate over each contact item in the config
  SITE_CONFIG.contacts.forEach((item) => {
    const div = document.createElement("div");
    div.className = "contact-item";
    div.style.cursor = "pointer";

    // Create the inner content (link or plain text)
    const content = item.link
      ? `<a href="${item.link}">${item.text}</a>`
      : `<span>${item.text}</span>`;

    // Set the HTML with icon and content
    div.innerHTML = `<i class="${item.icon}"></i>${content}`;

    // If it's not a link, attach a clipboard copy event
    if (!item.link) {
      
      div.onclick = () => {
        var wordKey = "WeChat:";
        var copy_text=item.text.substring(item.text.indexOf(wordKey)+wordKey.length).trim()
        navigator.clipboard

          .writeText(copy_text)
          .then(() => showTip(i18n.copySuccess + copy_text))
          .catch(() => showTip(i18n.copyFail));
      };
    }
    // Append the created element to the container
    container.appendChild(div);
  });
}

/**
 * Initializes a simple animation for the domain element.
 * Scales the element up and down after a delay.
 */
function initDomainAnimation() {
  const domain = document.getElementById("targetDomain");
  setTimeout(() => {
    domain.style.transform = "scale(1.1)";
    setTimeout(() => (domain.style.transform = "scale(1)"), 300);
  }, 1000);
}

/**
 * Displays a temporary toast notification (e.g., for copy success).
 * @param {string} msg - The message to display
 */
function showTip(msg) {
  const tip = document.createElement("div");
  tip.className = "copy-tip";
  tip.textContent = msg;
  document.body.appendChild(tip);
  // Remove the toast after 1.6 seconds
  setTimeout(() => tip.remove(), 1600);
}

/**
 * Renders the language selector dropdown.
 * Creates a <select> element with options for each available language.
 */
function renderLangSelector() {
  const container = document.getElementById("langSelector");
  if (!container) return;

  // Create the select element
  langSelect = document.createElement("select");
  langSelect.className = "lang-select";

  // Populate options based on SITE_CONFIG
  Object.keys(SITE_CONFIG.langPaths).forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang;
    option.textContent = SITE_CONFIG.langNames[lang] || lang;
    langSelect.appendChild(option);
  });

  // Add event listener for language change
  langSelect.addEventListener("change", (e) => {
    changeLang(e.target.value);
  });

  // Append the select element to the container
  container.appendChild(langSelect);
}

/**
 * Global function to change the application language.
 * Updates the currentLang variable and reloads the language file.
 * @param {string} lang - The new language code
 */
window.changeLang = async function (lang) {
  if (!SITE_CONFIG.langPaths[lang]) return; // Validate language exists
  currentLang = lang;
  await loadLanguage(lang);

  // Sync the dropdown UI with the new language
  if (langSelect) {
    langSelect.value = currentLang;
  }
};
