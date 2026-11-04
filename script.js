//your JS code here. If required.
const panels = document.querySelectorAll('.panel')
panels.forEach((panel)=>{
	panel.addEventListener('click',(e)=>{
		panels.forEach((c)=>{
			c.classList.remove('active')
		})
		e.target.classList.add('active')
	})
})