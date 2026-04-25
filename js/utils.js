(function() {
    var startYear = 2010;
    var years = new Date().getFullYear() - startYear;
    var label = years === 1 ? 'year' : 'years';
    var el = document.getElementById('experience-years');
    if (el) {
        el.textContent = years + ' ' + label;
    }
})();
