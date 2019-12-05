// Write your Pizza Builder JavaScript in this file.
let btnPepperonni = document.querySelector('.btn-pepperonni')
let btnMushrooms = document.querySelector('.btn-mushrooms')
let btnGreenPeppers = document.querySelector('.btn-green-peppers')
let btnSauce = document.querySelector('.btn-sauce')
let btnCrust = document.querySelector('.btn-crust')
let liTag = document.querySelectorAll('.price ul li')
let lblStrong = document.querySelector('.price strong')
let total = 21

btnPepperonni.onclick = function() {
    let pepperonni = document.querySelectorAll('.pep')
    if (btnPepperonni.classList.contains('active')) {
        btnPepperonni.classList.remove('active')
        pepperonni.forEach(item => { item.style.display = 'none' })
        liTag[0].style.display = 'none'
        total -= 1

    } else {
        btnPepperonni.classList.add('active')
        pepperonni.forEach(item => { item.style.display = 'block' })
        liTag[0].style.display = 'block'
        total += 1
    }
    lblStrong.innerHTML = `$${total}`
    console.log(total)
}

btnMushrooms.onclick = function() {
    let mushrooms = document.querySelectorAll('.mushroom')
    if (btnMushrooms.classList.contains('active')) {
        btnMushrooms.classList.remove('active')
        mushrooms.forEach(item => { item.style.display = 'none' })
        liTag[1].style.display = 'none'
        total -= 1
    } else {
        btnMushrooms.classList.add('active')
        mushrooms.forEach(item => { item.style.display = 'block' })
        liTag[1].style.display = 'block'
        total += 1
    }
    lblStrong.innerHTML = `$${total}`
}

btnGreenPeppers.onclick = function() {
    let greenPeppers = document.querySelectorAll('.green-pepper')
    if (btnGreenPeppers.classList.contains('active')) {
        btnGreenPeppers.classList.remove('active')
        greenPeppers.forEach(item => { item.style.display = 'none' })
        liTag[2].style.display = 'none'
        total -= 1
    } else {
        btnGreenPeppers.classList.add('active')
        greenPeppers.forEach(item => { item.style.display = 'block' })
        liTag[2].style.display = 'block'
        total += 1
    }
    lblStrong.innerHTML = `$${total}`
}

btnSauce.onclick = function() {
    let sauce = document.querySelector('.sauce')
    if (btnSauce.classList.contains('active')) {
        btnSauce.classList.remove('active')
        sauce.classList.remove('sauce-white')
        liTag[3].style.display = 'none'
        total -= 3
    } else {
        btnSauce.classList.add('active')
        sauce.classList.add('sauce-white')
        liTag[3].style.display = 'block'
        total += 3
    }
    lblStrong.innerHTML = `$${total}`
}

btnCrust.onclick = function() {
    let crust = document.querySelector('.crust')
    if (btnCrust.classList.contains('active')) {
        btnCrust.classList.remove('active')
        crust.classList.remove('crust-gluten-free')
        liTag[4].style.display = 'none'
        total -= 5
    } else {
        btnCrust.classList.add('active')
        crust.classList.add('crust-gluten-free')
        liTag[4].style.display = 'block'
        total += 5
    }
    lblStrong.innerHTML = `$${total}`
}
btnSauce.click()
btnCrust.click()