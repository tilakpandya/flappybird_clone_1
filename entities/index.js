import Matter from "matter-js"
import Bird from "../components/Bird";
import Floor from "../components/Floor";

import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const image = { uri: "./images/bouncing_ball.png" };


export default restart => {
    let engine = Matter.Engine.create({ enableSleeping: false })

    let world = engine.world

    engine.gravity.y = 0.5;

    return {
        physics: { engine, world },

        Bird: Bird(world, 'brown', { x: 180, y: 350 }, { height: 40, width: 40 }),

        Floor: Floor(world, 'green', { x: windowWidth / 2, y: windowHeight }, { height: 50, width: windowWidth })
    }
}