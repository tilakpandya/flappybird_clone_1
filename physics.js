import Matter from "matter-js";
import { getPipeSizePosPair } from "./utils/random";

import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

/*touches: detect user touches
time: predict and update app according to position
dispatch: updating score
*/
const Physics = (entities, { touches, time, dispatch }) => {
    let engine = entities.physics.engine

    touches.filter(t => t.type === 'press')
        .forEach(t => {
            Matter.Body.setVelocity(entities.Bird.body, {
                x: 0,
                y: -4
            })
        })

    Matter.Engine.update(engine, time.delta)

    Matter.Events.on(engine, 'collisionStart', (event) => {
        dispatch({ type: 'game_over' })
    })
    return entities;
}
export default Physics