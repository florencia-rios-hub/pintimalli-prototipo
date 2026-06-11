 function goTo(screen, el) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('screen-' + screen).classList.add('active');
    if (el) el.classList.add('active');
  }

  function openModal(id) {
    document.getElementById(id).classList.add('open');
  }

  function closeModal(id) {
    document.getElementById(id).classList.remove('open');
  }

  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', function(e) {
      if (e.target === this) this.classList.remove('open');
    });
  });

  function switchTab(el, group) {
    el.closest('.tabs').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
  }

  document.querySelectorAll('.template-card').forEach(c => {
    c.addEventListener('click', function() {
      c.closest('.template-grid').querySelectorAll('.template-card').forEach(t => t.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

