const modals = () => {
  function bindModal(targetSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(targetSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    trigger.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        modal.style.display = 'block';
        document.body.style.oveflow = 'hidden';
      });
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.oveflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.oveflow = '';
      }
    });
  }

  function popupTimer(modalSelector, time) {
    const modal = document.querySelector(modalSelector);
    setTimeout(() => {
      modal.style.display = 'block';
      document.body.style.oveflow = 'hidden';
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  //popupTimer('.popup', 60000);
};

export default modals;
