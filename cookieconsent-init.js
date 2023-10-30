var cc = initCookieConsent();

// microsoft logo
var logo =
  '<img style="width: 110px; height: 30px; display: block;" src="img/logo.png" alt="Logo">';
var cookie = "🍪";

// run plugin with config object
cc.run({
  current_lang: "de",
  autoclear_cookies: true, // default: false
  cookie_name: "cc_cookie_demo1", // default: 'cc_cookie'
  cookie_expiration: 365, // default: 182
  page_scripts: true, // default: false

  // auto_language: null,                     // default: null; could also be 'browser' or 'document'
  autorun: true, // default: true
  // delay: 0,                                // default: 0
  force_consent: true,
  // hide_from_bots: false,                   // default: false
  // remove_cookie_tables: false              // default: false
  // cookie_domain: location.hostname,        // default: current domain
  // cookie_path: "/",                        // default: root
  // cookie_same_site: "Lax",
  // use_rfc_cookie: false,                   // default: false
  // revision: 0,                             // default: 0

  gui_options: {
    consent_modal: {
      layout: "bar", // box,cloud,bar
      position: "bottom right", // bottom,middle,top + left,right,center
      transition: "slide", // zoom,slide
    },
    settings_modal: {
      layout: "box", // box,bar
      // position: 'left',                // right,left (available only if bar layout selected)
      transition: "slide", // zoom,slide
    },
  },

  onFirstAction: function () {
    console.log("onFirstAction fired");
  },

  onAccept: function (cookie) {
    console.log("onAccept fired ...");
  },

  onChange: function (cookie, changed_preferences) {
    console.log("onChange fired ...");
  },

  languages: {
    de: {
      consent_modal: {
        title: cookie + " Wir verwenden Cookies! ",
        description:
          'Hallo, diese Website verwendet essentielle Cookies, um ihren ordnungsgemäßen Betrieb zu gewährleisten, und Tracking-Cookies, um zu verstehen, wie Sie mit ihr interagieren. Letztere werden nur nach Zustimmung gesetzt werden. <button type="button" data-cc="c-settings" class="cc-link">Zur Auswahl</button>',
        primary_btn: {
          text: "Alle akzeptieren",
          role: "accept_all", // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: "Alle ablehnen",
          role: "accept_necessary", // 'settings' or 'accept_necessary'
        },
      },
      settings_modal: {
        title: logo,
        save_settings_btn: "Einstellungen speichern",
        accept_all_btn: "Alle akzeptieren",
        reject_all_btn: "Alle ablehnen",
        close_btn_label: "Schließen",
        cookie_table_headers: [
          { col1: "Name" },
          { col2: "Domain" },
          { col3: "Ablauf" },
          { col4: "Beschreibung" },
        ],
        blocks: [
          {
            title: "Verwendung von Cookies 📢",
            description:
              'Ich verwende Cookies, um die grundlegenden Funktionen der Website zu gewährleisten und um Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie wählen, ob Sie sich ein- oder austragen möchten. Für weitere Einzelheiten zu Cookies und anderen sensiblen Daten lesen Sie bitte die vollständige <a href="datenschutz.html" class="cc-link">Datenschutzerklärung</a>.',
          },
          {
            title: "Notwendige Cookies",
            description:
              "Diese Cookies sind für das ordnungsgemäße Funktionieren meiner Website unerlässlich. Ohne diese Cookies würde die Website nicht richtig funktionieren",
            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
            },
          },
          {
            title: "Leistungs- und Analyse-Cookies",
            description:
              "Diese Cookies ermöglichen es der Website, sich an die von Ihnen in der Vergangenheit getroffenen Auswahlen zu erinnern",
            toggle: {
              value: "analytics", // there are no default categories => you specify them
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              {
                col1: "^_ga",
                col2: "google.com",
                col3: "2 years",
                col4: "description ...",
                is_regex: true,
              },
              {
                col1: "_gid",
                col2: "google.com",
                col3: "1 day",
                col4: "description ...",
              },
            ],
          },
          {
            title: "Cookies für Werbung und Zielgruppenansprache",
            description:
              "Diese Cookies sammeln Informationen darüber, wie Sie die Website nutzen, welche Seiten Sie besucht und welche Links Sie angeklickt haben. Alle Daten sind anonymisiert und können nicht verwendet werden, um Sie zu identifizieren",
            toggle: {
              value: "targeting",
              enabled: false,
              readonly: false,
            },
          },
          {
            title: "Weitere Informationen",
            description:
              "Haben Sie Fragen? Dann nehmen Sie mit uns Kontakt auf.",
          },
        ],
      },
    },
  },
});
