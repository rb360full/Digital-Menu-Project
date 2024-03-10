// Variables

const category = [
    { id: 1, title: "توضیحات | NOTE", imgName: "schedule.svg" },
    { id: 2, title: "پرطرفدارها | POPULAR", imgName: "popular.svg" },
    { id: 3, title: "پیش غذا | APPETIZER", imgName: "APPETIZER.svg" },
    { id: 4, title: "سالاد | SALAD", imgName: "SALAD.svg" },
    { id: 5, title: "غذای اصلی | MAIN COURSE", imgName: "MAIN-COURSE.svg" },
    { id: 6, title: "پیتزا | PIZZA", imgName: "PIZZA.svg" },
    { id: 7, title: "صبحانه‌ | BREAKFAST", imgName: "BREAKFAST.svg" },
    { id: 8, title: "دسر | DESSERT", imgName: "DESSERT.svg" },
    { id: 9, title: "نوشیدنی‌های سرد | COLD DRINKS", imgName: "COLD-DRINKS.svg" },
    { id: 10, title: "قهوه | COFFEE", imgName: "COFFEE.svg" }
];

const foods = [
    { id: 1, title: 'هالومی 🌶| Halloumi', categoryId: 4, price: [127, 120], isOptional: true, OptionType: 'نوع پخت مرغ', options: ['مرغ گریل', 'مرغ سوخاری'], imgName: 'Halloumi.jpg', description: 'سینه مرغ، بیبی اسفناج، کاهو رسمی، پنیر هالومی، سس سبز  Grilled Chicken, Grilled Halloumi, Cheese, Lettuce, Apples, Baby Spinach, Strawberry Dressing' },
    { id: 2, title: 'هالومی 🌶| Halloumi', categoryId: 4, price: [127, 120], isOptional: true, OptionType: 'نوع شومفخ مرغ', options: ['مرغ گریل', 'مرغ سوخاری'], imgName: 'Halloumi.jpg', description: 'سینه مرغ، بیبی اسفناج، کاهو رسمی، پنیر هالومی، سس سبز  Grilled Chicken, Grilled Halloumi, Cheese, Lettuce, Apples, Baby Spinach, Strawberry Dressing' },
    { id: 3, title: 'هالومی 🌶| Halloumi', categoryId: 4, price: [127], isOptional: false, OptionType: 'نوع پخت مرغ', options: ['مرغ گریل', 'مرغ سوخاری'], imgName: 'Halloumi.jpg', description: 'سینه مرغ، بیبی اسفناج، کاهو رسمی، پنیر هالومی، سس سبز  Grilled Chicken, Grilled Halloumi, Cheese, Lettuce, Apples, Baby Spinach, Strawberry Dressing' },
    { id: 4, title: 'آووکادو تست🥑 | Avocado Toast', categoryId: 7, price: [187], isOptional: false, OptionType: '', options: [], imgName: 'avocado-toast-normal.jpg', description: "آووکادو تست  یک تست خامه‌ای و کریسپی و ترد است که یک صبحانه و میان وعده به شمار می‌رود و یا یک غذای خوشمزه و ساده است و بهتر است بلافاصله مصرف شود زیرا آووکادو با گذشت زمان تغییر رنگ می‌دهد و قهوه‌ای و فاسد می‌شود Avocado toast is creamy, crisp and so satisfying. Its a delicious and simple breakfast, snack or light meal! Its best consumed immediately, since the avocado browns over time" },
    { id: 5, title: 'آووکادو تست🥑 | Avocado Toast', categoryId: 7, price: [187], isOptional: false, OptionType: '', options: [], imgName: 'avocado-toast-normal.jpg', description: "آووکادو تست  یک تست خامه‌ای و کریسپی و ترد است که یک صبحانه و میان وعده به شمار می‌رود و یا یک غذای خوشمزه و ساده است و بهتر است بلافاصله مصرف شود زیرا آووکادو با گذشت زمان تغییر رنگ می‌دهد و قهوه‌ای و فاسد می‌شود Avocado toast is creamy, crisp and so satisfying. Its a delicious and simple breakfast, snack or light meal! Its best consumed immediately, since the avocado browns over time" }
]

const mainContainer = document.querySelector(".main");
const categoryContainer = document.querySelector(".category");
const menuItem = document.querySelector('.menu-item')

// Functions

function generateCatogoryItems() {
    category.forEach((catItem) => {
        // catId = catItem.title.split("| ")[1].toLowerCase().replace(" ", "-");
        categoryContainer.insertAdjacentHTML(
            "beforeend",
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


const generateMenuItems = (categoryId) => {
    let cat = category.find(item => item.id === categoryId)

    console.log(cat);

    mainContainer.insertAdjacentHTML('beforeend', `
    <!-- Title -->
    <p id="cat-${cat.id}" class="pt-1" ></p>    
    <div  class="category-title d-flex flex-column justify-content-center align-items-center position-relative mt-5 mb-5 ">
        <span class="bg-secondary text-primary fw-bolder fs-5 position-absolute px-3">« ${cat.title} »</span>
        <div class="bg-secondary-subtle3 p-1s w-80 rounded rounded-1"></div>
    </div>
    <!-- Title -->
    `)

    const catFoods = foods.filter(item => item.categoryId === cat.id)


    catFoods.forEach(item => {

        if (item.isOptional) {


            const minPrice = Math.min(...item.price)
            mainContainer.insertAdjacentHTML('beforeend', `
        
        <!-- item -->
        <div class="menu-item row bg-secondary-subtle2 text-white w-md-50 my-4  pt-2 px-0 rounded rounded-4 overflow-hidden">
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
                <ul class="row p-0 justify-content-center">
                    <li class="d-flex  justify-content-between w-80 py-2">
                        <span class="">${item.options[0]}</span>
                        <strong class="text-primary fw-bold">${item.price[0]}<small class="fs-7">هزار تومان</small></strong>
                    </li>
                    

                </ul>
            </details>




        </div>
        <!-- item -->


        `)

        }
        else {
            mainContainer.insertAdjacentHTML('beforeend', `
        
        <!-- item -->
        <div class="menu-item row bg-secondary-subtle2 text-white w-md-50 my-4  pt-2 px-0 rounded rounded-4 overflow-hidden">
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


        `)

        }
    })





}


// Call Faunctions

generateCatogoryItems();

generateMenuItems(4)
generateMenuItems(7)









// Events
