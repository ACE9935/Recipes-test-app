
export const animation={
    hidden:{
      y:"-100vh",
      zIndex:-100,
      scale:0.2,
      opacity:0,
      transition:{
        duration:0.6,
        type:"tween",
      }
    },
    visible:{
     y:0,
     opacity:1,
     scale:1,
     transition:{
      duration:0.6,
      type:"tween",
      when:"beforeChildren"
    }
    }
  }

  export const animationChild={
    hidden:{
        x:-300,
        opacity:0
      },
      visible:{
       x:0,
       opacity:[0,0,1],
       transition:{
        duration:1,
        type:"tween",
      }
      }
  }

  