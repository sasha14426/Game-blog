

    function showActiveLink(menu){
        try {
          let url = document.location.href
          let links = document.getElementById(menu).querySelectorAll('a')
          for(const link of links){
            console.log(link.href)
            if(link.href === url){
              link.classList.add('active')
            }
          }
        } catch (error) {
          console.log('Error')
        }
    }
    showActiveLink('menu')