//countr utem filter

// const filterButtons = document.querySelector("#filter_btns").children;
// const items = document.querySelector(".portfolio_gallery").children;

// for(let i=0, i < 0 filterButtons.length, i++){
// 	filterButtons[i].addEventListener{"click", function(){
// 		for (let j = 0; j < filterButtons.length; j++) {
// 			filterButtons[j].classList.remove("active")
// 		}
// 		this.classList.add("active");
// 		const target = this.getAttribute("data-target")

// 		for (let k = 0; k < items.length; k++) {
// 			items[k].style.display = "none";
// 			if(target == items[k].getAttribute("data-id")){
// 				items[k].style.display = "block";
// 			}
// 			if(target == "all"){
// 				 items[k].style.display = "block";
// 			}
// 		}
// 	}
// }
let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".items");


for (var i = 0; i < list.length; i++) {
	list[i].addEventListener("click", function(){
		for(let j = 0; j<list.length; j++){
			list[j].classList.remove("active");
		}
		this.classList.add("active"); 

		let dataFilter = this.getAttribute("data-filter");

		for (var k = 0; k < itemBox.length; k++) {
			itemBox[k].classList.remove("active");
			itemBox[k].classList.add("hide");

			if(itemBox[k].getAttribute("data-item") == dataFilter || dataFilter == "all"){
				itemBox[k].classList.remove("hide"); 
				itemBox[k].classList.add("active"); 	 
			}
		}
	})
}