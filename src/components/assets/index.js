import React from 'react'
import { getPercentageSizeWidth } from '../../../utils'
import Svg, { Path } from "react-native-svg"



export const Logo = ({ size, heightLog }) => ( 
    <Svg
      id="prefix__layer"
//       width={size ? getPercentageSizeWidth(size) : '174.664'}
// height={heightLog ? getPercentageSizeWidth(heightLog) : '174.664'}
width={24} height={24}
      x={0}
      y={0}
      viewBox="-153 -46 652 652"
      xmlSpace="preserve"
    >
      <Path
        className="prefix__st0"
        d="M132.6 190.6v33.1h-263.7v102h263.7v33.1l115-84.1z"
      />
      <Path
        className="prefix__st0"
        d="M276.4 289.8h11.2c2.2 0 4-.4 5.4-1.3 1.4-.9 2.1-2.4 2.1-4.6 0-2.3-.7-4-2.2-4.9-1.4-.9-3.2-1.4-5.3-1.4h-11.2v12.2zm0-21.2h10.8c.6 0 1.2-.1 1.9-.3.7-.2 1.3-.5 1.8-.9s1-.9 1.4-1.6c.4-.7.5-1.4.5-2.4 0-2-.6-3.3-1.8-4.1-1.2-.7-2.5-1.1-3.9-1.1h-10.8v10.4zm-13.9-21.1h25c2.3 0 4.6.1 6.9.4 2.3.4 4.4 1 6.2 2 1.8 1 3.3 2.4 4.5 4.1 1.1 1.8 1.7 4 1.7 6.8 0 2.4-.6 4.5-1.9 6.4-1.3 1.9-3 3.3-5.1 4.4 2.8.9 5.1 2.4 6.7 4.7 1.7 2.3 2.5 4.9 2.5 8 0 3.2-.5 5.8-1.6 8-1.1 2.1-2.6 3.8-4.5 5.1-1.9 1.3-4.1 2.2-6.6 2.7s-5.2.8-8.1.8h-25.6v-53.4zm66.3 33.6h12.1l-5.9-18.7h-.1l-6.1 18.7zm-.9-33.6H342l20 53.4h-14.5l-3.3-9.6h-18.6l-3.4 9.6h-14.3l20-53.4zM364.5 247.5h14.3l18.5 33h.2v-33h13V301h-14.3l-18.5-33.3h-.1V301h-13.1zM417.7 247.5h13.9V268l17.6-20.5h17.2l-19.7 21.1 22.2 32.4h-17.3l-14.3-22.5-5.7 6V301h-13.9z"
        transform="translate(0 .469)"
      />
      <Path
        className="prefix__st1"
        d="M-24 300.9h-9l-.8-5.8c-.9 1.3-1.9 2.4-3.2 3.3-1.2.9-2.5 1.6-3.8 2.1-1.3.6-2.7 1-4 1.2-1.4.3-2.6.4-3.9.4-4 0-7.7-.7-11-2.2-3.3-1.4-6.1-3.4-8.4-5.9-2.3-2.5-4.1-5.5-5.3-8.8-1.3-3.4-1.9-7-1.9-10.9 0-3.9.6-7.5 1.9-10.9 1.2-3.4 3-6.3 5.3-8.8 2.3-2.5 5.1-4.5 8.4-5.9 3.3-1.4 6.9-2.2 11-2.2 2.7 0 5.5.4 8.3 1.1 2.8.8 5.3 1.9 7.5 3.5s4.1 3.6 5.6 6 2.4 5.3 2.7 8.7h-13.9c-.3-2.3-1.4-4.1-3.3-5.4-2-1.3-4.4-1.9-7.2-1.9-2.2 0-4.1.5-5.7 1.3-1.6.9-2.9 2.1-3.9 3.6s-1.7 3.2-2.2 5.1c-.5 1.9-.7 3.8-.7 5.8s.2 3.9.7 5.8c.4 1.9 1.2 3.6 2.2 5.1 1 1.5 2.3 2.7 3.9 3.6 1.6.9 3.5 1.3 5.7 1.3 3.4 0 6.2-.7 8.4-2.2 2.2-1.5 3.5-3.4 3.9-5.9h-9.7v-10.3H-24v29.2zM-16.2 247.5h42.6v11.2H-2.3v9.3h26.2v10.8H-2.3V289h29.4v11.9h-43.3zM78.4 259.5H62.5v41.4H48.6v-41.4H32.7v-12h45.7zM100.6 300.9h13.9v-53.4h-13.9zM124 247.5h14.3l18.5 33h.2v-33h13.1v53.4h-14.3l-18.6-33.2h-.1v33.2H124z"
        transform="translate(0 .469)"
      />
    </Svg>
)
