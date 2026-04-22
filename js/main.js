const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const parent = e.target.closest('section') || e.target.parentElement;
    parent.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), i * 80);
    });
    obs.unobserve(e.target);
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
