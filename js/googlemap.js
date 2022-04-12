function initialize(){
  var myCenter=new google.maps.LatLng(37.334778882064384, -122.0088956630036);

  var mapobj = document.getElementById('googleMap'); 
  var mapOptions = {
    zoom:10,
    center:myCenter,
    mapTypeId: google.maps.MapTypeId.ROADMAP

  };
  var myMap =new google.maps.Map(mapobj,mapOptions);

  var marker = new google.maps.Marker({
    title:"Apple ",
    position:myCenter,
    map:myMap,
    icon:'./image/apple.png'

  });
  var alertBody = "Apple Inc. is an American multinational technology company that specializes in consumer electronics, software and online services." ;
  var infowindow = new google.maps.InfoWindow({
    content:alertBody,
  });
  marker.addListener("click",() => {
    marker.getAnimation() !==null?marker.setAnimation(null):marker.setAnimation(google.maps.Animation.BOUNCE);
    infowindow.open({
      map:myMap,
      anchor:marker
    });
  });
  var PathData = [
    [37.33601170789854, -122.01143327169987],
    [37.33666428191392, -122.00739922948098],
    [37.333853481559245, -122.00652482937237],
    [37.33265917946402, -122.0096147340507],
    [37.33421579648333, -122.0116690951917], 
    ];
  var path = [];
  var bounds = new google.maps.LatLngBounds();
  var center={lat:37.334778882064384, lng:-122.0088956630036};
  console.log(center);
  bounds.extend(center);
  for (var i in PathData)
  {
      var p = PathData[i];
      var latlng = new google.maps.LatLng(p[0], p[1]);
      console.log(latlng);
      path.push(latlng);
      bounds.extend(latlng);
  }
  var poly = new google.maps.Polygon({
      paths: path,
      strokeColor: '#A0A0A0',
      fillColor: '#C0C0C0',
      strokeOpacity: 0.8,
      strokeWeight: 2,

  });
  poly.setMap(myMap);

  myMap.fitBounds(bounds);

}

google.maps.event.addDomListener(window, 'load', initialize);