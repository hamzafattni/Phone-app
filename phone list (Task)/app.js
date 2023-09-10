const div = document.querySelector("div");
const pera = document.querySelector("p");
const phones = [
    {
        brand: 'Samsung',
        img:"https://m.media-amazon.com/images/I/41KRhotx+PL.jpg",
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: '225,000'
    },
    {
        brand: 'Xiomi',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaCbFHsyXyF_aRh8rDsucF00kKRXMrWPzxQg&usqp=CAU",
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: '40,000'
    },
    {
        brand: 'Infinix',
        img: "https://rakistan.pk/wp-content/uploads/2021/11/infinix-zero-x-pro-pakistan-priceoye-im0ai-500x500-1.webp",
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: '65,000'
    },
    {
        brand: 'Tecno',
        img: "https://images.priceoye.pk/tecno-spark-10-pakistan-priceoye-2144l.jpg",
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: '50,000'
    },
    {
        brand: 'Iphone',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PABQMhBMee8pjSkHnUFHfp5hRAb55-p-lQ&usqp=CAU",
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: '455,000'
    },
    {
        brand: 'Oppo',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlFheCf_At_JpuFfhzNzcGNuJepZbAwVyxw&usqp=CAU",
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: '85,000'
    },
    {
        brand: 'Vivo',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEbOTjjBZwAa0dQ11t_UF5GcJSwSpmR7X6w&usqp=CAU",
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: '55,000'
    }
];
for(let i = 0; i<phones.length;i++){
    div.innerHTML+=`<div><h2>${phones[i].brand}</h2>
    <img src="${phones[i].img}">
    <h4>Model:${phones[i].model}</h4>
    <h4>Ram:${phones[i].ram} Gb</h4>
    <h4>Rom:${phones[i].rom}Gb</h4>
    <h4>Camra:${phones[i].camera}</h4>
    <h4>Price: ${phones[i].price}</h4>
    <button class="cart">Add To Cart</button>
    </div>`
}