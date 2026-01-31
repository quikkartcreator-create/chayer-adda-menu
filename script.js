const menuData = {
  bn: [
    // Tea
    {category:"Tea", name:"মালাই চা", desc:"ক্রিমি মিল্ক চা", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"রেগুলার দুধ চা", desc:"সাধারণ মিল্ক চা", price:"20৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"তন্দুরি চা", desc:"মশলাদার তন্দুরি স্বাদ", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"মটকা চা", desc:"প্রাকৃতিক মাটির স্বাদ", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"মিক্সড বাদাম চা", desc:"বাদাম মিশ্রিত দুধ চা", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"মালটোভা চা", desc:"মিষ্টি মাল্ট চা", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"হরলিক্স চা", desc:"হরলিক্স স্বাদযুক্ত চা", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"মসলা চা", desc:"মশলাদার দুধ চা", price:"40৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"চকলেট চা", desc:"চকলেট স্বাদযুক্ত চা", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"আদা চা", desc:"তাজা আদা দিয়ে তৈরি চা", price:"30৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"গুড় চা", desc:"গুড় মিশ্রিত দুধ চা", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"স্পেশাল মালাই", desc:"ক্রিমি স্পেশাল চা", price:"70৳", img:"https://via.placeholder.com/300x200"},

    // Black Tea
    {category:"Tea", name:"স্পেশাল রং চা", desc:"বিশেষ রং চা", price:"20৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"তেঁতুল চা", desc:"তেঁতুল স্বাদযুক্ত চা", price:"30৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"পিনিক চা", desc:"মিষ্টি পিনিক চা", price:"30৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"গ্রিন টি", desc:"স্বাস্থ্যকর গ্রিন টি", price:"30৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"লেবু চা", desc:"লেবু স্বাদযুক্ত চা", price:"15৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"মধু চা", desc:"মধু মিশ্রিত চা", price:"30৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"নাগা চা", desc:"মশলাদার নাগা চা", price:"20৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"পুদিনা চা", desc:"তাজা পুদিনা চা", price:"15৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"তুলসী চা", desc:"তুলসী মিশ্রিত চা", price:"15৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"রং চা", desc:"সাধারণ রং চা", price:"15৳", img:"https://via.placeholder.com/300x200"},

    // Coffee
    {category:"Coffee", name:"স্পেশাল হট কফি", desc:"ডিপ আরোমা কফি", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Coffee", name:"হট কফি", desc:"ফ্রেশ ব্রিউড কফি", price:"70৳", img:"https://via.placeholder.com/300x200"},
    {category:"Coffee", name:"ব্ল্যাক কফি", desc:"পিউর বোল্ড কফি", price:"50৳", img:"https://via.placeholder.com/300x200"},

    // Juice & Drinks
    {category:"Juice", name:"লেমন ড্রিংক", desc:"তাজা লেমন ড্রিংক", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Juice", name:"লেমন মিন্ট", desc:"লেমন এবং মিন্ট মিশ্রণ", price:"60৳", img:"https://via.placeholder.com/300x200"},
    {category:"Juice", name:"জিরা পানি", desc:"শীতল ও তাজা জিরা পানি", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Juice", name:"কাঁচা আমের জুস", desc:"কাঁচা আম দিয়ে তৈরি জুস", price:"60৳", img:"https://via.placeholder.com/300x200"},
    {category:"Juice", name:"তরমুজের জুস", desc:"ফ্রেশ তরমুজ জুস", price:"80৳", img:"https://via.placeholder.com/300x200"},

    // Shakes
    {category:"Shakes", name:"কোল্ড কফি", desc:"চিলড কফি", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"চকলেট কোল্ড কফি", desc:"চকলেট ফ্লেভার কফি", price:"100৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"অরিও শেক", desc:"ক্রিমি ওরিও শেক", price:"100৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"ভ্যানিলা শেক", desc:"সুগন্ধি ভ্যানিলা শেক", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"স্ট্রবেরি শেক", desc:"ফ্রেশ স্ট্রবেরি শেক", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"চকলেট শেক", desc:"চকলেট স্বাদযুক্ত শেক", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"মিল্ক শেক", desc:"ক্রিমি মিল্ক শেক", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"কিটক্যাট শেক", desc:"কিটক্যাট ফ্লেভার শেক", price:"100৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"সুইট লাচ্ছি", desc:"মিষ্টি লাচ্ছি", price:"80৳", img:"https://via.placeholder.com/300x200"},

    // Snacks
    {category:"Snacks", name:"চিকেন সিঙ্গারা (4/6/8p)", desc:"ক্রিস্পি ফ্রাইড সিঙ্গারা", price:"50/75/100৳", img:"https://via.placeholder.com/300x200"},
    {category:"Snacks", name:"চিকেন চিজ সোমুসা (1/2p)", desc:"চিজ ফিলড সোমুসা", price:"30/50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Snacks", name:"চিকেন চিজ রোল", desc:"চিজ রোল", price:"40৳", img:"https://via.placeholder.com/300x200"},
    {category:"Snacks", name:"চিকেন লেগ পিস (1p)", desc:"সিঙ্গেল লেগ পিস", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Snacks", name:"চিকেন বল (1 stick)", desc:"চিকেন বল", price:"30৳", img:"https://via.placeholder.com/300x200"},
    {category:"Snacks", name:"চিকেন উইংস (1/2p)", desc:"সিঙ্গেল বা হাফ উইংস", price:"70/120৳", img:"https://via.placeholder.com/300x200"},
    {category:"Snacks", name:"চিকেন স্টিক (1 stick)", desc:"চিকেন স্টিক", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Snacks", name:"পটেটো ওয়েজেস", desc:"ফ্রাইড পটেটো ওয়েজেস", price:"50৳", img:"https://via.placeholder.com/300x200"},
    
    // Extras
    {category:"Extras", name:"কেক (1p)", desc:"ডেজার্ট কেক", price:"20৳", img:"https://via.placeholder.com/300x200"},
    {category:"Extras", name:"রুটি (1p)", desc:"সাধারণ রুটি", price:"20৳", img:"https://via.placeholder.com/300x200"}
  ],

  en: [
    // Tea
    {category:"Tea", name:"Malai Tea", desc:"Creamy milk tea", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Regular Milk Tea", desc:"Classic milk tea", price:"20৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Tandoori Tea", desc:"Spiced tandoori flavor", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Matka Tea", desc:"Earthen pot flavor", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Mixed Nut Tea", desc:"Milk tea with nuts", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Maltova Tea", desc:"Sweet malt tea", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Horlicks Tea", desc:"Horlicks flavored tea", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Masala Tea", desc:"Spiced milk tea", price:"40৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Chocolate Tea", desc:"Chocolate flavored tea", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Ginger Tea", desc:"Fresh ginger infusion", price:"30৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Gur Tea", desc:"Palm jaggery milk tea", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Special Malai", desc:"Creamy special tea", price:"70৳", img:"https://via.placeholder.com/300x200"},

    // Black Tea
    {category:"Tea", name:"Special Black Tea", desc:"Premium black tea", price:"20৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Tamarind Tea", desc:"Tamarind flavored tea", price:"30৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Pink Tea", desc:"Sweet pink tea", price:"30৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Green Tea", desc:"Healthy green tea", price:"30৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Lemon Tea", desc:"Lemon infused tea", price:"15৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Honey Tea", desc:"Tea with honey", price:"30৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Naga Tea", desc:"Spicy naga tea", price:"20৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Mint Tea", desc:"Fresh mint tea", price:"15৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Tulsi Tea", desc:"Tulsi infused tea", price:"15৳", img:"https://via.placeholder.com/300x200"},
    {category:"Tea", name:"Black Tea", desc:"Classic brewed black tea", price:"15৳", img:"https://via.placeholder.com/300x200"},

    // Coffee
    {category:"Coffee", name:"Special Hot Coffee", desc:"Deep aroma coffee", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Coffee", name:"Hot Coffee", desc:"Fresh brewed coffee", price:"70৳", img:"https://via.placeholder.com/300x200"},
    {category:"Coffee", name:"Black Coffee", desc:"Pure bold coffee", price:"50৳", img:"https://via.placeholder.com/300x200"},

    // Juice & Drinks
    {category:"Juice", name:"Lemon Drink", desc:"Fresh lemon drink", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Juice", name:"Lemon Mint", desc:"Lemon with mint", price:"60৳", img:"https://via.placeholder.com/300x200"},
    {category:"Juice", name:"Jeera Water", desc:"Cooling cumin water", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Juice", name:"Green Mango Juice", desc:"Tangy raw mango juice", price:"60৳", img:"https://via.placeholder.com/300x200"},
    {category:"Juice", name:"Watermelon Juice", desc:"Fresh watermelon juice", price:"80৳", img:"https://via.placeholder.com/300x200"},

    // Shakes
    {category:"Shakes", name:"Cold Coffee", desc:"Chilled coffee", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"Chocolate Cold Coffee", desc:"Chocolate flavored coffee", price:"100৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"Oreo Shake", desc:"Creamy Oreo shake", price:"100৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"Vanilla Shake", desc:"Fragrant vanilla shake", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"Strawberry Shake", desc:"Fresh strawberry shake", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"Chocolate Shake", desc:"Chocolate flavored shake", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"Milk Shake", desc:"Creamy milk shake", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"KitKat Shake", desc:"KitKat flavored shake", price:"100৳", img:"https://via.placeholder.com/300x200"},
    {category:"Shakes", name:"Sweet Lassi", desc:"Sweet lassi", price:"80৳", img:"https://via.placeholder.com/300x200"},

    // Snacks
    {category:"Snacks", name:"Chicken Singara (4/6/8p)", desc:"Crispy fried singara", price:"50/75/100৳", img:"https://via.placeholder.com/300x200"},
    {category:"Snacks", name:"Chicken Cheese Samosa (1/2p)", desc:"Cheese filled samosa", price:"30/50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Snacks", name:"Chicken Cheese Roll", desc:"Cheese roll", price:"40৳", img:"https://via.placeholder.com/300x200"},
    {category:"Snacks", name:"Chicken Leg Piece (1p)", desc:"Single leg piece", price:"80৳", img:"https://via.placeholder.com/300x200"},
    {category:"Snacks", name:"Chicken Ball (1 stick)", desc:"Chicken ball", price:"30৳", img:"https://via.placeholder.com/300x200"},
    {category:"Snacks", name:"Chicken Wings (1/2p)", desc:"Single or half wings", price:"70/120৳", img:"https://via.placeholder.com/300x200"},
    {category:"Snacks", name:"Chicken Stick (1 stick)", desc:"Chicken stick", price:"50৳", img:"https://via.placeholder.com/300x200"},
    {category:"Snacks", name:"Potato Wedges", desc:"Fried potato wedges", price:"50৳", img:"https://via.placeholder.com/300x200"},
    
    // Extras
    {category:"Extras", name:"Cake (1p)", desc:"Dessert cake", price:"20৳", img:"https://via.placeholder.com/300x200"},
    {category:"Extras", name:"Ruti (1p)", desc:"Regular flatbread", price:"20৳", img:"https://via.placeholder.com/300x200"}
  ]
};

const menuSection = document.getElementById('menu');

function renderMenu(lang='bn'){
  menuSection.innerHTML = '';
  let categories = [...new Set(menuData[lang].map(item=>item.category))];
  categories.forEach(cat => {
    let catDiv = document.createElement('div');
    catDiv.className = 'section';
    catDiv.innerHTML = `<h2>${cat}</h2><div class="menu"></div>`;
    menuSection.appendChild(catDiv);
    let menuDiv = catDiv.querySelector('.menu');
    menuData[lang].filter(item=>item.category===cat).forEach(item=>{
      let card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<img src="${item.img}" alt="${item.name}"><h3>${item.name}</h3><p>${item.desc}</p><span>${item.price}</span>`;
      menuDiv.appendChild(card);
    });
  });
}

document.getElementById('bn-btn').addEventListener('click', ()=>renderMenu('bn'));
document.getElementById('en-btn').addEventListener('click', ()=>renderMenu('en'));

// Initial load
renderMenu('bn');
