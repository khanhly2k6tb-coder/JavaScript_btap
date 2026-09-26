let products = [
    {
        name: "Áo",
        price: 200000,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85"
    },
    {
        name: "Quần",
        price: 300000,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=85"
    },
    {
        name: "Giày",
        price: 500000,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85"
    }
];


function formatMoney(number) {
    return number.toLocaleString("vi-VN") + "đ";
}


function changeProductImage() {

    let product = document.getElementById("product").value;

    let image = document.getElementById("productImage");
    let productName = document.getElementById("productName");
    let productPrice = document.getElementById("productPrice");

    let selectedProduct;

    if (product === "ao") {
        selectedProduct = products[0];
    } else if (product === "quan") {
        selectedProduct = products[1];
    } else {
        selectedProduct = products[2];
    }

    image.style.opacity = "0";

    setTimeout(function() {
        image.src = selectedProduct.image;
        image.alt = selectedProduct.name;
        productName.innerHTML = selectedProduct.name;
        productPrice.innerHTML = formatMoney(selectedProduct.price);
        image.style.opacity = "1";
    }, 180);

    let productNumber = document.querySelector(".product-number");

    if (product === "ao") {
        productNumber.innerHTML = "01 / 03";
    } else if (product === "quan") {
        productNumber.innerHTML = "02 / 03";
    } else {
        productNumber.innerHTML = "03 / 03";
    }
}


function increaseQuantity() {

    let quantity = document.getElementById("quantity");

    let value = parseInt(quantity.value);

    if (value < 99) {
        quantity.value = value + 1;
    }
}


function decreaseQuantity() {

    let quantity = document.getElementById("quantity");

    let value = parseInt(quantity.value);

    if (value > 1) {
        quantity.value = value - 1;
    }
}


function calculatePrice() {

    let product = document.getElementById("product").value;

    let quantity = parseInt(document.getElementById("quantity").value);

    if (quantity < 1 || isNaN(quantity)) {
        quantity = 1;
        document.getElementById("quantity").value = 1;
    }

    let price;

    if (product === "ao") {
        price = 200000;
    } else if (product === "quan") {
        price = 300000;
    } else {
        price = 500000;
    }

    let subtotal = price * quantity;

    let discount = 0;

    if (subtotal >= 500000) {
        discount = subtotal * 0.10;
    } else {
        discount = 0;
    }

    let total = subtotal - discount;

    document.getElementById("subtotal").innerHTML = formatMoney(subtotal);
    document.getElementById("discount").innerHTML = formatMoney(discount);
    document.getElementById("total").innerHTML = formatMoney(total);

    let message = document.getElementById("discountMessage");

    if (discount > 0) {
        message.innerHTML = "Bạn được giảm 10% vì đơn hàng từ 500.000đ.";
    } else {
        message.innerHTML = "Đơn hàng chưa đạt mức 500.000đ để được giảm giá.";
    }
}


function changeBackground(color) {

    document.body.classList.remove(
        "bg-blue",
        "bg-red",
        "bg-yellow"
    );

    if (color === "blue") {
        document.body.classList.add("bg-blue");
    } else if (color === "red") {
        document.body.classList.add("bg-red");
    } else if (color === "yellow") {
        document.body.classList.add("bg-yellow");
    }
}


function showPriceList() {

    let priceList = document.getElementById("priceList");

    if (priceList.classList.contains("show")) {
        priceList.classList.remove("show");
        priceList.innerHTML = "";
        return;
    }

    priceList.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

        let item = document.createElement("div");

        item.className = "price-item";

        item.innerHTML = `
            <span class="price-number">0${i + 1}</span>
            <span class="price-name">${products[i].name}</span>
            <span class="price-value">${formatMoney(products[i].price)}</span>
        `;

        priceList.appendChild(item);
    }

    priceList.classList.add("show");
}


window.onload = function() {
    changeProductImage();
};