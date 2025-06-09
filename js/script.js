// Injecter le header
fetch('components/header.html')
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML('afterbegin', data);
  });

// Injecter le footer
fetch('components/footer.html')
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML('beforeend', data);
  });


