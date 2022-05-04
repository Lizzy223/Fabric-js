const initCanvas = (id) =>{
    return  new fabric.Canvas(id, {
        width: 500,
        height: 500,
        backgroundColor: 'skyblue'
    });
}

const canvas = initCanvas('canvas');
canvas.renderAll();

//upload image function

document.getElementById("uploader").onchange = function(e) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var image = new Image();
      image.src = e.target.result;
      image.onload = function() {
        var img = new fabric.Image(image);
        img.set({
          left: 100,
          top: 60
        });
        img.scaleToWidth(200);
        canvas.add(img).setActiveObject(img).renderAll();
      }
      image.onclick = function(e){
        console.log('working')
    }
    }
    reader.readAsDataURL(e.target.files[0]);
  }
  
//zoom in and zoom out function

  canvas.on('mouse:down', function(e) {
    if (e.target) {
      console.log('an object was clicked! ', e.target.type);

      canvas.setZoom(canvas.getZoom() * 1.1 )
      
    } else{
        canvas.setZoom(canvas.getZoom() / 1.1 )
    }
  });
  



