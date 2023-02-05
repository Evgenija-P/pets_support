export const handleBackdropClick = (e, close) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  close();
};

export const handleEscClick = closeModal => {
  const handleCloseOnEsc = e => {
    if (e.code !== 'Escape') {
      return;
    }
    closeModal();
  };

  window.addEventListener('keydown', handleCloseOnEsc);
  return () => {
    window.removeEventListener('keydown', handleCloseOnEsc);
  };
};
