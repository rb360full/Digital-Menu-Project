// Variables

const category = [
    { title: "توضیحات | NOTE", imgName: "schedule.svg" },
    { title: "پیش غذا | APPETIZER", imgName: "schedule.svg" },
    { title: "سالاد | SALAD", imgName: "schedule.svg" },
    { title: "غذای اصلی | MAIN COURSE", imgName: "schedule.svg" },
    { title: "پیتزا | PIZZA", imgName: "schedule.svg" },
    { title: "صبحانه‌ | BREAKFAST", imgName: "schedule.svg" },
    { title: "دسر | DESSERT", imgName: "schedule.svg" },
    { title: "نوشیدنی‌های سرد | COLD DRINKS", imgName: "schedule.svg" },
    { title: "فریک شیک | FREAK SHAKE", imgName: "schedule.svg" },
    { title: "قهوه | COFFEE", imgName: "schedule.svg" },
];

const categoryContainer = document.querySelector(".category");

// Functions

function generateCatogoryItems() {
    category.forEach((catItem) => {
        catId = catItem.title.split("| ")[1].toLowerCase().replace(" ", "-");
        console.log(catId);
        categoryContainer.insertAdjacentHTML(
            "beforeend",
            `
        <div class="cat-item bg-primary-subtle2 rounded rounded-4 ms-4">
            <a href="#cat-title-${catId}" class="d-flex flex-column justify-content-center align-items-center">
                <img class="w-60" src="images/icons/${catItem.imgName}" alt="" />
                <p class="text-center">${catItem.title}</p>
            </a>
        </div>
        `
        );
    });
}


const generateMenuItems = () => {
    
}


// Call Faunctions

generateCatogoryItems();

// Events
