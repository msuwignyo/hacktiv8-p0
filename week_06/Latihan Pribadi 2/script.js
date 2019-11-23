/**
 * <div>Saya Adalah Keturunan Pertama</div> 
 * menjadi <div>Diakses Melalui Eldest Parent</div>
 */
let eldestParent = document.getElementById('eldest-parent');
let firstChild = eldestParent.firstElementChild;
firstChild.textContent = 'Diakses Melalui Eldest Parent';

/**
 * <div>Saya adalah Generasi Termuda, yang paling Tua</div> 
 * menjadi <div>Diakses Melalui a Child</div>
 */
let aChild = document.getElementById('a-child');
let prevSibling = aChild.previousElementSibling;
prevSibling.textContent = 'Diakses Melalui a Child';

/**
 * <div>Saya adalah Generasi Termuda, yang Paling Muda</div> 
 * menjadi <div>Diakses Melalui a Child</div>
 */
let nextSibling = aChild.nextElementSibling;
nextSibling.textContent = 'Diakses Melalui a Child';


/**
 * <div>Saya adalah Generasi yang Cukup Tua</div> 
 * menjadi <div>Diakses Melalui a Child</div>
 */
let x = aChild.parentElement
              .parentElement
              .nextElementSibling;
x.textContent = 'Diakses Melalui a Child';