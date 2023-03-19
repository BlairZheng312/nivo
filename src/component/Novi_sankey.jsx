import React, { PureComponent } from 'react';
import { ResponsiveSankey } from '@nivo/sankey'

const data = 
    {
        "nodes": [
            {
                "id": "John",
                "nodeColor": "#D04B11"
            },
            {
                "id": "Raoul",
                "nodeColor": "black"
            },
            {
                "id": "Jane",
                "nodeColor": "skyblue"
            },
            {
                "id": "Marcel",
                "nodeColor": "#A0D8A3"
            },
            {
                "id": "Ibrahim",
                "nodeColor": "#0A6D7E"
            },
            {
                "id": "Junko",
                "nodeColor": "pink"
            }
        ],
        "links": [
            {
                "source": "Jane",
                "target": "Ibrahim",
                "value": 137
            },
            {
                "source": "Jane",
                "target": "Raoul",
                "value": 197
            },
            {
                "source": "Jane",
                "target": "Junko",
                "value": 46
            },
            {
                "source": "Junko",
                "target": "Raoul",
                "value": 42
            },
            {
                "source": "Junko",
                "target": "John",
                "value": 174
            },
            {
                "source": "Junko",
                "target": "Marcel",
                "value": 6
            },
            {
                "source": "Junko",
                "target": "Ibrahim",
                "value": 126
            },
            {
                "source": "Marcel",
                "target": "Raoul",
                "value": 90
            },
            {
                "source": "Marcel",
                "target": "Ibrahim",
                "value": 153
            },
            {
                "source": "John",
                "target": "Ibrahim",
                "value": 56
            },
            {
                "source": "John",
                "target": "Raoul",
                "value": 52
            }
        ]
    }


const MyResponsiveSankey = (
    <div style={{ height: 300, width: 500 }}>
        <ResponsiveSankey
            data={data}
            margin={{ top: 40, right: 80, bottom: 30, left: 80}}
            align="justify"
            colors={{ datum: 'nodeColor' }}
            nodeOpacity={1}
            nodeHoverOthersOpacity={0.35}
            nodeThickness={18}
            nodeSpacing={24}
            nodeBorderWidth={0}
            
            nodeBorderRadius={3}
            linkOpacity={0.5}
            linkHoverOthersOpacity={0.1}
            linkContract={3}
            enableLinkGradient={true}
            labelPosition="outside"
            labelOrientation="horizontal"
            labelPadding={16}
        />
    </div>
)

export default class SankeyGraph extends PureComponent {
    render() {
        return (
            MyResponsiveSankey
        )
    }
}