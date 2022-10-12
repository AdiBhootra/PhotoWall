import React from 'react';
import Photo from './Photo'
import {Link} from 'react-router-dom'
import {PlusCircleOutlined} from '@ant-design/icons'

const Photowall = (props) => {
    return (
        <div>
            <Link className='addIcon' to='/addPhoto'><PlusCircleOutlined /></Link>
            <div className='photoGrid'>
                {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
            </div>
        </div>
    )
}

export default Photowall;