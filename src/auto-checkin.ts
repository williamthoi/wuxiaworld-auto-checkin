(function() {
  function clickcheckin() {
    const interactiveElement = document.getElementById(
      'submitLoginMission'
    );
    if (interactiveElement !== null) {
      console.log("found")
      interactiveElement.click();
    }
  }

  function start() {
    console.log("looking now");
    clickcheckin();
  }

  start();
  console.log('WuxiaWorld Auto-checkin');
})();
