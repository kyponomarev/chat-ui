(function () {
    const form = document.querySelector('form');
    if (!form) {
        return;
    }

    addEventListener('submit', (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const data = {};
        for (let [k, v] of formData.entries()) {
            data[k] = v;
        }
        console.log(data);
    });
})();


