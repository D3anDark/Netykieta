// Funkcja do ustawiania ciasteczek
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Funkcja do odczytywania ciasteczek
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Funkcja do przełączania motywu
function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        root.setAttribute('data-theme', 'light');
        setCookie('theme', 'light', 30); // Zapisujemy wybrany motyw w ciasteczkach
    } else {
        root.setAttribute('data-theme', 'dark');
        setCookie('theme', 'dark', 30); // Zapisujemy wybrany motyw w ciasteczkach
    }
}

// Funkcja do ustawiania motywu na podstawie ciasteczek
function setThemeFromCookie() {
    const root = document.documentElement;
    const theme = getCookie('theme');

    if (theme) {
        root.setAttribute('data-theme', theme);
    } else {
        root.setAttribute('data-theme', 'dark'); // Domyślny motyw to 'dark'
    }
}

// Ustawiamy motyw na podstawie ciasteczek przy ładowaniu strony
window.onload = setThemeFromCookie;

// Dodajemy nasłuchiwacz zdarzeń do przycisku
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);