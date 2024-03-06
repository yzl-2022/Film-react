import './NotFound.css'

import { useEffect, useRef} from 'react'

function NotFound() {
  const canvasRef = useRef(null)

  useEffect(() => {
    let canvas = canvasRef.current
    let screen = canvas.getContext('2d')
    let gameSize, game;
  },[])

  return (
    <div>
      <p class="center">Space Invadors destroyed this page! Take revenge on them!
        <br/> 
        Use <span class="label label-danger">Space</span> to shoot and <span class="label label-danger">←</span>&#160;<span class="label label-danger">→</span> to move!&#160;&#160;&#160;<button class="btn btn-default btn-xs" id="restart">Restart</button>
      </p>
      <canvas id="space-invaders"/>
    </div>
  )
}

export default NotFound

/** référence: https://bashooka.com/coding/css-404-error-page-examples/ **/