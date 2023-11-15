'use strict' ;
const $ = document ;
function onlyOne(checkbox) {
      var checkboxes = $.getElementsByName('check')
      checkboxes.forEach((item) => {
          if (item !== checkbox) item.checked = false
      })
  }

let PizzaCard= $.querySelectorAll(".pizza-img")
let DrinkCard= $.querySelectorAll(".Drink-img")
let SandwCardich= $.querySelectorAll(".Sandwich-img")
let BurgerCardr =$.querySelectorAll(".Burger-img")
let borderstyle =document.querySelector(".border-style")




//even lisener

function evenlisteners() {
      
    //document.addEventListener('DOMContentLoaded', localStorageOnLoded)
      
      $.querySelector("form").addEventListener("change", function (e) {
            if (e.target.checked) {
                  if (e.target.classList.contains("pizza")) {
                        DrinkCard.forEach(function (item) {
                              item.classList.add('hidden')
                        });
                        SandwCardich.forEach(function(item) {
                              item.classList.add('hidden')
                        });
                        BurgerCardr.forEach(function(item) {
                              item.classList.add('hidden')
                        }); 
                        
                              
                        
                  }
      
                  if (e.target.classList.contains("Burger")) {
                        PizzaCard.forEach(function(item) {
                              item.classList.add('hidden')
                        });
                        DrinkCard.forEach(function (item) {
                              item.classList.add('hidden')
                        });
                        SandwCardich.forEach(function(item) {
                              item.classList.add('hidden')
                        });
                  }
      
                  if (e.target.classList.contains("Sandwich")) {
                        PizzaCard.forEach(function(item) {
                              item.classList.add('hidden')
                        });
                        DrinkCard.forEach(function (item) {
                              item.classList.add('hidden')
                        });
                        BurgerCardr.forEach(function(item) {
                              item.classList.add('hidden')
                        });
                  }
                  if (e.target.classList.contains("Drink")) {
                        SandwCardich.forEach(function(item) {
                              item.classList.add('hidden')
                        });
                        BurgerCardr.forEach(function(item) {
                              item.classList.add('hidden')
                        }); 
                        PizzaCard.forEach(function(item) {
                              item.classList.add('hidden')
                        });
                        
                  }
                  
            }else {
                  
                  DrinkCard.forEach(function (item) {
                        item.classList.remove("hidden")
                  });
                  SandwCardich.forEach(function(item) {
                        item.classList.remove("hidden")
                  });
                  BurgerCardr.forEach(function(item) {
                        item.classList.remove("hidden")
                  });
                  PizzaCard.forEach(function(item) {
                        item.classList.remove("hidden")
                  }); 
            }

            
            
            
            
      })



      $.querySelector(".form2").addEventListener("change", function(e) {
            if (e.target.checked) {
                  if (e.target.classList.contains("pizza")) {
                        DrinkCard.forEach(function (item) {
                              item.classList.add('hidden')
                        });
                        SandwCardich.forEach(function(item) {
                              item.classList.add('hidden')
                        });
                        BurgerCardr.forEach(function(item) {
                              item.classList.add('hidden')
                        }); 
                        
                              
                        
                  }
      
                  if (e.target.classList.contains("Burger")) {
                        PizzaCard.forEach(function(item) {
                              item.classList.add('hidden')
                        });
                        DrinkCard.forEach(function (item) {
                              item.classList.add('hidden')
                        });
                        SandwCardich.forEach(function(item) {
                              item.classList.add('hidden')
                        });
                  }
      
                  if (e.target.classList.contains("Sandwich")) {
                        PizzaCard.forEach(function(item) {
                              item.classList.add('hidden')
                        });
                        DrinkCard.forEach(function (item) {
                              item.classList.add('hidden')
                        });
                        BurgerCardr.forEach(function(item) {
                              item.classList.add('hidden')
                        });
                  }
                  if (e.target.classList.contains("Drink")) {
                        SandwCardich.forEach(function(item) {
                              item.classList.add('hidden')
                        });
                        BurgerCardr.forEach(function(item) {
                              item.classList.add('hidden')
                        }); 
                        PizzaCard.forEach(function(item) {
                              item.classList.add('hidden')
                        });
                        
                  }
                  
            }else {
                  
                  DrinkCard.forEach(function (item) {
                        item.classList.remove("hidden")
                  });
                  SandwCardich.forEach(function(item) {
                        item.classList.remove("hidden")
                  });
                  BurgerCardr.forEach(function(item) {
                        item.classList.remove("hidden")
                  });
                  PizzaCard.forEach(function(item) {
                        item.classList.remove("hidden")
                  }); 
            }

      })
      document.querySelector(".hoverup").addEventListener('mouseover',function (e) {
            borderstyle.classList.remove("hidden")
            document.querySelector('.image-hover').classList.add("mx-auto")
      })
      document.querySelector(".hoverup").addEventListener('mouseout',function (e) {
            borderstyle.classList.add("hidden")
            document.querySelector('.image-hover').classList.remove("mx-auto")
      })


      document.querySelector(".main").addEventListener("click",addCart )
      
      document.querySelector(".main2").addEventListener("click",addCart )
      document.querySelector(".hoverup").addEventListener("click",function (e){
            if (e.target.classList.contains("removeX")) {
                  e.target.parentElement.remove()
                  
                  
            }
      })
      // delet all shoping cart button
      document.querySelector(".button").addEventListener("click", function() {
            let removeAll =$.querySelectorAll(".removeAll")
            removeAll.forEach(function (item) {
                  item.remove()
                  
            });
            

      })


}

evenlisteners()

let shopping =$.querySelector(".addHear")

function addCart(e) {
      if (e.target.classList.contains("addCart")) {
            const elemnt =e.target.parentElement
            const listElemnt ={
                  image :elemnt.querySelector("img").src,
                  title:elemnt.querySelector("h2").textContent,
                  price :elemnt.querySelector("p").textContent,
            }
            
            addToShop(listElemnt)
            
      }
      
}

function addToShop(listElemnt){
      const row =$.createElement("ul")
      row.classList="flex flex-row items-center justify-between pl-0.5 pr-6 pt-1 removeX removeAll"
      row.innerHTML=`
      <li>
           <img src="${listElemnt.image}" class="py-1 pr-2">
      </li>
      <li class=" py-1 mr-4">${listElemnt.title}</li>
      <li class="py-1 mr-10" >${listElemnt.price}</li>
      

      `
      let remove =$.createElement("a")
       remove.textContent="X"
       remove.classList="text-red-500 removeX rounded py-1 text-xl cursor-pointer"
      
      row.appendChild(remove)
      shopping.appendChild(row)
      //addNoteToLocalStorages(row)
      

     
      


}
// function addNoteToLocalStorages (row) {
//       const notes = getNoteFromLocalStorege()
      
//       notes.push(row)
//       localStorage.setItem("notes" ,JSON.stringify(notes))
//       console.log(notes);
      
// }


// function getNoteFromLocalStorege() {
//       let notes;
//       let getformLs= localStorage.getItem("notes")
//       if (getformLs=== null) {
//             notes=[]
            
//       } else {
//             //string= array
//             notes =JSON.parse(getformLs)
            
//       }
//       return notes
      
// }

// function localStorageOnLoded() {
//       const notes =getNoteFromLocalStorege()
      

//       notes.forEach(function(note) {
//             const listElemnt ={
//                   image :elemnt.querySelector("img").src,
//                   title:elemnt.querySelector("h2").textContent,
//                   price :elemnt.querySelector("p").textContent,
//             }
//             const row =$.createElement("ul")
//             row.classList="flex flex-row items-center justify-between pl-0.5 pr-6 pt-1 removeX removeAll"
//             row.innerHTML=`
//             <li>
//                  <img src="${listElemnt.image}" class="py-1 pr-2">
//             </li>
//             <li class=" py-1 mr-4">${listElemnt.title}</li>
//             <li class="py-1 mr-10" >${listElemnt.price}</li>
            
      
//             `
//             let remove =$.createElement("a")
//              remove.textContent="X"
//              remove.classList="text-red-500 removeX rounded py-1 text-xl"
            
//             row.appendChild(remove)
//             shopping.appendChild(row)     
            
//       });
      
// }






    
  



