//slideShow section function
let slideIndex = 1;
window.onload = setInterval(() => {
  showSlides((slideIndex += 1));
}, 10000);
showSlides(slideIndex);

function slideArrow(n) {
  showSlides((slideIndex += n));
}
function slideCircle(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("fadeImg");
  let dots = document.getElementsByClassName("circle");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// disproduct Section function
let stepNumber = 0;
function stepSlide(n){
arrowRun(stepNumber+=n);
}   
function arrowRun(m){
let step = document.getElementById("disProduct-inner__productList");
  if ((m > 2)||(m < 0) ){
  }else{
  let sum = 0;
  sum = -1236*m;
  step.style.marginLeft=sum+"px";
  }
}
//listItem
  productItem=[
    {
     image: "OPPO-A12.jpg",
     sale: "19%",
     price: " 2.420.000 ₫",
     progress: "90%",
     amount: "194"
   },
   {
    image: "redmi9.jpg",
    sale: "19%",
    price: " 2.890.000 ₫",
    progress: "75%",
    amount: "96"
  },
  {
    image: "OPPO-A12.jpg",
    sale: "19%",
    price: " 2.420.000 ₫",
    progress: "90%",
    amount: "194"
  },
  {
   image: "redmi9.jpg",
   sale: "19%",
   price: " 2.890.000 ₫",
   progress: "75%",
   amount: "96"
  },
  {
   image: "OPPO-A12.jpg",
   sale: "19%",
   price: " 2.420.000 ₫",
   progress: "90%",
   amount: "194"
 },
 {
  image: "redmi9.jpg",
  sale: "19%",
  price: " 2.890.000 ₫",
  progress: "75%",
  amount: "96"
 },
 {
   image: "OPPO-A12.jpg",
   sale: "19%",
   price: " 2.420.000 ₫",
   progress: "90%",
   amount: "194"
 },
 {
  image: "redmi9.jpg",
  sale: "19%",
  price: " 2.890.000 ₫",
  progress: "75%",
  amount: "96"
 },
 {
   image: "OPPO-A12.jpg",
   sale: "19%",
   price: " 2.420.000 ₫",
   progress: "90%",
   amount: "194"
 },
 {
  image: "redmi9.jpg",
  sale: "19%",
  price: " 2.890.000 ₫",
  progress: "75%",
  amount: "96"
 },
 {
  image: "OPPO-A12.jpg",
  sale: "19%",
  price: " 2.420.000 ₫",
  progress: "90%",
  amount: "194"
},
{
 image: "redmi9.jpg",
 sale: "19%",
 price: " 2.890.000 ₫",
 progress: "75%",
 amount: "96"
}
 ]
  function addDisProduct(image, sale, price, progress, amount){
    document.getElementById("disProduct-inner__productList").innerHTML+=`
    <a href="">
    
    <div class="productList__imageSecton">
      <img 
      width= "192px"
      height= "192px" 
      src="./ASSET/image/`+image+`" alt="" />
      <div class="productList-imageSecton__number">
        `+sale+`
      </div>
    </div>
    <div class="productList__price">
      `+price+`
    </div>
    <div class="productList__amount">
      <div
        class="productList-amount__progress"
        style="width: `+progress+`"
      ></div>
      <span>Đã bán `+amount+`</span>
      <img src="./ASSET/image/fire_icon.svg" alt="" />
    </div>
  </a>
`
}
    for(Item of productItem){
      addDisProduct(Item.image, Item.sale, Item.price, Item.progress, Item.amount)
    }
//-------------------------------break-----------------------

//max key: 10 do dinh huong css width co dinh, neu se tu dong nhay xuong hang khac
// Icon section

navItem=[
  {
   image: "nav1.png",
   content: "Mã giảm giá",
 },
 {
  image: "nav2.png",
  content: "Bí kíp săn sale",
},
{
  image: "nav3.png",
  content: "Nạp thẻ & tiền điện",
},
{
  image: "nav4.png",
  content: "Free Ship",
},
{
  image: "nav5.png",
  content: "Hoàn tiền 15%",
},
{
  image: "nav6.png",
  content: "Dành cho hội viên",
},
{
  image: "nav7.png",
  content: "Hẹn giao & lắp đặt",
},
{
  image: "nav8.png",
  content: " Coupon 50%",
},
{
  image: "nav9.png",
  content: "Thực phẩm tươi sống",
},
{
  image: "nav10.png",
  content: "Ưu đãi đối tác",
}
]

function addNav(image, content){
document.getElementById("main__iconSection").innerHTML+=`
<a href="">
<img 
width= "48px"
height= "48px" 
src="./ASSET/image/`+image+`" alt="" />
<span> `+content+`</span>
</a>
`
}
for(Item of navItem){
 addNav(Item.image, Item.content)
}

//-------------------------------break-----------------------
// disBrandList section
brandItem=[
  {
   image: "dis-brand1.jpg",
 },
 {
  image: "dis-brand2.jpg",
},
{
  image: "dis-brand3.jpg",
},
{
  image: "dis-brand4.jpg",
}
]

function addBrand(image){
  document.getElementById("main__disBrandList").innerHTML+=`
  <a href="">
  <img src="./ASSET/image/`+image+`" alt="" />
  </a>
  `
  }
  
for(Item of brandItem){
  addBrand(Item.image)
}

//-------------------------------break-----------------------

//orderList section
listItem=[
  {
   image: "order-list1.jpg",
   content: "Trang trí nhà cửa"
 },
 {
  image: "order-list2.png",
  content: "Sửa chữa nhà cửa"
},
{
  image: "order-list3.jpg",
  content: "Đồ uống - Pha chế"
},
{
  image: "order-list4.jpg",
  content: "Nội thất"
},
{
  image: "order-list5.png",
  content: "Thực phẩm"
},
{
  image: "order-list6.jpg",
  content: "Chăm sóc nhà cửa"
},
{
  image: "order-list7.jpg",
  content: "Thiết bị gia đình"
},
{
  image: "order-list8.jpg",
  content: "Chăm sóc thú cưng"
},
{
  image: "order-list9.jpg",
  content: "Đồ dùng phòng ngủ"
},
{
  image: "order-list10.jpg",
  content: "Đồ dùng nhà bếp"
}
]

function addList(image, content){
  document.getElementById("main-orderList__item").innerHTML+=`
  <a href="">
  <img 
  width= "60px"
  height= "60px"
  src="./ASSET/image/`+image+`" alt="" />
  <span>`+content+`</span>
  </a>
  `
  }
  for(Item of listItem){
    addList(Item.image, Item.content)
  }

//-------------------------------break-----------------------

//SearchSection 
imageItem=[
  {
   image1: "search-group11.jpg",
   image2: "search-group12.jpg",
   image3: "search-group13.jpg",
   color: "rgb(255, 241, 241)",
   content: "sữa đặc ngôi sao phương nam",
   amount: "67 sản phẩm"
 },
 {
  image1: "search-group21.jpg",
  image2: "search-group22.jpg",
  image3: "search-group23.jpg",
  color: "rgb(211, 238, 255)",
  content: "tượng trang trí",
  amount: "1k+ sản phẩm"
},
{
  image1: "search-group31.jpg",
  image2: "search-group32.jpg",
  image3: "search-group33.jpg",
  color: "rgb(252, 248, 228)",
  content: "kính hàn điện tử",
  amount: "737 sản phẩm"
},
{
  image1: "search-group41.jpg",
  image2: "search-group42.jpg",
  image3: "search-group43.jpg",
  color: "rgb(231, 248, 241)",
  content: "cà phê",
  amount: "960 sản phẩm"
}
]
// main__searchSection
// main__searchSection__imageGroup
// main__searchSection__contentSection
// contentSection__title
// contentSection__subTitle

function addImage(image1, image2, image3, color, content, amount){
  document.getElementById("main__searchSection").innerHTML+=`
  <a href="">
    <div class="main__searchSection__imageGroup">
      <img width="86px" 
      height="86px" src="./ASSET/image/`+image1+`" alt="" />
      <img width="86px" 
      height="86px" src="./ASSET/image/`+image2+`" alt="" />
      <img width="86px" 
      height="86px" src="./ASSET/image/`+image3+`" alt="" />
    </div>
    <div class="main__searchSection__contentSection" style="background-color: `+color+`">
      <span class="contentSection__title">`+content+`</span>
      <span class="contentSection__subTitle">`+amount+`</span>
    </div>
  </a>
`
  }
  for(Item of imageItem){
    addImage(Item.image1, Item.image2, Item.image3, Item.color, Item.content, Item.amount)
  }


//-------------------------------break-----------------------

//Disdeal Section
dealItem=[
  {
   image: "dis-deal1.jpg"
 },
 {
  image: "dis-deal2.jpg"
},
{
  image: "dis-deal3.jpg"
}
]

function addDeal(image){
  document.getElementById("main__disDeal").innerHTML+=`
  <a href=""><img src="./ASSET/image/`+image+`" alt="" /></a>
  `
  }
  for(Item of dealItem){
    addDeal(Item.image)
  }

//-------------------------------break-----------------------

//ProductList section
sumOfProduct=[
  {
   link: "OPPO-A12.jpg",
   name:"Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng ",
   rating: "80%",
   rate_amount: 194,
   price:  "2.420.000 ₫",
   dis_price: "-19%"
 },
 {
   link: "redmi9.jpg",
   name:"Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
   rating: "100%",
   rate_amount: 96,
   price:  " 2.890.000 ₫",
   dis_price: "-19%"
},
{
 link: "goigel.jpg",
 name:"Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
 rating: "80%",
 rate_amount: 50,
 price:  "339.000 đ",
 dis_price: "-42%"
},
{
 link: "nemvanthanh.jpg",
 name:"Nệm cao su Vạn Thành Standard chính hãng",
 rating: "90%",
 rate_amount: 20,
 price:  "3.760.000 đ",
 dis_price: "-27%"
},
{
  link: "OPPO-A12.jpg",
  name:"Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng ",
  rating: "80%",
  rate_amount: 194,
  price:  "2.420.000 ₫",
  dis_price: "-19%"
},
{
  link: "redmi9.jpg",
  name:"Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
  rating: "100%",
  rate_amount: 96,
  price:  " 2.890.000 ₫",
  dis_price: "-19%"
},
{
link: "goigel.jpg",
name:"Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
rating: "80%",
rate_amount: 50,
price:  "339.000 đ",
dis_price: "-42%"
},
{
link: "nemvanthanh.jpg",
name:"Nệm cao su Vạn Thành Standard chính hãng",
rating: "90%",
rate_amount: 20,
price:  "3.760.000 đ",
dis_price: "-27%"
},
{
  link: "OPPO-A12.jpg",
  name:"Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng ",
  rating: "80%",
  rate_amount: 194,
  price:  "2.420.000 ₫",
  dis_price: "-19%"
},
{
  link: "redmi9.jpg",
  name:"Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
  rating: "100%",
  rate_amount: 96,
  price:  " 2.890.000 ₫",
  dis_price: "-19%"
},
{
link: "goigel.jpg",
name:"Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
rating: "80%",
rate_amount: 50,
price:  "339.000 đ",
dis_price: "-42%"
},
{
link: "nemvanthanh.jpg",
name:"Nệm cao su Vạn Thành Standard chính hãng",
rating: "90%",
rate_amount: 20,
price:  "3.760.000 đ",
dis_price: "-27%"
},
{
  link: "OPPO-A12.jpg",
  name:"Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng ",
  rating: "80%",
  rate_amount: 194,
  price:  "2.420.000 ₫",
  dis_price: "-19%"
},
{
  link: "redmi9.jpg",
  name:"Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
  rating: "100%",
  rate_amount: 96,
  price:  " 2.890.000 ₫",
  dis_price: "-19%"
},
{
link: "goigel.jpg",
name:"Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
rating: "80%",
rate_amount: 50,
price:  "339.000 đ",
dis_price: "-42%"
},
{
link: "nemvanthanh.jpg",
name:"Nệm cao su Vạn Thành Standard chính hãng",
rating: "90%",
rate_amount: 20,
price:  "3.760.000 đ",
dis_price: "-27%"
},
{
  link: "OPPO-A12.jpg",
  name:"Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng ",
  rating: "80%",
  rate_amount: 194,
  price:  "2.420.000 ₫",
  dis_price: "-19%"
},
{
  link: "redmi9.jpg",
  name:"Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
  rating: "100%",
  rate_amount: 96,
  price:  " 2.890.000 ₫",
  dis_price: "-19%"
},
{
link: "goigel.jpg",
name:"Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
rating: "80%",
rate_amount: 50,
price:  "339.000 đ",
dis_price: "-42%"
},
{
link: "nemvanthanh.jpg",
name:"Nệm cao su Vạn Thành Standard chính hãng",
rating: "90%",
rate_amount: 20,
price:  "3.760.000 đ",
dis_price: "-27%"
},
{
  link: "OPPO-A12.jpg",
  name:"Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng ",
  rating: "80%",
  rate_amount: 194,
  price:  "2.420.000 ₫",
  dis_price: "-19%"
},
{
  link: "redmi9.jpg",
  name:"Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
  rating: "100%",
  rate_amount: 96,
  price:  " 2.890.000 ₫",
  dis_price: "-19%"
},
{
link: "goigel.jpg",
name:"Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
rating: "80%",
rate_amount: 50,
price:  "339.000 đ",
dis_price: "-42%"
},
{
link: "nemvanthanh.jpg",
name:"Nệm cao su Vạn Thành Standard chính hãng",
rating: "90%",
rate_amount: 20,
price:  "3.760.000 đ",
dis_price: "-27%"
},
{
  link: "OPPO-A12.jpg",
  name:"Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng ",
  rating: "80%",
  rate_amount: 194,
  price:  "2.420.000 ₫",
  dis_price: "-19%"
},
{
  link: "redmi9.jpg",
  name:"Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
  rating: "100%",
  rate_amount: 96,
  price:  " 2.890.000 ₫",
  dis_price: "-19%"
},
{
link: "goigel.jpg",
name:"Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
rating: "80%",
rate_amount: 50,
price:  "339.000 đ",
dis_price: "-42%"
},
{
link: "nemvanthanh.jpg",
name:"Nệm cao su Vạn Thành Standard chính hãng",
rating: "90%",
rate_amount: 20,
price:  "3.760.000 đ",
dis_price: "-27%"
},
{
  link: "OPPO-A12.jpg",
  name:"Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng ",
  rating: "80%",
  rate_amount: 194,
  price:  "2.420.000 ₫",
  dis_price: "-19%"
},
{
  link: "redmi9.jpg",
  name:"Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
  rating: "100%",
  rate_amount: 96,
  price:  " 2.890.000 ₫",
  dis_price: "-19%"
},
{
link: "goigel.jpg",
name:"Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
rating: "80%",
rate_amount: 50,
price:  "339.000 đ",
dis_price: "-42%"
},
{
link: "nemvanthanh.jpg",
name:"Nệm cao su Vạn Thành Standard chính hãng",
rating: "90%",
rate_amount: 20,
price:  "3.760.000 đ",
dis_price: "-27%"
},
{
  link: "OPPO-A12.jpg",
  name:"Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng ",
  rating: "80%",
  rate_amount: 194,
  price:  "2.420.000 ₫",
  dis_price: "-19%"
},
{
  link: "redmi9.jpg",
  name:"Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
  rating: "100%",
  rate_amount: 96,
  price:  " 2.890.000 ₫",
  dis_price: "-19%"
},
{
link: "goigel.jpg",
name:"Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
rating: "80%",
rate_amount: 50,
price:  "339.000 đ",
dis_price: "-42%"
},
{
link: "nemvanthanh.jpg",
name:"Nệm cao su Vạn Thành Standard chính hãng",
rating: "90%",
rate_amount: 20,
price:  "3.760.000 đ",
dis_price: "-27%"
},  
{
  link: "OPPO-A12.jpg",
  name:"Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng ",
  rating: "80%",
  rate_amount: 194,
  price:  "2.420.000 ₫",
  dis_price: "-19%"
},
{
  link: "redmi9.jpg",
  name:"Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
  rating: "100%",
  rate_amount: 96,
  price:  " 2.890.000 ₫",
  dis_price: "-19%"
},
{
link: "goigel.jpg",
name:"Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
rating: "80%",
rate_amount: 50,
price:  "339.000 đ",
dis_price: "-42%"
},
{
link: "nemvanthanh.jpg",
name:"Nệm cao su Vạn Thành Standard chính hãng",
rating: "90%",
rate_amount: 20,
price:  "3.760.000 đ",
dis_price: "-27%"
},
{
  link: "OPPO-A12.jpg",
  name:"Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng ",
  rating: "80%",
  rate_amount: 194,
  price:  "2.420.000 ₫",
  dis_price: "-19%"
},
{
  link: "redmi9.jpg",
  name:"Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
  rating: "100%",
  rate_amount: 96,
  price:  " 2.890.000 ₫",
  dis_price: "-19%"
},
{
link: "goigel.jpg",
name:"Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
rating: "80%",
rate_amount: 50,
price:  "339.000 đ",
dis_price: "-42%"
},
{
link: "nemvanthanh.jpg",
name:"Nệm cao su Vạn Thành Standard chính hãng",
rating: "90%",
rate_amount: 20,
price:  "3.760.000 đ",
dis_price: "-27%"
},  {
  link: "OPPO-A12.jpg",
  name:"Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng ",
  rating: "80%",
  rate_amount: 194,
  price:  "2.420.000 ₫",
  dis_price: "-19%"
},
{
  link: "redmi9.jpg",
  name:"Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
  rating: "100%",
  rate_amount: 96,
  price:  " 2.890.000 ₫",
  dis_price: "-19%"
},
{
link: "goigel.jpg",
name:"Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
rating: "80%",
rate_amount: 50,
price:  "339.000 đ",
dis_price: "-42%"
},
{
link: "nemvanthanh.jpg",
name:"Nệm cao su Vạn Thành Standard chính hãng",
rating: "90%",
rate_amount: 20,
price:  "3.760.000 đ",
dis_price: "-27%"
}
]

function addProduct(link, name, rating, rate_amount, price, dis_price){
    document.getElementById("main-productList__innerSection").innerHTML+=`
    <a href="">
    <div class="productList-innerSection__imageSection">
      <img src="./ASSET/image/`+link+`" alt="" />
    </div>
    <div class="productList-innerSection__nameSection">
    `+name+`
    </div>
    <div class="productList-innerSection__reviewSection">
    <div class="productList-reviewSection__ratingSection">
      <div
        class="productList-ratingSection__ratingTotal"
      >
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div
        style="width: `+rating+`"
        class="productList-ratingSection__ratingAverage"
      >
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
    </div>
    <div class="productList-reviewSection__amountSection">
      (`+rate_amount+`)
    </div>
  </div>
<div class="productList-reviewSection__priceSection">
      <div class="productList-priceSection__mainPrice">
      `+price+`
      </div>
      <div class="productList-priceSection__disPrice"> `+dis_price+`</div>
    </div>
  </a>
`
}
for (let product of sumOfProduct){
  
  addProduct(product.link, product.name, product.rating, product.rate_amount, product.price, product.dis_price)
  }
      
// function moreInformation button
document.getElementById("main-productList__moreButton").addEventListener("click", toggleButton)
  function toggleButton(){
    let innerSection = document.getElementById("main-productList__innerSection");
    if(innerSection.classList.contains("toggle")){
      innerSection.classList.remove("toggle");
    } else {
      innerSection.classList.add("toggle");
    }
  }
// FUNCTION OPEN ĐĂNG NHẬP
function registerFormOpen(){
  let form = document.getElementById("bottom");
  form.style.display="block";
}
// FUNCTION CLOSE ĐĂNG NHẬP
function registerFormClose(){
  let form = document.getElementById("bottom");
  form.style.display="none";
}
// FUNCTION ĐĂNG NHẬP
          function validate(){
             var email = document.getElementById("registerEmail").value;
             var password = document.getElementById("registerPassword").value;
             console.log(email);
             console.log(password);
            if((email=="USERNAME@gmail.com")&&(password=="123456")){
              alert("Chúc mừng ban, đăng nhập thành công!");

            }else{
              alert("Bạn nhập sai tên đăng nhập hoặc mật khẩu");
          }
        }



  
  






