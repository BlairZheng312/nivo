import React, { PureComponent } from 'react';
import { ResponsiveLine } from '@nivo/line';
import {ave} from './ave'

const data = [
    {       id: "Ave tran",
            data: [{
                x: "plane",
                y: 224
            },
            {
                x: "helicopter",
                y: 36
            },
            {
                x: "boat",
                y: 45
            },
            {
                x: "train",
                y: 62
            },
            {
                x: "subway",
                y: 279
            },
            {
                x: "bus",
                y: 270
            }
        ]
    }
]





const MyResponsiveLine = (
    <div style={{ height: "300px", width: "500px" }}>
        <p
            style={{ color: "#444", fontSize: 60, fontFamily: "Monaco", fontWeight: "bold", position: "absolute", marginLeft:60, marginTop: 80, }}>
            {ave(data[0].data)}
        </p>
        <br />
        <p
            style={{ color: "#444", fontSize: 48, fontFamily: "Monaco", fontWeight: "bold", position: "absolute", marginLeft:60, marginTop: 160, }}>
            Transports
        </p>
        <ResponsiveLine
            data={data}
            lineWidth={4}
            margin={{ top: 50, right: 70, left: 220, bottom: 145 }}
            curve={'linear'}
            colors={"#555"}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
            }}
            enablePoints={false}
            enableGridX={false}
            enableGridY={false}
            axisBottom={null}
            axisLeft={null}
        />
    </div>
)

export default class SparkGraph extends PureComponent {
    render() {
        return (
            MyResponsiveLine
        )
    }
}