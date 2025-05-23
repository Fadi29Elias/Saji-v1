import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          navbar: {
            home: 'Home',
            location: 'Location',
            contact: 'Contact',
            menuAriaLabel: 'Display the menu',
          },
          home: {
            TitleLine1: "Saji's",
            TitleLine2: "Restaurant & Cafeteria",
            Subtitle: "Authentic Middle Eastern Cuisine",
            CtaButton: "Coming Soon...",
          },
          location: {
            title: "Our Location",
            visitUs: "Visit Us",
            addressLabel: "Address",
            address: "Piotrkowska 55",
            postalCodeLabel: "Postal Code",
            postalCode: "90-413",
            cityLabel: "City",
            city: "Łódź, Poland",
            mapTitle: "Restaurant Location"
          },
          contact: {
            title: "Contact Us",
            phone: "Phone",
            email: "Email"
          }
        }
      },
      ar: {
        translation: {
          navbar: {
            home: 'الرئيسية',
            location: 'الموقع',
            contact: 'اتصل بنا',
            menuAriaLabel: 'عرض القائمة',
          },
          home: {
            TitleLine1: "Saji's",
            TitleLine2: "مطعم وكافيتريا",
            Subtitle: "مأكولات شرق أوسطية أصيلة",
            CtaButton: "قريباً..."
          },
          location: {
            title: "موقعنا",
            visitUs: "زورونا",
            addressLabel: "العنوان",
            address: "بيوتركوفسكا 55",
            postalCodeLabel: "الرمز البريدي",
            postalCode: "90-413",
            cityLabel: "المدينة",
            city: "وودج، بولندا",
            mapTitle: "موقع المطعم"
          },
          contact: {
            title: "اتصل بنا",
            phone: "الهاتف",
            email: "البريد الإلكتروني"
          }
        }
      },
      pl: {
        translation: {
          navbar: {
            home: 'Strona Główna',
            location: 'Lokalizacja',
            contact: 'Kontakt',
            menuAriaLabel: 'Pokaż menu'
          },
          home: {
            TitleLine1: "Saji's",
            TitleLine2: "Restauracja & Kafeteria",
            Subtitle: "Autentyczna Kuchnia Bliskowschodnia",
            CtaButton: "Wkrótce..."
          },
          location: {
            title: "Nasza Lokalizacja",
            visitUs: "Odwiedź Nas",
            addressLabel: "Adres",
            address: "Piotrkowska 55",
            postalCodeLabel: "Kod Pocztowy",
            postalCode: "90-413",
            cityLabel: "Miasto",
            city: "Łódź, Polska",
            mapTitle: "Lokalizacja Restauracji"
          },
          contact: {
            title: "Kontakt",
            phone: "Telefon",
            email: "Email"
          }
        }
      }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar', 'pl'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'navigator', 'path'],
      caches: ['localStorage', 'cookie'],
      lookupLocalStorage: 'i18nextLng',
      lookupCookie: 'i18next',
    }
  });

export default i18n;