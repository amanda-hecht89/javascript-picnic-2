const soda = document.getElementById('soda');

soda.addEventListener('click', () => {
    resetstyles();

});

const resetstyles = () => {
    soda.classList.toggle('picked');
};

