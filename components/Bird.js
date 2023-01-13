import Matter from 'matter-js'
import React from 'react'
import { View, Text } from 'react-native'
import background from "./images/bouncing_ball.png";


const Bird = props => {

    const xBody = props.body.position.x - 44 /2
    const yBody = props.body.position.y - 44 /2

    const color = props.color;

    return(
        <View style={{
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: color,
            //backgroundImage: `url(${background})`,
            position: 'absolute',
            left: xBody,
            top: yBody,
            borderRadius: 44/2,
            width: 44,
            height: 44,
            backgroundSize: 'auto'
        }}></View>
    )
}

export default (world, color, pos, size) => {
    const initialBird = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        size.borderRadius,
        {label: 'Bird'}
    )
    Matter.World.add(world, initialBird)
 
    return {
        body: initialBird,
        color,
        pos,
        renderer: <Bird/>
    }
}
