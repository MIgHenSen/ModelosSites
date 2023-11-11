/* 'addEventListener' permite que um evento específico seja configurado,
neste caso, o evento "click" */
openMenu.addEventListener('click', () => {
	menu.style.display = "flex"
	menu.style.right = (menu.offsetWidth * -1) + 'px'
	
	/* 'setTimeout' define um tempo de espera para as ações definidas */
	setTimeout(()=> {
		menu.style.opacity = '1'
		menu.style.right = "0"
		openMenu.style.display = 'none'
	}, 10);
})

closeMenu.addEventListener('click', () => {
	menu.style.opacity = '0'
	menu.style.right = (menu.offsetWidth * -1) + 'px'
	setTimeout(()=> {
		/* 'removeAttribute' retira a propriedade especificada */
		menu.removeAttribute('style')
		openMenu.removeAttribute('style')
	}, 200);
})