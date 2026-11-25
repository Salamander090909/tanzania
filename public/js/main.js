    document.querySelectorAll('.copy').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var text = document.getElementById(btn.dataset.copy).textContent;
        navigator.clipboard.writeText(text).then(function () {
          var old = btn.textContent;
          btn.textContent = 'Kopiert';
          setTimeout(function () { btn.textContent = old; }, 1500);
        });
      });
    });
