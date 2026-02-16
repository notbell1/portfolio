export const initContactForm = () => {
  const form = document.getElementById("contactForm");
  const btnSubmit = document.getElementById("btnSubmit");
  const statusBox = document.getElementById("formStatus");

  if (!form || !btnSubmit || !statusBox) return;

  const COOLDOWN_TIME = 60000;
  let lastSubmitTime = localStorage.getItem("last_submit_time") || 0;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const now = Date.now();
    const name = form.name.value.trim();
    const message = form.message.value.trim();
    const honey = form.anti_spam_honey.checked;

    // Anti-Spam Honeypot
    if (honey) return;

    // Rate limit
    if (now - lastSubmitTime < COOLDOWN_TIME) {
      const remaining = Math.ceil(
        (COOLDOWN_TIME - (now - lastSubmitTime)) / 1000,
      );
      showStatus(`ERR: RATE LIMIT | WAIT ${remaining}S`, "text-amber-500");
      return;
    }

    // SECURITY REGEX
    // ^ = mulai, $ = akhir, \s = spasi
    // Karakter: a-zA-Z (Teks), 0-9 (Angka), . , ! ? @
    const safePattern = /^[a-zA-Z0-9\s.,!?@]+$/;

    if (!safePattern.test(name) || !safePattern.test(message)) {
      showStatus(
        "CRITICAL ERROR: ILLEGAL CHARACTERS DETECTED. ONLY TEXT, NUMBERS, AND ( . , ! ? @ ) ALLOWED.",
        "text-red-500 animate-pulse",
      );
      return;
    }

    // Exec
    setLoading(true);
    showStatus("WAITING...", "text-sky-400");

    try {
      const response = await fetch("https://formspree.io/f/mojnwjkp", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        showStatus(
          "SUCCESS: EMAIL HAS BEEN SEND, THANKS :)",
          "text-emerald-500",
        );
        form.reset();
        lastSubmitTime = Date.now();
        localStorage.setItem("last_submit_time", lastSubmitTime);
      } else {
        throw new Error("SERVER REJECTED");
      }
    } catch (error) {
      showStatus("FATAL ERROR: SERVER FAILURE", "text-red-500");
    } finally {
      setLoading(false);
    }
  });

  // HELPERS

  function showStatus(msg, colorClass) {
    const statusText = statusBox.querySelector("p");
    if (!statusText) return;

    statusText.innerText = msg;
    statusText.className = `font-mono text-[9px] uppercase tracking-widest ${colorClass}`;
    statusBox.classList.remove("hidden");

    if (colorClass.includes("emerald")) {
      setTimeout(() => statusBox.classList.add("hidden"), 5000);
    }
  }

  function setLoading(isLoading) {
    const btnText = btnSubmit.querySelector("span");
    if (isLoading) {
      btnSubmit.disabled = true;
      btnSubmit.classList.add("opacity-50");
      if (btnText) btnText.innerText = "PROCESSING...";
    } else {
      btnSubmit.disabled = false;
      btnSubmit.classList.remove("opacity-50");
      if (btnText) btnText.innerText = "SEND";
    }
  }
};
