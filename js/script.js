// Injecter le header
fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML('afterbegin', data);
  });

// Injecter le footer
fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML('beforeend', data);
  });
