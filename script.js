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
    const params = {
        user_name: document.getElementById("contact-name").value,
        user_email: document.getElementById("contact-email").value,
        user_message: document.getElementById("contact-message").value,
    }
    e.preventDefault()

    //checks if inputs have values
    if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === ''){

        //show message
        contactCon.textContent = 'Write in all the fields'
    }else{
        //serviceId, templateId, #form, publicKey
        emailjs.send('service_hvfhtef', 'template_cb1m6xe', params)
            .then((res) => {
                //show message
                let mmg = confirm("Message sent")
                console.log(res);
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


const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})