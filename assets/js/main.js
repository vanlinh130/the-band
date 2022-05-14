const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

// Hàm Hiển thi modal mau vé (thêm class open vào modal) 
function showBuyTickets() {
    modal.classList.add('open')
}

// Hàm Ẩn modal mau vé (gỡ bỏ class open vào modal) 
function hideBuyTickets() {
    modal.classList.remove('open')
}


// Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

// Nghe hành vi click vào button close 
modalClose.addEventListener('click', hideBuyTickets)

// Bước nổi nọt chọn và click sẽ bị ẩn
modal.addEventListener('click', hideBuyTickets)

// ngừng việc nổi bọt tự dộng lại trong container
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()

})