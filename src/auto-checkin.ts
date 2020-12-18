(function() {
  function clickcheckin() {
    const interactiveElement = document.getElementById(
      'submitLoginMission'
    );
    
    const disabled = document.getElementsByClassName(
      'disabled'
    );

    const karmaAmount = document.getElementsByClassName(
      'karma-amount'
    );
    let enabled = true;

    for (let i = 0; i < disabled.length; i++) {
      if (disabled.item(i).id == 'submitLoginMission') {
        enabled = false;
        console.log("Check-in button disabled");
      }
    }

    console.log(karmaAmount);

    if (enabled && karmaAmount.length != 0) {
      if (!karmaAmount[0].innerHTML.includes("<span>3000</span>")) {
        if (interactiveElement !== null) {
          interactiveElement.click();
          console.log("Karma points added");
        }
      } else {
        console.log("Karma full");
      }
    }
  }

  function start() {
    console.log("Looking for check-in button");
    clickcheckin();
  }

  document.addEventListener("DOMSubtreeModified", function(event){
    start();
  });

  console.log('WuxiaWorld Auto-checkin');
})();

