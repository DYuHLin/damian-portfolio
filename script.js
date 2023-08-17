const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-menu");
const menuLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
});

menuLinks.forEach((btn) => {
    btn.addEventListener('click', () => {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
    });
});

const contactForm = document.getElementById("contact-form"),
      contactName = document.getElementById("contact-name"),
      contactEmail = document.getElementById("contact-email"),
      contactMessage = document.getElementById("contact-message"),
      contactCon = document.getElementById("contact-title")

const sendEmail = (e) => {
    e.preventDefault()

    //checks if inputs have values
    if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === ''){

        //show message
        contactCon.textContent = 'Write in all the fields'
    }else{
        //serviceId, templateId, #form, publicKey
        emailjs.sendForm('service_hvfhtef', 'template_cb1m6xe', '#contact-form', 'hW9sOe3e6b6pT5EwK')
            .then(() => {
                //show message
                let mmg = confirm("Message sent")

            }, (error) => {
                alert('Something went wrong...', error)
            })

            //clear input after sending
            contactName.value = ''
            contactEmail.value = ''
            contactMessage.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)

