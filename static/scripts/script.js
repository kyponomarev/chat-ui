(function () {
    const forms = document.querySelectorAll('form');

    if (forms.length === 0) {
        return;
    }

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const form = e.target;
            const formData = new FormData(form);

            const data = {};
            for (let [k, v] of formData.entries()) {
                data[k] = v;
            }
            console.log(data);
        });
    });

})();


