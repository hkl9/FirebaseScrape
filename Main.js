function fetch() {
//Retrieving all entries 
    row=0;
	window.scroll({top: 100000, behavior: 'smooth'});
    setTimeout(function() {
	    row = document.querySelectorAll('.mat-row').length;
        if(row==rowCount){
		//if count keeps updating, mean there's more entry
		//if not, means reaches the bottom of the file
		//then start downloading
		if(flag==true){
			flag=false;
		    console.log("final",row,rowCount);
		scrape();
		}
		    return;
	    }else{
	    	console.log("pos",row,rowCount)
		    rowCount = row;
			download();
            return;
	    };
    }, "1000");
    return;
}


function download() {
	//foreach entry
	//click the entry and look up the element
	//click the link to start downloading
	document.querySelectorAll('.mat-row').forEach(item => {
    	setTimeout(function() {
		item.click()
			
		document.querySelectorAll('.c5e-external-link').forEach(item => {  
            	var opened = window.open(item.getAttribute("href"))
            	console.log(item.textContent);
            
		setTimeout(function() {
					console.log("Closing");
					opened.close()
				}, "8000");
            
		});
		}, "1000");
	})
}

rowCount = 0;//temp counter
flag = true;//to prevent misfire
fetch();