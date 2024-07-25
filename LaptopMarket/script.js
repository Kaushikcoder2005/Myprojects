const products = [
    {
        name: "Asus ROG",
        price: "₹1,99,509",
        details: "ASUS ROGtrix G16 (2024), 16inch (40.64cm) QHD+ 240Hz, Intel Core i9 14900HX, Gaming Laptop (16GB DDR5/1TB SSD/NVIDIA GeForce RTX 4070 /Windows 11/Office 2021/Eclipse Gray/2.50 Kg), G614JIR-N4062WS",
        img:"https://images-cdn.ubuy.co.in/633ac9ba91f1d626b478e8d0-asus-rog-strix-g-2019-gaming-laptop.jpg",
    },
    {
        name: "DELL",
        price: "₹49,990",
        details: "ASUS ROGtrix G16 (2024), 16inch (40.64cm) QHD+ 240Hz, Intel Core i9 14900HX, Gaming Laptop (16GB DDR5/1TB SSD/NVIDIA GeForce RTX 4070 /Windows 11/Office 2021/Eclipse Gray/2.50 Kg), G614JIR-N4062WS",
        details: "Dell 14 Thin & Light Laptop, Intel Core i5-1235U Processor, 8GB + 512GB SSD, 14.0 inch (35.62cm) FHD AG 250 nits Display, Windows 11 + MSO'21 & 15 Month McAfee, Grey, Spill-Resistant Keyboard, 1.48kg",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKlZqY2zDlWbdRLMTPOOxoNBfLEvOWV2nzg&s",
    },
    {
        name: "Customise your 15″ MacBook Air - Space Grey",
        price: "₹1,34,900",
        details: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0aCpaACJkvDEf5PSJwvDU61tEL1rH32ScA&s",
    },
    {
        name: "",
        price: "₹",
        details: "",
        img:"https://images-cdn.ubuy.co.in/633ac9ba91f1d626b478e8d0-asus-rog-strix-g-2019-gaming-laptop.jpg",
    },
    {
        name: "",
        price: "₹",
        details: "",
        img:"https://images-cdn.ubuy.co.in/633ac9ba91f1d626b478e8d0-asus-rog-strix-g-2019-gaming-laptop.jpg",
    },
    {
        name: "",
        price: "₹",
        details: "",
        img:"https://images-cdn.ubuy.co.in/633ac9ba91f1d626b478e8d0-asus-rog-strix-g-2019-gaming-laptop.jpg",
    },
    {
        name: "",
        price: "₹",
        details: "",
        img:"https://images-cdn.ubuy.co.in/633ac9ba91f1d626b478e8d0-asus-rog-strix-g-2019-gaming-laptop.jpg",
    },
    {
        name: "",
        price: "₹",
        details: "",
        img:"https://images-cdn.ubuy.co.in/633ac9ba91f1d626b478e8d0-asus-rog-strix-g-2019-gaming-laptop.jpg",
    },
    {
        name: "",
        price: "₹",
        details: "",
        img:"https://images-cdn.ubuy.co.in/633ac9ba91f1d626b478e8d0-asus-rog-strix-g-2019-gaming-laptop.jpg",
    },
    {
        name: "",
        price: "₹",
        details: "",
        img:"https://images-cdn.ubuy.co.in/633ac9ba91f1d626b478e8d0-asus-rog-strix-g-2019-gaming-laptop.jpg",
    },

]

const product1 = document.querySelector('.products')
product1.textContent=''

products.forEach((p)=>{
    const cards = document.createElement('div')
    cards.classList.add('card')
    const divs = document.createElement('div')
    divs.classList.add('bg')
    console.log(divs);
    const blobs= document.createElement('div')
    blobs.classList.add("blob")
    
    const img = document.createElement('img')
    img.src = p.img

    const header2 = document.createElement('h2')
    header2.textContent = p.name.length > 2? p.name.slice(0,30):'___'

    const header3 = document.createElement('h3')
    header3.textContent = p.price

    const details = document.createElement('p')
    details.textContent = p.details.length > 50 ? p.details.slice(0,50) + '....' : '_____'

    divs.appendChild(img)
    divs.appendChild(header2)
    divs.appendChild(header3)
    divs.appendChild(details )
    // divs.appendChild(blobs)


    cards.appendChild(blobs)
    cards.appendChild(divs)
    product1.appendChild(cards)
})