import React,{useState,useMemo} from 'react'
import Map, {Marker,Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import getCenter from 'geolib/es/getCenter'
function Map_component({searchResults,hover}) {
    

      const coordinates=searchResults.map(result=>({
        longitude:result.long, 
        latitude:result.lat
      }))
      const center=getCenter(coordinates)
      const [viewState, setViewState] =useState({
        longitude: center.longitude,
        latitude: center.latitude,
          zoom: 11, 
        });
        const [showpopup, setshowpopup] = useState()
        console.log(showpopup)
      
  return (
        <Map
        mapStyle='mapbox://styles/saifxo/cl7fucul7000c15p8qyc25omu'
        mapboxAccessToken='pk.eyJ1Ijoic2FpZnhvIiwiYSI6ImNsN2VmaTBsbTExM2szbnFjM2tmdHg3aW0ifQ.kvryOj6WSiQr3w-UMnEN_w'
        {...viewState}
        style={{width: '200%', height: '100vh'}}
        onMove={evt => setViewState(evt.viewState)}
        
      
        >
          {searchResults.map(result=>(
              <div key={result.lat} className='relative'>
                <Marker longitude={result.long} latitude={result.lat} key={result.long} offsetLeft={-20} offsetRight={-10} >
                 <p   onMouseEnter={()=>setshowpopup(result.title)} className='text-2xl cursor-pointer animate-bounce text-white'>📌</p>
                  {showpopup===result.title  && hover && <p offsetLeft={50} className='text-white absolute opacity-90 transition-all ease-in duration-200 bg-red-400  max-w-[68px] text-center text-xs z-20 p-1 rounded-sm'>{showpopup}</p>}
            {/* {showpopup && (<Popup onClose={()=>setshowpopup(false)} style={{position:'relative', top:0}} latitude={result.lat} longitude={result.lat} >{result.title}</Popup>)} */}
                </Marker>
                </div>
            
          ))}

            
        </Map>
      
        
        
  )
}

export default Map_component 