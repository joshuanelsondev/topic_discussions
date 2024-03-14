const email = document.getElementById('email');
const shopPreference = document.getElementById('shop');
const nikeForm = document.querySelector('form');


nikeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let userEmail = email.value;
    let preference = shopPreference.value;
    // alert(`Thank you for signing up, we will email you at ${userEmail}, with ${capitalizeFirstLetter(preference)}'s clothes!`);
    alert(`Thank you for signing up, we will email you at ${userEmail}, with ${capitalizeFirstLetter(preference) === 'Choose' ? 'Women' : capitalizeFirstLetter(preference)}'s clothes!`)
})

const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
}



