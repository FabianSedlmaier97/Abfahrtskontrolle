/* EFFECT JS 1: Haptisches Touch-Feedback (optional, wird ignoriert wenn nicht unterstützt) – START */
(function () {
  const buttons = document.querySelectorAll(".btn-card");
  buttons.forEach(btn => {
    btn.addEventListener(
      "touchstart",
      () => {
        if (navigator.vibrate) {
          navigator.vibrate(10); // sehr kurzes Feedback
        }
      },
      { passive: true }
    );
  });
})();
/* EFFECT JS 1 – END */

/* EFFECT JS 2: Klick-Sperre gegen Doppelklicks / mehrfachen Tap – START */
(function () {
  const buttons = document.querySelectorAll(".btn-card");
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      if (btn.dataset.locked === "true") {
        // Zweiter Klick wird verworfen
        e.preventDefault();
        return;
      }
      // Button für kurze Zeit sperren
      btn.dataset.locked = "true";
      setTimeout(() => {
        delete btn.dataset.locked;
      }, 300); // 300ms reichen für iOS/Android-Taps
    });
  });
})();
/* EFFECT JS 2 – END */
