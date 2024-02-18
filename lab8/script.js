// Lab 8.1
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h4 class="country__name">${data.name}</h4>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].symbol}</p>
            </div>
        </article>
    `;
    
    countriesContainer.insertAdjacentHTML('beforeend', html);

    countriesContainer.style.opacity = 1;
}


const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(
            res => {
                if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
                return res.json();
            })
        .then(
            data => {
                console.log(`You are in ${data.city}, ${data.country}`);

                return fetch(`https://countries-api-836d.onrender.com/countries/name/${data.country}`)
            }
        )
        .then(response => {
            if (!response.ok) throw new Error(`Country not found (${response.status})`);
            return response.json();
        })
        .then(data => {
            renderCountry(data[0]);
        })
        .catch(err =>
            console.error(`${err.message} 💥`)
        );
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);


// Lab 8.2
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found!'));
        });
    });
};

let currentImg;

createImage('img/img-1.jpg')
    .then(img => {
        currentImg = img;
        console.log('Image 1 loaded');
        return wait(2);
    })  
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-2.jpg');
    })
    .then(img => {
        currentImg = img;
        console.log('Image 2 loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-3.jpg')
    })
    .then(img => {
        currentImg = img;
        console.log('Image 3 loaded');
        return wait(2)
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(err => console.error(err));


// Lab 8.3
// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//     return new Promise(function (resolve, reject) {
//         const img = document.createElement('img');
//         img.src = imgPath;

//         img.addEventListener('load', function () {
//             imgContainer.append(img);
//             resolve(img);
//         });

//         img.addEventListener('error', function () {
//             reject(new Error('Image not found!'));
//         });
//     });
// };

// let currentImg;

const loadNPause = async function () {
    try {
        // Load image 1
        let img = await createImage('img/img-1.jpg');
        // console.log(img);
        console.log('Image 1 loaded');
        await wait(2);
        img.style.display = 'none';

        // Load image 2
        img = await createImage('img/img-2.jpg');
        // console.log(img);
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none';

        // Load image 3
        img = await createImage('img/img-3.jpg');
        console.log('Image 3 loaded');
        await wait(2);
        img.style.display = 'none';

    } catch (err) {
        console.error(err);
    }
};
loadNPause();


const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));
        // console.log(imgs);

        const imgEl = await Promise.all(imgs);
        // const imgEl = Promise.all(imgs);
        // console.log(imgEl);

        imgEl.forEach(img => img.classList.add('parallel'));
    } catch(err) {
        console.error(err);
    }
}
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
