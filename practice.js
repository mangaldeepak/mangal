document.addEventListener('DOMContentLoaded', function () {
    var countdownElement = document.getElementById('countdown');
    var birthdayMessageElement = document.getElementById('birthday-message');

    function updateCountdown() {
        var now = new Date();
        var tomorrow = new Date(now);
        tomorrow.setDate(now.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);

        var timeUntilBirthday = tomorrow - now;

        var days = Math.floor(timeUntilBirthday / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeUntilBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeUntilBirthday % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeUntilBirthday % (1000 * 60)) / 1000);

        countdownElement.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';

birthdayMessageElement.innerHTML = '“Be happy! Today is the day you were brought into this world to be a blessing and inspiration to the people around you! You are a wonderful person! May you be given more birthdays to fulfill all of your dreams!”';

}

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
