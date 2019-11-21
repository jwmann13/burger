$(document).ready(() => {
    $('.make-burger').on("submit", (event) => {
        event.preventDefault();
        // console.log('1');

        let newBurger = {
            burger_name: $('#burger-text').val().trim(),
            devoured: 0
        }

        $.ajax("/api/burgers", {
            method: "POST",
            data: newBurger
        }).then(() => {
            console.log('added a borger')
            location.reload();
        });
    });

    $('.devour').on("click", function(event){
        event.preventDefault();

        let id = $(this).attr('data-id');
        let devoured = $(this).attr("data-devoured");

        let devour = {
            id: id,
            devoured: devoured
        }

        console.log(devoured)

        $.ajax(`/api/burgers/${id}`, {
            method: "PUT",
            data: devour
        }).then(function() {
            console.log('i eated it')
            location.reload();
        })
    });

    $('.delete-burger').on("click", (event) => {
        event.preventDefault();
    })
})