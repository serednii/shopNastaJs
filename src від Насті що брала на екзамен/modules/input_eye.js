import addRemoveClass from "./addRemoveClass";

function inputEye(element) {
    const parent = element.closest('.form_password');
    // const open_eye = parent.querySelector('.open_eye');
    // const close_eye = parent.querySelector('.close_eye');
    const input = parent.querySelector('input');

    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        addRemoveClass('.open_eye', 'remove', 'hidden', parent);
        addRemoveClass('.close_eye', 'add', 'hidden', parent);
        // open_eye.classList.add('hidden');
        // close_eye.classList.remove('hidden');
    } else {
        input.setAttribute('type', 'password');
        addRemoveClass('.open_eye', 'add', 'hidden', parent);
        addRemoveClass('.close_eye', 'remoce', 'hidden', parent);
        // open_eye.classList.remove('hidden');
        // close_eye.classList.add('hidden');
    }


}
export default inputEye;