(function () {
  const LAYOUT_MAPS = {
    krutidev: {
      label: "Kruti Dev (010)",
      practiceText: "कल मन घर जल फल कर सर नल वन कमल सरल नगर कदम गगन पवन बदन",
      examText: "कदम सरल नगर कमल पवन गगन जल फल मन घर कर सर नल वन बदन मटर",
      keys: {
        Digit1: { q: "1", n: "१", s: "।" },
        Digit2: { q: "2", n: "२", s: "/" },
        Digit3: { q: "3", n: "३", s: "₹" },
        Digit4: { q: "4", n: "४", s: "्" },
        Digit5: { q: "5", n: "५", s: "ः" },
        Digit6: { q: "6", n: "६", s: "‘" },
        Digit7: { q: "7", n: "७", s: "’" },
        Digit8: { q: "8", n: "८", s: "*" },
        Digit9: { q: "9", n: "९", s: "(" },
        Digit0: { q: "0", n: "०", s: ")" },
        KeyQ: { q: "Q", n: "ु", s: "ू" },
        KeyW: { q: "W", n: "ू", s: "ू" },
        KeyE: { q: "E", n: "म", s: "म्" },
        KeyR: { q: "R", n: "त", s: "त्" },
        KeyT: { q: "T", n: "ज", s: "ज्" },
        KeyY: { q: "Y", n: "ल", s: "ल्" },
        KeyU: { q: "U", n: "न", s: "न्" },
        KeyI: { q: "I", n: "प", s: "प्" },
        KeyO: { q: "O", n: "व", s: "व्" },
        KeyP: { q: "P", n: "च", s: "च्" },
        KeyA: { q: "A", n: "ं", s: "ँ" },
        KeyS: { q: "S", n: "े", s: "ै" },
        KeyD: { q: "D", n: "क", s: "क्" },
        KeyF: { q: "F", n: "ि", s: "फ्" },
        KeyG: { q: "G", n: "ह", s: "ह्" },
        KeyH: { q: "H", n: "ी", s: "ी" },
        KeyJ: { q: "J", n: "र", s: "श्र" },
        KeyK: { q: "K", n: "ा", s: "ा" },
        KeyL: { q: "L", n: "स", s: "स्" },
        Semicolon: { q: ";", n: "य", s: "य्" },
        KeyZ: { q: "Z", n: "्र", s: "्र" },
        KeyX: { q: "X", n: "ग", s: "ग्" },
        KeyC: { q: "C", n: "ब", s: "ब्" },
        KeyV: { q: "V", n: "अ", s: "अ" },
        KeyB: { q: "B", n: "इ", s: "इ" },
        KeyN: { q: "N", n: "द", s: "द्" },
        KeyM: { q: "M", n: "उ", s: "उ" },
        Comma: { q: ",", n: "ए", s: "ए" },
        Period: { q: ".", n: "ण", s: "ण्" },
        Slash: { q: "/", n: "ध", s: "ध्" },
      },
    },
    inscript: {
      label: "InScript / Mangal",
      practiceText: "क ख ग घ त थ द ध प फ ब भ का के कि की को कु कल मन घर जल",
      examText: "भारत एक विशाल देश है। परीक्षा में शुद्धता और गति दोनों आवश्यक हैं।",
      keys: {
        Digit1: { q: "1", n: "१", s: "ऍ" },
        Digit2: { q: "2", n: "२", s: "ॅ" },
        Digit3: { q: "3", n: "३", s: "्र" },
        Digit4: { q: "4", n: "४", s: "र्" },
        Digit5: { q: "5", n: "५", s: "ज्ञ" },
        Digit6: { q: "6", n: "६", s: "त्र" },
        Digit7: { q: "7", n: "७", s: "क्ष" },
        Digit8: { q: "8", n: "८", s: "श्र" },
        Digit9: { q: "9", n: "९", s: "(" },
        Digit0: { q: "0", n: "०", s: ")" },
        KeyQ: { q: "Q", n: "ौ", s: "औ" },
        KeyW: { q: "W", n: "ै", s: "ऐ" },
        KeyE: { q: "E", n: "ा", s: "आ" },
        KeyR: { q: "R", n: "ी", s: "ई" },
        KeyT: { q: "T", n: "ू", s: "ऊ" },
        KeyY: { q: "Y", n: "ब", s: "भ" },
        KeyU: { q: "U", n: "ह", s: "ङ" },
        KeyI: { q: "I", n: "ग", s: "घ" },
        KeyO: { q: "O", n: "द", s: "ध" },
        KeyP: { q: "P", n: "ज", s: "झ" },
        KeyA: { q: "A", n: "ो", s: "ओ" },
        KeyS: { q: "S", n: "े", s: "ए" },
        KeyD: { q: "D", n: "्", s: "अ" },
        KeyF: { q: "F", n: "ि", s: "इ" },
        KeyG: { q: "G", n: "ु", s: "उ" },
        KeyH: { q: "H", n: "प", s: "फ" },
        KeyJ: { q: "J", n: "र", s: "ऱ" },
        KeyK: { q: "K", n: "क", s: "ख" },
        KeyL: { q: "L", n: "त", s: "थ" },
        Semicolon: { q: ";", n: "च", s: "छ" },
        KeyZ: { q: "Z", n: "ॆ", s: "ऎ" },
        KeyX: { q: "X", n: "ं", s: "ँ" },
        KeyC: { q: "C", n: "म", s: "ण" },
        KeyV: { q: "V", n: "न", s: "न" },
        KeyB: { q: "B", n: "व", s: "व" },
        KeyN: { q: "N", n: "ल", s: "ळ" },
        KeyM: { q: "M", n: "स", s: "श" },
        Comma: { q: ",", n: ",", s: "ष" },
        Period: { q: ".", n: ".", s: "।" },
        Slash: { q: "/", n: "य", s: "य" },
      },
    },
    remington_gail: {
      label: "Remington Gail (Court / Ubuntu)",
      practiceText: "क त र ल स प न म का के कि की को कु सरल नगर कदम पवन",
      examText: "वाद नियम सरल कदम नगर कमल पवन गगन जल फल मन घर कर सर",
      keys: {
        Digit1: { q: "1", n: "१", s: "।" },
        Digit2: { q: "2", n: "२", s: "/" },
        Digit3: { q: "3", n: "३", s: "₹" },
        Digit4: { q: "4", n: "४", s: "्" },
        Digit5: { q: "5", n: "५", s: "ः" },
        Digit6: { q: "6", n: "६", s: "‘" },
        Digit7: { q: "7", n: "७", s: "’" },
        Digit8: { q: "8", n: "८", s: "*" },
        Digit9: { q: "9", n: "९", s: "(" },
        Digit0: { q: "0", n: "०", s: ")" },
        KeyQ: { q: "Q", n: "ु", s: "ू" },
        KeyW: { q: "W", n: "ू", s: "ू" },
        KeyE: { q: "E", n: "म", s: "म्" },
        KeyR: { q: "R", n: "त", s: "त्" },
        KeyT: { q: "T", n: "ज", s: "ज्" },
        KeyY: { q: "Y", n: "ल", s: "ल्" },
        KeyU: { q: "U", n: "न", s: "न्" },
        KeyI: { q: "I", n: "प", s: "प्" },
        KeyO: { q: "O", n: "व", s: "व्" },
        KeyP: { q: "P", n: "च", s: "च्" },
        KeyA: { q: "A", n: "ं", s: "ँ" },
        KeyS: { q: "S", n: "े", s: "ै" },
        KeyD: { q: "D", n: "क", s: "क्" },
        KeyF: { q: "F", n: "ि", s: "फ्" },
        KeyG: { q: "G", n: "ह", s: "ह्" },
        KeyH: { q: "H", n: "ी", s: "ी" },
        KeyJ: { q: "J", n: "र", s: "श्र" },
        KeyK: { q: "K", n: "ा", s: "ा" },
        KeyL: { q: "L", n: "स", s: "स्" },
        Semicolon: { q: ";", n: "य", s: "य्" },
        KeyZ: { q: "Z", n: "्र", s: "्र" },
        KeyX: { q: "X", n: "ग", s: "ग्" },
        KeyC: { q: "C", n: "ब", s: "ब्" },
        KeyV: { q: "V", n: "अ", s: "अ" },
        KeyB: { q: "B", n: "इ", s: "इ" },
        KeyN: { q: "N", n: "द", s: "द्" },
        KeyM: { q: "M", n: "उ", s: "उ" },
        Comma: { q: ",", n: "ए", s: "ए" },
        Period: { q: ".", n: "ण", s: "ण्" },
        Slash: { q: "/", n: "ध", s: "ध्" },
      },
    },
    vedmata: {
      label: "Vedmata",
      practiceText: "अ आ इ ई उ ऊ क ख ग घ त थ द ध प फ ब भ सरल कदम नगर",
      examText: "अमर सरल पवन गगन नगर कदम रमन नमन कल पल बल घर जल मन",
      keys: {
        KeyA: { q: "A", n: "अ", s: "आ" },
        KeyI: { q: "I", n: "इ", s: "ई" },
        KeyU: { q: "U", n: "उ", s: "ऊ" },
        KeyE: { q: "E", n: "ए", s: "ऐ" },
        KeyO: { q: "O", n: "ओ", s: "औ" },
        KeyK: { q: "K", n: "क", s: "ख" },
        KeyG: { q: "G", n: "ग", s: "घ" },
        KeyT: { q: "T", n: "त", s: "थ" },
        KeyD: { q: "D", n: "द", s: "ध" },
        KeyN: { q: "N", n: "न", s: "ण" },
        KeyP: { q: "P", n: "प", s: "फ" },
        KeyB: { q: "B", n: "ब", s: "भ" },
        KeyM: { q: "M", n: "म", s: "ं" },
        KeyY: { q: "Y", n: "य", s: "ः" },
        KeyR: { q: "R", n: "र", s: "ृ" },
        KeyL: { q: "L", n: "ल", s: "ळ" },
        KeyV: { q: "V", n: "व", s: "्" },
        KeyS: { q: "S", n: "स", s: "श" },
        KeyH: { q: "H", n: "ह", s: "ष" },
      },
    },
    typescript: {
      label: "TypeScript",
      practiceText: "क ग त द न प ब म र ल व स काम नाम दाम राम सरल नगर",
      examText: "सरल कदम नगर पवन गगन काम नाम दाम राम कल पल बल मन",
      keys: {
        KeyA: { q: "A", n: "ा", s: "आ" },
        KeyE: { q: "E", n: "े", s: "ए" },
        KeyI: { q: "I", n: "ि", s: "ई" },
        KeyO: { q: "O", n: "ो", s: "ओ" },
        KeyU: { q: "U", n: "ु", s: "ऊ" },
        KeyK: { q: "K", n: "क", s: "ख" },
        KeyG: { q: "G", n: "ग", s: "घ" },
        KeyT: { q: "T", n: "त", s: "थ" },
        KeyD: { q: "D", n: "द", s: "ध" },
        KeyN: { q: "N", n: "न", s: "ण" },
        KeyP: { q: "P", n: "प", s: "फ" },
        KeyB: { q: "B", n: "ब", s: "भ" },
        KeyM: { q: "M", n: "म", s: "ं" },
        KeyY: { q: "Y", n: "य", s: "ः" },
        KeyR: { q: "R", n: "र", s: "ृ" },
        KeyL: { q: "L", n: "ल", s: "ळ" },
        KeyV: { q: "V", n: "व", s: "्" },
        KeyS: { q: "S", n: "स", s: "श" },
        KeyH: { q: "H", n: "ह", s: "ष" },
      },
    },
  };

  const STAGGERED_ROWS = [
    ["Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Backspace"],
    ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP"],
    ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon"],
    ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight"],
    ["Space"],
  ];

  // Subtle Web Audio Mechanical Sound
  let soundOn = true;
  let audioCtx = null;

  function playClick(isOk) {
    if (!soundOn) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === "suspended") audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = isOk ? "triangle" : "sine";
      osc.frequency.setValueAtTime(isOk ? 520 : 190, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(isOk ? 240 : 130, audioCtx.currentTime + 0.045);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.055);
    } catch (_) {}
  }

  function mapKey(layoutId, code, shiftKey) {
    const cfg = LAYOUT_MAPS[layoutId];
    if (!cfg || !cfg.keys[code]) return "";
    return shiftKey ? cfg.keys[code].s : cfg.keys[code].n;
  }

  function renderKeyboard(container, layoutId, onKeyClick) {
    if (!container) return;
    const cfg = LAYOUT_MAPS[layoutId] || LAYOUT_MAPS.krutidev;
    container.innerHTML = "";

    STAGGERED_ROWS.forEach((rowCodes) => {
      const rowDiv = document.createElement("div");
      rowDiv.className = "th-kb-row";

      rowCodes.forEach((code) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.dataset.code = code;

        if (code === "Space") {
          btn.className = "th-key space";
          btn.textContent = "SPACEBAR";
          btn.addEventListener("click", () => onKeyClick && onKeyClick(" "));
        } else if (code === "Backspace") {
          btn.className = "th-key wide-sm";
          btn.textContent = "⌫ Back";
          btn.addEventListener("click", () => onKeyClick && onKeyClick("BACKSPACE"));
        } else if (code === "ShiftLeft" || code === "ShiftRight") {
          btn.className = "th-key wide-md";
          btn.textContent = "⇧ Shift";
        } else {
          const entry = cfg.keys[code];
          const qLabel = entry ? entry.q : code.replace("Key", "").replace("Digit", "");
          btn.className = "th-key";
          btn.innerHTML =
            `<span class="th-key-qwerty">${qLabel}</span>` +
            `<span class="th-key-shift">${entry && entry.s ? entry.s : ""}</span>` +
            `<span class="th-key-main">${entry && entry.n ? entry.n : "·"}</span>`;
          btn.addEventListener("click", () => {
            if (entry && entry.n && onKeyClick) onKeyClick(entry.n);
          });
        }
        rowDiv.appendChild(btn);
      });

      container.appendChild(rowDiv);
    });
  }

  function highlightNextChar(container, layoutId, expectedChar) {
    if (!container) return;
    container.querySelectorAll(".th-key").forEach((el) => {
      el.classList.remove("next-key", "next-shift");
    });
    if (!expectedChar) return;

    if (expectedChar === " ") {
      const sp = container.querySelector('[data-code="Space"]');
      if (sp) sp.classList.add("next-key");
      return;
    }

    const cfg = LAYOUT_MAPS[layoutId] || LAYOUT_MAPS.krutidev;
    for (const [code, entry] of Object.entries(cfg.keys)) {
      if (entry.n === expectedChar) {
        const el = container.querySelector(`[data-code="${code}"]`);
        if (el) el.classList.add("next-key");
        return;
      }
      if (entry.s === expectedChar) {
        const el = container.querySelector(`[data-code="${code}"]`);
        if (el) el.classList.add("next-key");
        const sh = container.querySelector('[data-code="ShiftLeft"]');
        if (sh) sh.classList.add("next-shift");
        return;
      }
    }
  }

  function flashKey(container, code, isOk) {
    if (!container || !code) return;
    const el = container.querySelector(`[data-code="${code}"]`);
    if (!el) return;
    const cls = isOk ? "flash-ok" : "flash-err";
    el.classList.add(cls, "pressed");
    setTimeout(() => el.classList.remove(cls, "pressed"), 150);
  }

  // Expose shared helpers for Learn & Arcade pages
  window.TypoHubLayouts = {
    LAYOUT_MAPS,
    mapKey,
    renderKeyboard,
    highlightNextChar,
    flashKey,
    playClick,
  };

  /* =========================================================================
     PRACTICE & EXAM ARENA CONTROLLER
     ========================================================================= */
  const canvasEl = document.getElementById("typing-canvas");
  const streamEl = document.getElementById("typing-stream");
  const layoutSelect = document.getElementById("layout-select");
  if (!canvasEl || !streamEl || !layoutSelect) return;

  const modeBtns = document.querySelectorAll(".th-seg-btn[data-mode]");
  const durationSelect = document.getElementById("duration-select");
  const backspaceSelect = document.getElementById("backspace-select");
  const vkContainer = document.getElementById("visual-layout-keyboard");
  const vkLayoutName = document.getElementById("vk-layout-name");
  const activeLayoutLabel = document.getElementById("active-layout-label");
  const wpmEl = document.getElementById("wpm-count");
  const accEl = document.getElementById("accuracy-count");
  const timerEl = document.getElementById("timer-count");
  const typedEl = document.getElementById("typed-count");
  const errEl = document.getElementById("error-count");
  const statusEl = document.getElementById("session-status");
  const progressFill = document.getElementById("typing-progress-fill");
  const restartBtn = document.getElementById("restart-session-btn");
  const saveBtn = document.getElementById("save-session-btn");
  const soundBtn = document.getElementById("sound-toggle-btn");
  const soundLabel = document.getElementById("sound-btn-label");

  let mode = "practice";
  let targetText = "";
  let typedChars = [];
  let startedAt = null;
  let remainingSeconds = 300;
  let timerInterval = null;
  let finished = false;
  let totalKeystrokes = 0;
  let errorCount = 0;

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function startTimerIfNeeded() {
    if (!startedAt) startedAt = Date.now();
    if (mode === "exam" && !timerInterval) {
      timerInterval = setInterval(() => {
        remainingSeconds -= 1;
        timerEl.textContent = formatTime(Math.max(0, remainingSeconds));
        if (remainingSeconds <= 0) {
          stopTimer();
          finished = true;
          statusEl.textContent = "Exam Completed";
          window.showTypoToast && window.showTypoToast("Exam time completed!");
          saveProgress(true);
        }
      }, 1000);
    }
  }

  function renderStream() {
    streamEl.innerHTML = "";
    const cur = typedChars.length;

    for (let i = 0; i < targetText.length; i++) {
      const sp = document.createElement("span");
      sp.className = "th-char";
      if (i < cur) {
        sp.classList.add(typedChars[i] === targetText[i] ? "correct" : "wrong");
      } else if (i === cur && !finished) {
        sp.classList.add("active");
      }
      sp.textContent = targetText[i];
      streamEl.appendChild(sp);
    }

    const pct = targetText.length ? Math.min(100, Math.round((cur / targetText.length) * 100)) : 0;
    progressFill.style.width = pct + "%";

    const elapsedMin = startedAt ? Math.max((Date.now() - startedAt) / 60000, 1 / 60) : 1 / 60;
    const correctNow = typedChars.filter((c, i) => c === targetText[i]).length;
    const netWpm = startedAt ? Math.max(0, Math.round((correctNow / 5) / elapsedMin)) : 0;
    const acc = totalKeystrokes > 0 ? Math.max(0, Math.round(((totalKeystrokes - errorCount) / totalKeystrokes) * 100)) : 100;

    wpmEl.textContent = String(netWpm);
    accEl.textContent = acc + "%";
    typedEl.textContent = String(cur);
    errEl.textContent = String(errorCount);

    highlightNextChar(vkContainer, layoutSelect.value, finished ? "" : targetText[cur] || "");
  }

  function resetSession() {
    stopTimer();
    const cfg = LAYOUT_MAPS[layoutSelect.value] || LAYOUT_MAPS.krutidev;
    targetText = mode === "exam" ? cfg.examText : cfg.practiceText;
    typedChars = [];
    startedAt = null;
    finished = false;
    totalKeystrokes = 0;
    errorCount = 0;
    remainingSeconds = Number(durationSelect.value) || 300;

    activeLayoutLabel.textContent = cfg.label;
    if (vkLayoutName) vkLayoutName.textContent = cfg.label;
    timerEl.textContent = mode === "exam" ? formatTime(remainingSeconds) : "No Limit";
    statusEl.textContent = mode === "exam" ? "Exam Ready — Type to begin timer" : "Free Practice Ready";

    renderKeyboard(vkContainer, layoutSelect.value, (ch) => {
      if (ch === "BACKSPACE") handleBackspace();
      else handleChar(ch, null);
    });
    renderStream();
    canvasEl.focus();
  }

  function handleBackspace() {
    if (finished || typedChars.length === 0) return;
    if (mode === "exam" && backspaceSelect.value === "disabled") {
      window.showTypoToast && window.showTypoToast("Backspace is locked in Strict Exam Mode.");
      playClick(false);
      return;
    }
    typedChars.pop();
    flashKey(vkContainer, "Backspace", true);
    renderStream();
  }

  function handleChar(ch, code) {
    if (finished || typedChars.length >= targetText.length) return;
    startTimerIfNeeded();
    const expected = targetText[typedChars.length];
    const isOk = ch === expected;

    totalKeystrokes += 1;
    if (!isOk) errorCount += 1;
    typedChars.push(ch);

    playClick(isOk);
    flashKey(vkContainer, code, isOk);

    if (typedChars.length >= targetText.length) {
      stopTimer();
      finished = true;
      statusEl.textContent = "Passage Completed!";
      window.showTypoToast && window.showTypoToast("Passage completed! Great work.");
      saveProgress(true);
    } else {
      statusEl.textContent = mode === "exam" ? "Exam in progress..." : "Practicing...";
    }
    renderStream();
  }

  async function saveProgress(completed) {
    const elapsedMin = startedAt ? Math.max((Date.now() - startedAt) / 60000, 1 / 60) : 1 / 60;
    const correctNow = typedChars.filter((c, i) => c === targetText[i]).length;
    const wpm = startedAt ? Math.round((correctNow / 5) / elapsedMin) : 0;
    const acc = totalKeystrokes > 0 ? Math.max(0, Math.round(((totalKeystrokes - errorCount) / totalKeystrokes) * 100)) : 100;

    try {
      const res = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: mode,
          layout_id: layoutSelect.value,
          level_or_set: mode === "exam" ? `exam_${durationSelect.value}s` : "free_practice",
          wpm: wpm,
          accuracy: acc,
          typed_chars: typedChars.length,
          completed: Boolean(completed),
        }),
      });
      const data = await res.json();
      if (data.saved) {
        window.showTypoToast && window.showTypoToast(`Progress saved for ${data.user}`);
      } else {
        window.showTypoToast && window.showTypoToast("Guest Mode — Sign in anytime to sync history.");
      }
    } catch (_) {}
  }

  canvasEl.addEventListener("focus", () => canvasEl.classList.add("focused"));
  canvasEl.addEventListener("blur", () => canvasEl.classList.remove("focused"));

  window.addEventListener("keydown", function (e) {
    if (e.ctrlKey || e.altKey || e.metaKey || e.key === "Shift") return;
    if (document.activeElement && document.activeElement.tagName === "SELECT") return;

    if (e.key === "Backspace") {
      e.preventDefault();
      handleBackspace();
      return;
    }
    if (e.code === "Space") {
      e.preventDefault();
      handleChar(" ", "Space");
      return;
    }
    const mapped = mapKey(layoutSelect.value, e.code, e.shiftKey);
    if (mapped) {
      e.preventDefault();
      handleChar(mapped, e.code);
    }
  });

  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      mode = btn.dataset.mode;
      modeBtns.forEach((b) => b.classList.toggle("active", b === btn));
      resetSession();
    });
  });

  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      soundOn = !soundOn;
      soundLabel.textContent = soundOn ? "Sound On" : "Muted";
      if (soundOn) playClick(true);
    });
  }

  layoutSelect.addEventListener("change", resetSession);
  durationSelect.addEventListener("change", resetSession);
  restartBtn.addEventListener("click", resetSession);
  saveBtn.addEventListener("click", () => saveProgress(false));

  resetSession();
})();