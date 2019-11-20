$(document).ready(() => {
    $('.make-burger').on("submit", (event) => {
        event.preventDefault();
        console.log('1');

        let newBurger = {
            burger_name: $('#burger-text').val().trim(),
            devoured: 0
        }

        $.ajax("/api/burgers", {
            method: "POST",
            data: newBurger
        }).then(() => {
            console.log('added a borger')
            location.reload()
        });
    })
})