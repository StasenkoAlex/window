const modals = () => {
  function bindModal(targetSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(targetSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]');

    trigger.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        windows.forEach((item) => {
          item.style.display = 'none';
        });
        modal.style.display = 'block';
        document.body.style.oveflow = 'hidden';
      });
    });

    close.addEventListener('click', () => {
      windows.forEach((item) => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.oveflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((item) => {
          item.style.display = 'none';
        });
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
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  //popupTimer('.popup', 60000);
};

export default modals;
