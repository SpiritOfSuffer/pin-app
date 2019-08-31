import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { Pin } from '../Pin/Pin';
import './PinList.css';

export class PinList extends Component {

    render() {
		const MasonryOptions = {
			itemSelector: '.pin',
			columnWidth: 250,
			gutter: 10,
			isFitWidth: true
        };

		return(
			<Masonry
				className='pinList'
				options={MasonryOptions}
            >
			{ 
                this.props.pins.map((pin, id) =>
					<Pin
						key={id}
						title={pin.title}
						onDelete={this.props.onDelete.bind(null, pin)}
						color={pin.color}
					>
						{pin.text}
					</Pin>
				)
			}
			</Masonry>
		);
	}
}