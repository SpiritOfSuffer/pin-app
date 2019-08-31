import React, { Component } from 'react';
import cx from 'classnames';
import './ColorPicker.css'

export class ColorPicker extends Component {

    render() {
        const colors = ['#FFFFFF', '#80D8FF', '#FFFF8D', '#FF8A80', '#CCFF90', '#CFD8DC', '#FFD180'];
        return (
            <div className='сolorPicker'>
                {
                    colors.map(color =>
                        <div
                            key={color}
                            className={cx('сolorPicker__swatch', { selected: this.props.value === color })}
                            style={{ backgroundColor: color }}
                            onClick={this.props.onChange.bind(null, color)}
                        />
                    )
                }
            </div>
        );
    }
}


export default ColorPicker;