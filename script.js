function showtables(){
	var showtabs = document.querySelectorAll(".show-table");

	showtabs.forEach(elt_showtabs =>{
		elt_showtabs.addEventListener("click",()=>{
			document.querySelectorAll(".section-home-content-table").forEach(elt =>{
				if(!elt.classList.contains(elt_showtabs.id))
					elt.classList.remove('dropdown__content_active');
			}
		)
		let dropdown_content = document.querySelector("."+elt_showtabs.id);
			dropdown_content.classList.toggle('dropdown__content_active');
			// dropdown_content.classList.remove('dropdown__content');
		})
	})
}

function showsections(){
	var sidebar_items = document.querySelectorAll(".sidebar .sidebar-list ul a");
	sidebar_items.forEach(item =>{
		item.addEventListener("click", ()=>{
			document.querySelectorAll("section").forEach(elt =>{
					elt.classList.remove("section-active");
			})
		let section = document.querySelector("#"+item.href.split("#")[1]);
		section.classList.toggle("section-active")
		})
	})
}
function init(){
	document.querySelector("#section-home").classList.add("section-active");
}
function installSDK(){
	const firebaseConfig = {
	  apiKey: "AIzaSyCmQ7sEbUkI-AHcA23DRfbODEgj49sxyxs",
	  authDomain: "olory-clinique.firebaseapp.com",
	  projectId: "olory-clinique",
	  storageBucket: "olory-clinique.appspot.com",
	  messagingSenderId: "81541426788",
	  appId: "1:81541426788:web:33e13ec4d776d6dc473971",
	  measurementId: "G-596GKP9D72"
	};

	const app = firebase.initializeApp(firebaseConfig);
	console.log(app)
}

init();
showsections();
showtables();
