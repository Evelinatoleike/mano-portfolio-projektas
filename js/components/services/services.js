function services(selector, data) {
    // input validation

    // logic
    const DOM = document.querySelector(selector);
    const servicesArray = data.list;
    const imgPath = data.imgPath;

    let HTML = '';

    for (let i = 0; i < servicesArray.length; i++) {
        const service = servicesArray[i];
        console.log(service);

        if (!service.active) {
            continue;
        }

        HTML += `<div class="col-12 col-md-6 col-lg-4 service-item">
                    <img src="${imgPath + service.img}" alt="">
                    <h4>${service.title}</h4>
                    <p>${service.description}</p>
                    <a href="${service.link}" class="fa fa-long-arrow-right"></a>
                </div>`;
    }

    // post logic validation

    // result return
    DOM.innerHTML = HTML;
}

export { services } 