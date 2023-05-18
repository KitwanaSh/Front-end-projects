const data = [
    {
        id: 1,
        name: "Votocola X tent",
        image: "./images/img1.jpg",
        price: 74,
        cat: "Sport"
    },
    {
        id: 6,
        name: "Alata Belaire visco",
        image: "./images/img6.jpg",
        price: 150,
        cat: "Dress"
    },
    {
        id: 2,
        name: "Amelinda Visco calca",
        image: "./images/img2.jpg",
        price: 50,
        cat: "Causual"
    },
    {
        id: 3,
        name: "Votocola Demondelass",
        image: "./images/img3.jpg",
        price: 340,
        cat: "Dress"
    },
    {
        id: 4,
        name: "Alata Badass 625",
        image: "./images/img4.jpg",
        price: 45,
        cat: "Causual"
    },
    {
        id: 5,
        name: "Disney Mar Malitini x",
        image: "./images/img5.jpg",
        price: 30,
        cat: "Causual"
    },
    {
        id: 7,
        name: "X express Whatch Danilo",
        image: "./images/img7.jpg",
        price: 50,
        cat: "Sport"
    },
    {
        id: 8,
        name: "Maldini 24s Misisipi",
        image: "./images/img8.jpg",
        price: 400,
        cat: "Luxury"
    },
    {
        id: 9,
        name: "Rolex Xs Cloud",
        image: "./images/img9.jpg",
        price: 10,
        cat: "Sport"
    },
    {
        id: 10,
        name: "Rolex dev cloud",
        image: "./images/img10.jpg",
        price: 80,
        cat: "Luxury"
    },
    {
        id: 11,
        name: "Rolex Alcaic 26",
        image: "./images/img11.jpg",
        price: 300,
        cat: "Dress"
    },
    {
        id:12,
        name: "Dress persona",
        image: "./images/img12.jpg",
        price: 250,
        cat: "Causual"
    },
    {
        id: 13,
        name: "America Volva Rolex",
        image: "./images/img13.jpg",
        price: 400,
        cat: "Luxury"
    }
]

const productList = document.querySelector(".products")
const searchInput = document.querySelector(".search")
const catList = document.querySelector(".cat-list")
const priceRage = document.querySelector(".price-range")
const priceValue = document.querySelector(".price-value")

const displaProducts = (filterNames) => {
    productList.innerHTML = filterNames
    .map((i) => 
        `
        <div class="product">
            <img src="${i.image}" alt="">
            <div class="product-desc">
                <span class="prod-name">${i.name}</span>
                <span class="prod-price">$${i.price}</span>
            </div>
        </div>
        `
        ).join("")
}

displaProducts(data)

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase()

    if (value) {
        displaProducts(
            data.filter(item => item.name.toLowerCase().indexOf(value) !== -1)
        )
    } else {
        displaProducts(data)
    }
})

const getAllCategories = () => {
    const allCats = data.map(category => category.cat)
    const catArray = ["All", 
    ...allCats.filter((item, index) => {
        return allCats.indexOf(item) === index
    })]

    catList.innerHTML = catArray.map(categ => 
        `
        <span class = "cat">${categ}</span>
        `
    ).join("");

    catList.addEventListener("click", (e) => {
        const selectedCat = e.target.textContent;

        if (selectedCat === "All") {
            displaProducts(data)
        } else {
            displaProducts(data.filter(item => item.cat === selectedCat))
        }
    })
}

const setPrice = () => {
    const priceLlist = data.map(item => item.price)
    const minPrice = Math.min(...priceLlist)
    const maxPrice = Math.max(...priceLlist)

    priceRage.value = maxPrice
    priceValue.textContent = "$" + maxPrice

    priceRage.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value

        displaProducts(data.filter(item => item.price <= e.target.value))
    })
}

getAllCategories()
setPrice()