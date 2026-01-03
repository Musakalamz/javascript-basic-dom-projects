const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "dinner buddy",
    category: "dinner",
    price: 20.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// filterBtn was here before it was commented out and moved downs after generating the button dynamically
// const filterBtn = document.querySelectorAll(".filter-btn");
// console.log(filterBtn);

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

// filterBtn.forEach((btn) => {
//   btn.addEventListener("click", function (event) {
//     // console.log(event.currentTarget.dataset);
//     const category = event.currentTarget.dataset.id;
//     // console.log(category);
//     const filteredCategory = menu.filter((cat) => {
//       if (cat.category === category) {
//         return cat;
//       }
//     });
//     console.log(category);
//     if (category === "all") {
//       displayMenuItems(menu);
//     } else {
//       console.log(filteredCategory);
//       displayMenuItems(filteredCategory);
//     }
//   });
// });

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    // console.log(item);
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price"><span>$</span>${item.price}</h4>
            </header>
            <p class="item-text">
             ${item.desc}.
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  // mtd 1- using reduce method
  const categoryReduce = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  // mtd 2- mapping through, turning it into a set and spreading it into a array
  const categories = [
    "all",
    ...new Set(
      menu.map((cat) => {
        return cat.category;
      })
    ),
  ];
  // categories.push("ball");

  // console.log(categories);
  // console.log(categoryReduce);

  const categoryBtn = categories
    .map((cat) => {
      return `<button type="button" class="filter-btn" data-id=${cat}>
          ${cat}
        </button>`;
    })
    .join("");
  // console.log(categoryBtn);
  btnContainer.innerHTML = categoryBtn;

  const filterBtn = btnContainer.querySelectorAll(".filter-btn");
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      // console.log(event.currentTarget.dataset);
      const category = event.currentTarget.dataset.id;
      // console.log(category);
      const filteredCategory = menu.filter((cat) => {
        if (cat.category === category) {
          return cat;
        }
      });
      console.log(category);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        console.log(filteredCategory);
        displayMenuItems(filteredCategory);
      }
    });
  });
}
