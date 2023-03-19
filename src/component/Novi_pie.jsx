import React, { PureComponent } from 'react';
import { ResponsivePie } from '@nivo/pie';

const data = [
    {
        "id": "elixir",
        "label": "elixir",
        "value": 746,
        "color": "black"
    },
    {
        "id": "java",
        "label": "java",
        "value": 568,
        "color": "pink"
    },
    {
        "id": "hack",
        "label": "hack",
        "value": 527,
        "color": "skyblue"
    },
    {
        "id": "python",
        "label": "python",
        "value": 499,
        "color": "#0A6D7E"
    },
]

const MyResponsivePie = (
    <div style={{ height: 300, width: 500}}>
        <ResponsivePie
            data={data}
            colors={{ datum: 'data.color' }}
            margin={{ top: 40, bottom: 80, left: 50 }}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor="white"            
        />
    </div>
)

export default class PieGraph extends PureComponent {
    render() {
        return (
            MyResponsivePie
        )
    }
}