function postSubscription(subscription) {
  console.log("Posting!!!!");
  console.log(JSON.stringify(subscription));
  $.ajax({
    type: "POST",
    url: '/subscriptions',
    data: subscription,
    success: function(responseData) {
      alert('Success!')
    },
    dataType: 'text'
  });
    // $.ajax({
    //     type: "POST",
    //     url: '/subscriptions',
    //     timeout: 2000,
    //     data: { image: "/static/images/apples.jpeg", text: "apples" }
    //     // data: JSON.stringify(subscription),
    //     success: function(data) {
    //         //show content
    //         alert('Success!')
    //     },
    //     error: function(jqXHR, textStatus, err) {
    //         //show error message
    //         alert('text status '+textStatus+', err '+err)
    //     }
    // });
}//postItem()