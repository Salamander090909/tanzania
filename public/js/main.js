    (function () {
      var radios = document.querySelectorAll('input[name="belop"]');
      var btn = document.getElementById('vipps-btn');
      var effect = document.getElementById('amount-effect');
      if (!radios.length || !btn || !effect) return;

      function update() {
        var chosen = document.querySelector('input[name="belop"]:checked');
        if (!chosen) return;
        btn.textContent = 'Gi ' + chosen.value + ' kr med Vipps';
        effect.textContent = chosen.getAttribute('data-effect') || '';
      }

      radios.forEach(function (r) { r.addEventListener('change', update); });
      update();
    })();
