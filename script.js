const products = [
    { name: "Pure 24K Pink Gold Brooch", price: "Contact for Price", description: "An heirloom-inspired silhouette meticulously forged and pavé-set with brilliant natural unheated diamonds.", image: "IMG-20261001-WA0000.jpg" },
    { name: "Pure 24K White Gold Brooch", price: "Contact for Price", description: "Architectural brilliance meets timeless elegance, adorned with raw, ethically sourced unheated stones.", image: "IMG-20261001-WA0001.jpg" },
    { name: "Pure 24K Pink Gold Brooch", price: "Contact for Price", description: "A delicate floral-inspired creation shaped by master artisans, sparkling with pure unheated diamond facets.", image: "IMG-20261001-WA0002.jpg" },
    { name: "Pure 24K Black Gold Brooch", price: "Contact for Price", description: "Bold, modern dark metal contrast designed to amplify the intense, fire-like brilliance of untreated gems.", image: "IMG-20261001-WA0009.jpg" },
    { name: "Pure 24K Black Gold Bracelet", price: "$2,200 USD", description: "Classic high-lustre gold contouring wrapping organically around a shimmering cluster of raw diamond crystals.", image: "IMG-20261001-WA3294 (1).jpg" },
    { name: "Pure 24K Yellow Gold Bracelet", price: "Contact for Price", description: "A statement piece featuring rich gold undertones blanketed in a constellation of organic diamonds.", image: "IMG-20261001-WA0417.jpg" },
    { name: "Pure 24K White Gold Brooch", price: "Contact for Price", description: "Gleaming icy platinum tones housing a seamless mosaic of hand-selected, earth-born unheated stones.", image: "IMG-20261001-WA0006.jpg" },
    { name: "Pure 24K Rose Gold Brooch", price: "Contact for Price", description: "Romantic blush hues sculpted into an intricate statement jewel, glowing with natural diamond fire.", image: "IMG-20261001-WA0007.jpg" },
    { name: "Pure 24K Pink Gold Ring", price: "Contact for Price", description: "Cascading drops of brilliant white precious metal framing drop-cut natural unheated diamond clusters.", image: "IMG-20261001-WA4372.jpg" },
    { name: "Pure 24K Pink Gold Earring", price: "Contact for Price", description: "Edgy yet sophisticated black-finished framework elevating the striking purity of untouched white diamonds.", image: "IMG-20261001-WA3310.jpg" },
    { name: "White Gold Earring", price: "Contact for Price", description: "Dangling contemporary geometry designed to catch the light from every angle with untouched diamonds.", image: "IMG-20261001-WA0914.jpg" },
    { name: "White Gold Bracelet", price: "Contact for Price", description: "An opulent wrap-around wristpiece gleaming with warm yellow tones and continuous raw-gem sparkle.", image: "IMG-20261001-WA1363.jpg" },
    { name: "Pink Gold Bracelet", price: "Contact for Price", description: "A sleek, flexible band of cool white gold encrusted with a heavy pave of pure unheated diamonds.", image: "IMG-20261001-WA1377.jpg" },
    { name: "Rose Gold Bracelet", price: "Contact for Price", description: "Warm, romantic links individually cast and polished to perfection, cradling sparkling natural gems.", image: "IMG-20261001-WA1472.jpg" },
    { name: "White Gold Bracelet", price: "Contact for Price", description: "A delicate yet durable statement chain glistening with rich pink gold and high-grade raw diamonds.", image: "IMG-20261001-WA1567 (2).jpg" },
    { name: "Black Gold Necklace", price: "Contact for Price", description: "A breathtaking collar piece resting gracefully on the skin, anchored by a cascade of unheated diamonds.", image: "IMG-20261001-WA2469 (1).jpg" },
    { name: "White Gold Ring", price: "Contact for Price", description: "Minimalist luxury defined by clean lines, pristine white metal, and a dazzling core of unheated stones.", image: "IMG-20261001-WA2491.jpg" },
    { name: "Yellow Gold Ring", price: "Contact for Price", description: "Dramatic dark-hued links creating a striking canvas for the dazzling brilliance of raw diamond settings.", image: "IMG-20261001-WA2564 (1).jpg" },
    { name: "Yellow Gold Necklace", price: "Contact for Price", description: "An imposing, modern silhouette combining blackened precious metal with pristine, natural diamond fire.", image: "IMG-20261001-WA2661.jpg" },
    { name: "Black Gold Ring", price: "Contact for Price", description: "A bold heritage band featuring traditional goldsmithing techniques and vibrant, earth-mined diamonds.", image: "IMG-20261001-WA2837.jpg" },
    { name: "Black Gold Ring", price: "Contact for Price", description: "An opulent statement chain that drapes fluidly, featuring a stunning centerpiece of raw unheated crystals.", image: "IMG-20261001-WA3294 (1).jpg" },
    { name: "Pink Gold Earring", price: "Contact for Price", description: "An intimate, beautifully sculpted band finished with a flush setting of untreated, sparkling diamonds.", image: "IMG-20261001-WA3310.jpg" },
    { name: "Pink Gold Ring", price: "Contact for Price", description: "A fierce, avant-garde cuff structure highlighting the pristine white fire of raw unheated diamonds.", image: "IMG-20261001-WA4372.jpg" },
    { name: "Black Gold Bracelet", price: "Contact for Price", description: "Crisp, icy finishes framing an exquisite mosaic of pure, natural, and untouched diamond accents.", image: "IMG-20261001-WA5326 (1).jpg" },
    { name: "Pink Gold Ring", price: "Contact for Price", description: "Delicate and feminine, this sculpted rose-gold jewel gleams with the organic fire of unheated gems.", image: "IMG-20261001-WA5407.jpg" },
    { name: "Yellow Gold Brooch", price: "Contact for Price", description: "A graceful, curving silhouette that highlights the unmatched radiance of high-clarity unheated stones.", image: "IMG-20261001-WA0005.jpg" }
];

const CONTACT_EMAIL = "contactluxorita@gmail.com";

function showPage(pageName) {
    if (event) {
        event.preventDefault();
    }
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));
    const selectedPage = document.getElementById(pageName + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

function renderCatalog() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = products.map((item) => {
        const hasPrice = item.price !== "Contact for Price";
        const buttonHTML = hasPrice 
            ? `<button class="checkout-btn" onclick="openCheckout(event, '${item.name.replace(/'/g, "\\'")}', '${item.image}', '${item.price}')">Proceed to Checkout</button>`
            : `<button class="contact-price-btn" onclick="openContactForm(event, '${item.name.replace(/'/g, "\\'")}', '${item.image}')">Contact for Price</button>`;

        return `
            <article class="product-card">
                <div class="product-image-wrap">
                    <img src="${item.image}" alt="${item.name} luxury jewelry" loading="lazy">
                </div>
                <h3 class="product-title">${item.name}</h3>
                <div class="product-price-contact">${item.price}</div>
                <div class="product-action">
                    ${buttonHTML}
                </div>
            </article>
        `;
    }).join('');
}

function openContactForm(event, productName, productImage) {
    event.preventDefault();
    const modal = document.getElementById('checkout-modal');
    const image = document.getElementById('checkout-image');
    const title = document.getElementById('checkout-title');
    const price = document.getElementById('checkout-price');

    if (image) image.src = productImage;
    if (title) title.textContent = productName;
    if (price) price.textContent = 'Contact for Price';

    window.currentOrder = {
        productName: productName,
        productImage: productImage,
        productPrice: 'Contact for Price',
        type: 'inquiry'
    };

    if (modal) modal.classList.add('active');
}

function openCheckout(event, productName, productImage, productPrice) {
    event.preventDefault();
    const modal = document.getElementById('checkout-modal');
    const image = document.getElementById('checkout-image');
    const title = document.getElementById('checkout-title');
    const price = document.getElementById('checkout-price');

    if (image) image.src = productImage;
    if (title) title.textContent = productName;
    if (price) price.textContent = productPrice;

    window.currentOrder = {
        productName: productName,
        productImage: productImage,
        productPrice: productPrice,
        type: 'checkout'
    };

    if (modal) modal.classList.add('active');
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    if (modal) modal.classList.remove('active');
    const form = document.getElementById('checkout-form');
    if (form) {
        form.reset();
    }
    const successMsg = document.getElementById('success-message');
    if (successMsg) {
        successMsg.style.display = 'none';
    }
}

function submitOrder(event) {
    if (event) {
        event.preventDefault();
    }

    const buyerName = document.getElementById('buyer-name').value.trim();
    const buyerEmail = document.getElementById('buyer-email').value.trim();
    const buyerPhone = document.getElementById('buyer-phone').value.trim();
    const buyerAddress = document.getElementById('buyer-address').value.trim();
    const buyerMessage = document.getElementById('buyer-message').value.trim();

    if (!buyerName || !buyerEmail || !buyerPhone || !buyerAddress) {
        alert('Please fill in all required fields.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(buyerEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    const productName = window.currentOrder ? window.currentOrder.productName : 'this item';
    const productPrice = window.currentOrder ? window.currentOrder.productPrice : 'Contact for Price';

    // Compose email body
    const emailBody = `
New Product Inquiry from Luxorita Website

Product: ${productName}
Price: ${productPrice}

Customer Information:
Name: ${buyerName}
Email: ${buyerEmail}
Phone: ${buyerPhone}
Address: ${buyerAddress}

${buyerMessage ? `Additional Message:\n${buyerMessage}` : ''}

---
This inquiry was submitted via the Luxorita luxury jewelry website.
Please respond to the customer at: ${buyerEmail}
    `.trim();

    // Create mailto link for the user's device
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=Product Inquiry - ${encodeURIComponent(productName)}&body=${encodeURIComponent(emailBody)}`;
    
    // Also send via alternative method if available
    sendInquiry(buyerName, buyerEmail, productName, buyerPhone, buyerAddress, buyerMessage);

    // Show success message
    const form = document.getElementById('checkout-form');
    const successMsg = document.getElementById('success-message');
    const confirmEmail = document.getElementById('confirm-email');

    if (form) form.style.display = 'none';
    if (successMsg) {
        confirmEmail.textContent = buyerEmail;
        successMsg.style.display = 'block';
    }

    // Auto-close after 5 seconds
    setTimeout(() => {
        closeCheckout();
    }, 5000);
}

function submitContact(event) {
    if (event) {
        event.preventDefault();
    }

    const contactName = document.getElementById('contact-name').value.trim();
    const contactEmail = document.getElementById('contact-email').value.trim();
    const contactSubject = document.getElementById('contact-subject').value.trim();
    const contactMessage = document.getElementById('contact-message').value.trim();

    if (!contactName || !contactEmail || !contactSubject || !contactMessage) {
        alert('Please fill in all required fields.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(contactEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Compose email body
    const emailBody = `
New Contact Inquiry from Luxorita Website

From: ${contactName}
Email: ${contactEmail}
Subject: ${contactSubject}

Message:
${contactMessage}

---
This message was submitted via the Luxorita contact form.
Please respond to: ${contactEmail}
    `.trim();

    // Send inquiry
    sendContactMessage(contactName, contactEmail, contactSubject, contactMessage);

    // Show success message
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('contact-success');

    if (form) form.style.display = 'none';
    if (successMsg) {
        successMsg.style.display = 'block';
    }

    // Auto-close after 5 seconds
    setTimeout(() => {
        if (form) form.style.display = 'block';
        if (successMsg) successMsg.style.display = 'none';
        document.getElementById('contact-form').reset();
    }, 5000);
}

// Send inquiry via FormSubmit or similar service
function sendInquiry(name, email, product, phone, address, message) {
    // Using FormSubmit.co free service
    fetch('https://formsubmit.co/ajax/' + CONTACT_EMAIL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            address: address,
            product: product,
            message: message,
            _subject: 'Product Inquiry - ' + product,
            _replyto: email
        })
    }).catch(err => {
        console.log('Inquiry received locally. Please ensure email configuration is set up.');
    });
}

// Send contact message via FormSubmit
function sendContactMessage(name, email, subject, message) {
    fetch('https://formsubmit.co/ajax/' + CONTACT_EMAIL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message,
            _subject: subject,
            _replyto: email
        })
    }).catch(err => {
        console.log('Message received locally. Please ensure email configuration is set up.');
    });
}

window.onclick = function(event) {
    const modal = document.getElementById('checkout-modal');
    if (event.target === modal) {
        closeCheckout();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    renderCatalog();
    showPage('products');
});
