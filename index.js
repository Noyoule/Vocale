document.querySelector('#start').addEventListener('click', function(e){
    navigator.getUserMedia({
        video :false,
        audio: true
    },function (stream){
      let video =document.querySelector('#video')
      video.srcObject = stream
       video.play()
    }, function(){})
    console.log(MediaElementAudioSourceNode)
})