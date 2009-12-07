

// reads the content of a local text file
function readLocalFile(){
    var f = air.File.applicationStorageDirectory.resolvePath("pond.txt");
	
    var fs = new air.FileStream();
    fs.open(f, air.FileMode.READ);
    var content = fs.readUTFBytes(fs.bytesAvailable);
    fs.close();
    
    return content;
}

function saveLocalFile(msg){
		var f = air.File.applicationStorageDirectory.resolvePath("pond.txt");
	
    var fs = new air.FileStream();
	fs.open(f, air.FileMode.WRITE);
	fs.writeMultiByte( msg, air.File.systemCharset );
	fs.close();
    
    window.location = "timeline.html";
}


var toggleEffect = function(element) {
	if(element.visible()){
		element.style.display = 'none';
	} else {
		element.style.display = '';
	}
}			
			
			