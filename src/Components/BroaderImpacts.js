// // import React, { useRef, useEffect } from 'react';
// // import { Entity } from 'aframe-react';
// // import 'aframe';
// // import 'ar.js/aframe/build/aframe-ar.js';

// // const markerRef = useRef();

// // useEffect(() => {
// //     const { arToolkitContext, arToolkitSource } = window;
// //     arToolkitSource.init(() => {
// //       // Initialize the AR marker
// //       markerRef.current.addEventListener('markerFound', () => {
// //         console.log('Marker found');
// //       });
// //       markerRef.current.addEventListener('markerLost', () => {
// //         console.log('Marker lost');
// //       });
// //     });
// //   }, []);
  

// // export default function BroaderImpacts() {
// //     return (
// //         <a-scene embedded arjs='sourceType: webcam;'>
// //           <a-marker preset='hiro' ref={markerRef}>
// //             <Entity
// //               geometry={{ primitive: 'box' }}
// //               material={{ color: 'red' }}
// //               position={{ x: 0, y: 0.5, z: 0 }}
// //             />
// //           </a-marker>
// //           <a-entity camera />
// //         </a-scene>
// //     );
      
// // }


import React, { useRef, useEffect } from 'react';
import 'aframe';
import 'aframe-ar';

export default function BroaderImpacts() {

    const markerRef = useRef();

    useEffect(() => {
        markerRef.current.addEventListener('markerFound', () => {
        console.log('Marker found');
        });
        markerRef.current.addEventListener('markerLost', () => {
        console.log('Marker lost');
        });
    }, []);

    return (
        <a-scene embedded arjs='sourceType: webcam;'>
          <a-marker-camera ref={markerRef} preset='hiro' type='pattern' url='https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.0/data/patt.hiro'>
            <a-box position='0 0.5 0' color='blue' />
          </a-marker-camera>
        </a-scene>

        
      );
      
}

