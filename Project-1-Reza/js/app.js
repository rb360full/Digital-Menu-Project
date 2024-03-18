// Variables

const mainContainer = document.querySelector(".main");
const categoryContainer = document.querySelector(".category");
const categoryElem = document.querySelector(".category");
const dialogContainer = document.querySelector('.dialog-container')
const myFirebaseApi = "https://digital-online-menu-default-rtdb.firebaseio.com/";

let headerHeight = document.querySelector(".header").offsetHeight;
// categoryElem.addEventListener("click", (e) => {
//     e.target.closest("a")
//         ? window.scrollTo({
//             top: this.offsetHeight - headerHeight,
//             behavior: "smooth",
//         })
//         : null;
// });

// DataBase

let category = [];
// const category = [
//     { id: 1, title: "توضیحات | NOTE", imgName: "schedule.svg" },
//     { id: 2, title: "پرطرفدارها | POPULAR", imgName: "popular.svg" },
//     { id: 3, title: "پیش غذا | APPETIZER", imgName: "APPETIZER.svg" },
//     { id: 4, title: "سالاد | SALAD", imgName: "SALAD.svg" },
//     { id: 5, title: "غذای اصلی | MAIN COURSE", imgName: "MAIN-COURSE.svg" },
//     { id: 6, title: "پیتزا | PIZZA", imgName: "PIZZA.svg" },
//     { id: 7, title: "صبحانه‌ | BREAKFAST", imgName: "BREAKFAST.svg" },
//     { id: 8, title: "دسر | DESSERT", imgName: "DESSERT.svg" },
//     { id: 9, title: "نوشیدنی‌های سرد | COLD DRINKS", imgName: "COLD-DRINKS.svg" },
//     { id: 10, title: "قهوه | COFFEE", imgName: "COFFEE.svg" },
// ];

// const foods = [
//     {
//         id: 1,
//         title: "هالومی 🌶| Halloumi",
//         categoryId: 4,
//         price: [127],
//         isOptional: false,
//         OptionType: false,
//         options: [null],
//         imgName: "Halloumi.jpg",
//         description:
//             "سینه مرغ، بیبی اسفناج، کاهو رسمی، پنیر هالومی، سس سبز  Grilled Chicken, Grilled Halloumi, Cheese, Lettuce, Apples, Baby Spinach, Strawberry Dressing",
//     },
//     {
//         id: 2,
//         title: "هالومی 🌶| Halloumi",
//         categoryId: 4,
//         price: [127, 120, 110],
//         isOptional: true,
//         OptionType: "نوع شومفخ مرغ",
//         options: ["مرغ گریل", "مرغ سوخاری", "مرغ پخته"],
//         imgName: "Halloumi.jpg",
//         description:
//             "سینه مرغ، بیبی اسفناج، کاهو رسمی، پنیر هالومی، سس سبز  Grilled Chicken, Grilled Halloumi, Cheese, Lettuce, Apples, Baby Spinach, Strawberry Dressing",
//     },
//     {
//         id: 3,
//         title: "هالومی 🌶| Halloumi",
//         categoryId: 4,
//         price: [127],
//         isOptional: false,
//         OptionType: "نوع پخت مرغ",
//         options: ["مرغ گریل", "مرغ سوخاری"],
//         imgName: "Halloumi.jpg",
//         description:
//             "سینه مرغ، بیبی اسفناج، کاهو رسمی، پنیر هالومی، سس سبز  Grilled Chicken, Grilled Halloumi, Cheese, Lettuce, Apples, Baby Spinach, Strawberry Dressing",
//     },
//     {
//         id: 4,
//         title: "آووکادو تست🥑 | Avocado Toast",
//         categoryId: 7,
//         price: [187],
//         isOptional: false,
//         OptionType: "",
//         options: [],
//         imgName: "avocado-toast-normal.jpg",
//         description:
//             "آووکادو تست  یک تست خامه‌ای و کریسپی و ترد است که یک صبحانه و میان وعده به شمار می‌رود و یا یک غذای خوشمزه و ساده است و بهتر است بلافاصله مصرف شود زیرا آووکادو با گذشت زمان تغییر رنگ می‌دهد و قهوه‌ای و فاسد می‌شود Avocado toast is creamy, crisp and so satisfying. Its a delicious and simple breakfast, snack or light meal! Its best consumed immediately, since the avocado browns over time",
//     },
//     {
//         id: 5,
//         title: "آووکادو تست🥑 | Avocado Toast",
//         categoryId: 7,
//         price: [187],
//         isOptional: false,
//         OptionType: "",
//         options: [],
//         imgName: "avocado-toast-normal.jpg",
//         description:
//             "آووکادو تست  یک تست خامه‌ای و کریسپی و ترد است که یک صبحانه و میان وعده به شمار می‌رود و یا یک غذای خوشمزه و ساده است و بهتر است بلافاصله مصرف شود زیرا آووکادو با گذشت زمان تغییر رنگ می‌دهد و قهوه‌ای و فاسد می‌شود Avocado toast is creamy, crisp and so satisfying. Its a delicious and simple breakfast, snack or light meal! Its best consumed immediately, since the avocado browns over time",
//     },
// ];

let foods = [];


// Functions

function generateCatogoryItems() {
    category.forEach((catItem) => {
        categoryContainer.insertAdjacentHTML(
            "afterbegin",
            `
        <div class="cat-item bg-primary-subtle2 rounded rounded-4 ms-4 pt-2">
            <a href="#cat-${catItem.id}" class="d-flex flex-column justify-content-center align-items-center">
                <img class="w-60" src="images/icons/${catItem.imgName}" alt="" />
                <p class="text-center">${catItem.title}</p>
            </a>
        </div>
        `
        );
    });
}

const generateMenuItems = (...categoryArray) => {

    categoryArray.forEach((cat) => {
        foods.some((item) => item.categoryId == cat.id)
            ? mainContainer.insertAdjacentHTML(
                "beforeend",
                `
    <!-- Title -->
    <p class="title-p"><a class="title-a" id="cat-${cat.id}"></a></p>
      
    <div  class="category-title d-flex flex-column justify-content-center align-items-center position-relative mt-5 mb-5 ">
        <span class="bg-secondary text-primary fw-bolder fs-5 position-absolute px-3">« ${cat.title} »</span>
        <div class="bg-secondary-subtle3 p-1s w-80 rounded rounded-1"></div>
    </div>
    <!-- Title -->
    `
            )
            : null;

        const catFoods = foods.filter((item) => item.categoryId === cat.id);

        catFoods.forEach((item) => {
            if (item.isOptional) {
                const minPrice = Math.min(...item.price);
                mainContainer.insertAdjacentHTML(
                    "beforeend",
                    `
        <!-- item -->
        <div class="menu-item row bg-secondary-subtle2 text-white w-lg-50 mx-auto my-4  pt-2 px-0 rounded rounded-4 overflow-hidden" id="food-${item.id}">
            <div class="col-4 col-sm-3 d-flex flex-column p-0 justify-content-center align-items-center">
                <div class="ps-2 pb-2">
                    <img class="img-fluid  rounded rounded-2" src="images/${item.imgName}" alt="" />
                </div>
            </div>
            <div class="menu-item-text col-8 col-sm-9 d-flex flex-column p-0 ">
                <h5 class="menu-item-title ps-3 ">${item.title}</h5>
                <div class="menu-item-content pt-0 px-3 fs-6s">${item.description}</div>
                <span class="fs-6l mt-2 mb-2  px-4 ">
                    <small> از </small>
                    <b>${minPrice}</b>
                    <small>هزار تومان</small>
                </span>
            </div>
            <details class="bg-secondary-subtle py-2">
                <summary>
                    <h6>قابلیت انتخاب <span class="text-primary">« ${item.OptionType} »</span></h6>
                </summary>
                <ul id="food-${item.id}-option" class="row p-0 justify-content-center">

                </ul>
            </details>
        </div>
        <!-- item -->
        `
                );

                let summaryUl = document.querySelector(`#food-${item.id}-option`);
                for (let i = 0; i < item.options.length; i++) {
                    summaryUl.insertAdjacentHTML(
                        "beforeend",
                        `
                <li class="d-flex  justify-content-between w-80 py-2">
                    <span class="">${item.options[i]}</span>
                    <strong class="text-primary fw-bold">${item.price[i]}<small class="fs-7">هزار تومان</small></strong>
                </li>
                `
                    );
                }
            } else {
                mainContainer.insertAdjacentHTML(
                    "beforeend",
                    `
        <!-- item -->
        <div class="menu-item row bg-secondary-subtle2 text-white w-lg-50 mx-auto my-4  pt-2 px-0 rounded rounded-4 overflow-hidden" id="food-${item.id}">
            <div class="col-4 col-sm-3 d-flex flex-column p-0 justify-content-center align-items-center">
                <div class="ps-2 pb-2">
                    <img class="img-fluid  rounded rounded-2" src="images/${item.imgName}" alt="" />
                </div>
            </div>
            <div class="menu-item-text col-8 col-sm-9 d-flex flex-column p-0 ">
                <h5 class="menu-item-title ps-3 ">${item.title}</h5>
                <div class="menu-item-content pt-0 px-3 fs-6s">${item.description}</div>
                <span class="fs-6l mt-2 mb-2  px-4 ">
                    <b>${item.price[0]}</b>
                    <small>هزار تومان</small>
                </span>
            </div>
        </div>
        <!-- item -->
        `
                );
            }
        });
    });
};


function generateModal(item) {
    const minPrice = Math.min(...item.price);
    const smallElem = item.price.length > 1 ? `<small class="text-primary fs-6s"> از </small> ` : null

    const dialogElement = `
    <div class="dialog  col-11 col-sm-10 col-md-7 col-lg-5 col-xl-3 w-xl-30 d-flex flex-column mx-auto rounded rounded-4 overflow-hidden position-fixed">
        <div class=" w-100 d-flex justify-content-center align-items-center rounded rounded-top-4 overflow-hidden ">
            <img src="images/سوپ-جو-barley-soup-normal.jpg" class="rounded-top-4" alt="" />
        </div>
        <div class="dialog-cart py-3 w-100 d-flex justify-content-center  rounded-bottom-4 overflow-hidden align-items-center bg-secondary">
            <div class="dialog-desc w-90 h-80 rounded rounded-3">
                <div class="dialog-title-container d-flex justify-content-around w-100 text-white pt-1">
                    ${smallElem}
                    <h1 class="dialog-title fs-6s fs-sm-6l">${item.title}</h1>
                    <h1 class="dialog-title fs-6s fs-sm-6l">
                        ${minPrice}
                        <small class="text-primary fs-6s"> هزار تومان </small>
                    </h1>
                </div>

                <div class="d-flex justify-content-center w-100">
                    <button class="bg-primary py-3 w-80 border-0 rounded rounded-5 user-select-none mt-4 fs-6s fs-sm-6l" id="add-to-card">افزودن به یادداشت
                        سفارش</button>
                </div>
            </div>
         </div>
    </div>
    `

    dialogContainer.insertAdjacentElement('afterbegin', dialogElement)
}

async function callApiFunctions() {
    await getRequest("category")
        .then((result) => {
            category = result.filter(item => item);
            generateCatogoryItems();
        })
        .catch((err) => {
            callApiFunctions();
        });
    await getRequest("foods")
        .then((result) => {
            foods = result.filter(item => item);
            generateMenuItems(...category);
        })
        .catch((err) => {
            callApiFunctions();
        });

    await carouselHandler();
}

async function carouselHandler() {
    const categoty = document.querySelector(".category");
    const catItems = document.querySelectorAll(".cat-item");
    catItems.forEach((cat, index) => {
        cat.addEventListener("click", (e) => {
            // e.preventDefault();

            const catLink = e.target.closest(".category a");
            const catHref = catLink.getAttribute("href").split("#")[1];
            const section = document.getElementById(catHref);
            section && section.scrollIntoView({ behavior: "smooth" });

            // Remove 'black' class from all cat elements
            catItems.forEach((d) => d.classList.remove("black"));
            // Add 'black' class to the clicked cat element
            cat.classList.add("black");

            const rect = cat.getBoundingClientRect();

            // Get the width of the div element
            const categoryWidth = categoty.clientWidth;
            const catItemWidth = rect.width;
            const scrollableWidth = categoty.scrollWidth;

            // Calculate the scroll position to center the clicked cat element
            const scrollX = rect.left + categoty.scrollLeft - categoryWidth / 2 + catItemWidth / 2;

            // Ensure the scroll position is within the bounds of the scrollable area
            const maxScrollX = scrollableWidth - categoryWidth;
            const finalScrollX = Math.max(0, Math.min(maxScrollX, scrollX));

            // Scroll the div element horizontally to position the clicked cat element in the middle

            categoty.scrollTo({
                left: finalScrollX,
                behavior: "smooth",
            });

            e.target.click()


        });
    });

    categoryContainer.scrollLeft = categoryElem.scrollWidth - categoryElem.clientWidth;
}

// Events

mainContainer.addEventListener('click', e => {
    const foodItem = e.target.closest('.menu-item') 
    const foodId = foodItem.id.split('-')[1]
    console.log(foodId);

})




















// API Functions 
async function postRequest(array, arrayStringName) {
    let req = `${myFirebaseApi}${arrayStringName}.json`;
    let res = await fetch(req, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(array)
    });

    return res;
}
async function setRequest(array, arrayStringName, index) {

    // let req = `${myFirebaseApi}${arrayStringName}.json`;
    let req = index ? `${myFirebaseApi}${arrayStringName}/${index}.json` : `${myFirebaseApi}${arrayStringName}.json`
    console.log(req);
    let res = await fetch(req, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(array)
    });

    return res;
}

async function getRequest(arrayStringName, index) {
    let req = index ? `${myFirebaseApi}${arrayStringName}/${index}.json` : `${myFirebaseApi}${arrayStringName}.json`
    // let req = `${myFirebaseApi}${arrayStringName}.json`;
    console.log(req);
    let res = await fetch(req);
    let resJson = await res.json();

    return Object.values(resJson);
}

async function deleteRequest(arrayStringName, index) {
    let req = index ? `${myFirebaseApi}${arrayStringName}/${index}.json` : `${myFirebaseApi}${arrayStringName}.json`
    // let req = `${myFirebaseApi}${arrayStringName}.json`;
    let res = await fetch(req, {
        method: "DELETE",
    });

    return res;
}
// Call Faunctions

callApiFunctions();
// generateCatogoryItems();
// generateMenuItems(...category);

// Events

// const categoty = document.querySelector('.category');
// const catItems = document.querySelectorAll('.cat-item');
// catItems.forEach((cat, index) => {
//     cat.addEventListener('click', e => {

//         e.preventDefault();
//         const catLink = e.target.closest('.category a')
//         const catHref = catLink.getAttribute('href').split('#')[1];
//         const section = document.getElementById(catHref);
//         console.log(section);
//         section && section.scrollIntoView({ behavior: 'smooth' });

//         // Remove 'black' class from all cat elements
//         catItems.forEach(d => d.classList.remove('black'));
//         // Add 'black' class to the clicked cat element
//         cat.classList.add('black');

//         const rect = cat.getBoundingClientRect();

//         // Get the width of the div element
//         const categoryWidth = categoty.clientWidth;
//         const catItemWidth = rect.width;
//         const scrollableWidth = categoty.scrollWidth;

//         // Calculate the scroll position to center the clicked cat element
//         const scrollX = rect.left + categoty.scrollLeft - (categoryWidth / 2) + (catItemWidth / 2);

//         // Ensure the scroll position is within the bounds of the scrollable area
//         const maxScrollX = scrollableWidth - categoryWidth;
//         const finalScrollX = Math.max(0, Math.min(maxScrollX, scrollX));

//         // Scroll the div element horizontally to position the clicked cat element in the middle

//         categoty.scrollTo({
//             left: finalScrollX,
//             behavior: 'smooth'
//         });
//     });
// });

// console.log('Delete: ' + deleteRequest('foods'));
// console.log('Delete: ' + deleteRequest('category'));

// console.log('Post: ' + postRequest( foods , 'foods'));
// console.log('Post: ' + postRequest( category , 'category'));

//  console.log(getRequest('foods'));
//  console.log(getRequest('category'));
