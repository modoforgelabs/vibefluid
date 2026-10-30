// Touch ripples behind the hero, a nod to the Water Ripple wallpaper.
// Like the app, it only draws while something is moving and stops when the tab is hidden.
(function () {
  const canvas = document.getElementById("ripples");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const colors = ["180,240,210", "208,188,255", "255,201,168"];
  const rings = [];
  let width = 0, height = 0, dpr = 1, running = false, lastMove = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drop(x, y, strength) {
    if (rings.length > 40) rings.shift();
    rings.push({ x, y, t: 0, life: 2.2 + Math.random() * 0.8, max: 140 + strength * 120, c: colors[rings.length % 3] });
    if (!running) { running = true; last = performance.now(); requestAnimationFrame(frame); }
  }

  let last = 0;
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    ctx.clearRect(0, 0, width, height);
    for (let i = rings.length - 1; i >= 0; i--) {
      const r = rings[i];
      r.t += dt;
      const p = r.t / r.life;
      if (p >= 1) { rings.splice(i, 1); continue; }
      const ease = 1 - Math.pow(1 - p, 3);
      for (let k = 0; k < 3; k++) {
        const radius = r.max * ease - k * 18;
        if (radius <= 0) continue;
        ctx.beginPath();
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r.c},${(1 - p) * (0.55 - k * 0.15)})`;
        ctx.lineWidth = 2 - k * 0.5;
        ctx.stroke();
      }
    }
    if (rings.length && !document.hidden) requestAnimationFrame(frame);
    else running = false;
  }

  const hero = canvas.parentElement;
  function point(e) {
    const rect = canvas.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  }
  hero.addEventListener("pointerdown", (e) => { const [x, y] = point(e); drop(x, y, 1); });
  hero.addEventListener("pointermove", (e) => {
    const now = performance.now();
    if (now - lastMove < 140) return;
    lastMove = now;
    const [x, y] = point(e);
    drop(x, y, 0.25);
  });

  window.addEventListener("resize", resize);
  resize();

  // A few gentle drops so the hero is alive before anyone touches it.
  if (!reduceMotion) {
    let ambient = 0;
    const timer = setInterval(() => {
      if (document.hidden) return;
      drop(width * (0.15 + Math.random() * 0.5), height * (0.25 + Math.random() * 0.6), 0.5);
      if (++ambient >= 6) clearInterval(timer);
    }, 1400);
  }
})();
