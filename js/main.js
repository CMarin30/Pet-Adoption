$("#submit-button").click(()=>{
    const name = $("#name").val();
    const breed = $("#breed").val();
    const description = $("#description").val();
    
    const sugerObject = {name, breed, description};
    console.log(sugerObject);
    addPet(sugerObject);
})

const addPet = (sugerObject)=>{
    $.post ("https://jquerycrud-ed8dc.firebaseio.com/carlos.json",
    JSON.stringify(sugerObject),
     function(data) {
      console.log(data);
  }, "json");
   

}


function get(){
    $.ajax({
        url: "https://jquerycrud-ed8dc.firebaseio.com/carlos.json",
        type: "GET",
        success: function (respuesta){
        printData(respuesta);    
        
        
        }
        
    }) 
}


function printData(dataToPrint){
    $.each(dataToPrint,(key,value)=>{
     console.log(`key ${key}, value ${value}, name ${value.name}, breed: ${value.breed}, description: ${value.description}`) 
         $(".pintar").append(
             
             `<div class="col col-sm-6 col-md-4 mb-4">
							<div class="card">
								<img src="img/boris.jpg" class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title"><span>${value.name}</span></h5>
                                    <p>Raza:  <span>${value.breed}</p>
									<p class="card-text"><span>${value.description}</span></a>
                                    <a href="#" class="btn btn-primary">¡Adoptar!</a>
								</div>
							</div>
						</div>`
         )
    }) 
}

