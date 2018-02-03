import Dialogs from './../../dist/a11y-dialog-component.es.js';

document.addEventListener('DOMContentLoaded', () => {

  // initial config
  Dialogs.init();

  // programmatically open dialog
  document.getElementById('js-trigger-dialog-2').addEventListener('click', () => {
    Dialogs.open('dialog-2', {
      triggerId: 'js-trigger-dialog-2',
    });
  });
});
