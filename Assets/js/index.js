function join(){
 window.open('https://accounts.google.com/v3/signin/identifier?opparams=%253F&dsh=S-2079795926%3A1702788650116210&access_type=offline&client_id=857409878587-im3f0si9p11h41a6aeiil7cs37frkubb.apps.googleusercontent.com&o2v=1&redirect_uri=https%3A%2F%2Fgdsc.community.dev%2Faccounts%2Fgoogle%2Flogin%2Fcallback%2F&response_type=code&scope=email+profile&service=lso&state=yDnuxjklToMG&theme=glif&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAP-FG2e57cVqylOHAjoRKu6SCURqG-gSBr1ziexd8GqZHIzvoOybOluURTrbW1F6Ab5_lUrSjE3gsd0qjsssnIpUtTsTyOJ8Y1R_62NMY7IxdDtuD6ILQi1piAI5mKIM1q4AWWpPKc9s5LvHd_pqg8CmgDNzrUPSrK--i4Oqp4Jm7Gy5qgGa_7yKLzjEVNLHNXeoe_6eT3mL6ocRzcdDUJMOZzpLeQrKnEzsiJqU1OyULH5TN0PvT2401AafKa0krQL1dDMFjXmWtDjmpp4d3ph_HB_sKOg8CBaHeyOyqcHwwn43raWGriIXMIr8YXQ4Xb7LazeP4olrVYo7nB0FqTcrQQNRKo5NbZSlv7C_Clb4VnEby3bHSrUzPtfwMaPFfqwUEViMQ1azW1f5M2QAUuNHhE6tKz-RsGi1dNvItdD0OSjQ8ew25GOuXWCB51Sz7MWclfatyKu0IuPHusidIVo299p6A%26as%3DS-2079795926%253A1702788650116210%26client_id%3D857409878587-im3f0si9p11h41a6aeiil7cs37frkubb.apps.googleusercontent.com%26theme%3Dglif%23&app_domain=https%3A%2F%2Fgdsc.community.dev&rart=ANgoxcec3ablJTknc5b0Ho6tV96NQJAg7NZ8qQUqFOPbImLqx3K4gEiLi8t5D7uu3OJzmFrl9QEvytovC3sZt89y2EHShR1oVilmu4NUsQEja8p0lYVYdCw')   
}
document.addEventListener('DOMContentLoaded', function () {
  const scrollContainer = document.getElementById('scrollContainer');
  let startTouchX = 0;

  // Function to handle touch start
  function handleTouchStart(event) {
    startTouchX = event.touches[0].clientX;
  }

  // Function to handle touch move
  function handleTouchMove(event) {
    const touchX = event.touches[0].clientX;
    const delta = startTouchX - touchX;

    // Adjust the horizontal scroll position based on touch movement
    scrollContainer.scrollLeft += delta;

    // Update startTouchX for the next touch move event
    startTouchX = touchX;

    // Prevent the default touchmove behavior on the container
    event.preventDefault();
  }

  // Add touch event listeners to the scroll container
  scrollContainer.addEventListener('touchstart', handleTouchStart);
  scrollContainer.addEventListener('touchmove', handleTouchMove);
});