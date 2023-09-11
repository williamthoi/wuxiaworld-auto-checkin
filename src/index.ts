(function() {
    function clickButton() {
  
      console.log("Looking for check-in button");
  
      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button:enabled');
  
      buttons.forEach((button) => {
        if (button.textContent === 'COMPLETED' && !button.disabled) {
          console.log("Completed adding karma");
          return;
        }
  
        if (button.textContent === 'COMPLETE' && !button.disabled) {
          button.click();
          console.log("Karma points added");
          return;
        }
      });
  
    }
  
    const observer = new MutationObserver(clickButton);
  
    // Configure the observer to watch for subtree changes (e.g., dynamic button additions)
    const observerConfig = { childList: true, subtree: true };
    
    // Start observing the DOM for changes
    observer.observe(document.body, observerConfig);
    
    clickButton();
    console.log('WuxiaWorld Auto-checkin');
  })();
  
  