$(() => {
  // create new burger
  // $('.burger').on('click', (event) => {
  //   event.preventDefault();
  //   const name = $('#burger')
  //     .val()
  //     .trim();
  //   const newBurger = name;
  //   $.ajax('/api/burgers', {
  //     type: 'POST',
  //     data: newBurger,
  //   }).then(() => {
  //     location.reload();
  //   });
  // });

  // update burger
  $('.devour').on('click', function devour(event) {
    const id = $(this).attr('data-id');
    const burgerToDevour = {
      id,
    };
    console.log(burgerToDevour);
    $.ajax(`/api/burgers/${id}`, {
      type: 'PUT',
      data: `${burgerToDevour}`,
    }).then(() => {
      console.log("reloaded");
      location.reload();
    });
  });
});
