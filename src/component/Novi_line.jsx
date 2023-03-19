import React, { PureComponent } from 'react';
import { ResponsiveLine } from '@nivo/line';

const data = [
    {
        "id": "us",
        "color": "skyblue",
        "data": [
            {
                "x": "plane",
                "y": 234
            },
            {
                "x": "helicopter",
                "y": 199
            },
            {
                "x": "boat",
                "y": 55
            },
            {
                "x": "train",
                "y": 151
            },
            {
                "x": "subway",
                "y": 268
            },
            {
                "x": "bus",
                "y": 56
            },
            {
                "x": "car",
                "y": 59
            }
        ]
    },
    {
        "id": "germany",
        "color": "black",
        "data": [
            {
                "x": "plane",
                "y": 224
            },
            {
                "x": "helicopter",
                "y": 36
            },
            {
                "x": "boat",
                "y": 45
            },
            {
                "x": "train",
                "y": 62
            },
            {
                "x": "subway",
                "y": 279
            },
            {
                "x": "bus",
                "y": 270
            },
            {
                "x": "car",
                "y": 181
            }
        ]       
    }
]

const MyResponsiveLine = (
    <div style={{ height: "300px", width: "500px"}}>
        <ResponsiveLine
            data={data}
            lineWidth={2}
            margin={{ top: 30, right: 100, bottom: 110, left: 100 }}
            curve={'monotoneX'}
            colors={{ datum: 'color' }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            pointSize={5}
            // pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    translateX: 0,
                    translateY: 50,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                }
            ]}
        />
    </div>
)

export default class LineGraph extends PureComponent {
    render() {
        return (
            MyResponsiveLine
        )
    }
}