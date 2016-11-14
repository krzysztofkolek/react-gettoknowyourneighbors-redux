 function initMap() {
    var map = new google.maps.Map(React.findDOMNode(this.refs.map), {
          center: new google.maps.LatLng(30,0),
          zoom: 3,
          mapTypeId: google.maps.MapTypeId.ROADMAP 
        });

        var layer = new google.maps.FusionTablesLayer({
            query: {
              select: 'geometry',
              from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
              where: "ISO_2DIGIT IN ('US', 'GB', 'DE')"
            } 
        });
        layer.setMap(map);
		
		    var layer1 = new google.maps.FusionTablesLayer({
            query: {
              select: 'geometry',
              from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
              where: "ISO_2DIGIT IN ('PL')"
            },
		        styles: [{polygonOptions: 
                        {
                          fillColor:'#0040FF',
                          fillOpacity:0.1,
                          strokeColor:'#FF0000',
                          strokeWeight:2,
                          strokeOpacity:0.6    
                      }
                    }]
        });
        layer1.setMap(map)
  }