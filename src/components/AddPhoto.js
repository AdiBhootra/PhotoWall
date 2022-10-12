import React from 'react';
import { useHistory } from 'react-router-dom';

const AddPhoto = (props) => {

    const history=useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        const imageLink = event.target.link.value;
        const description = event.target.description.value;
        const post = {
            id: 0,
            description: description,
            imageLink: imageLink
        }
        if (imageLink && description) {
            props.onPhotoAdd(post);
        }
        history.push('./')
    }
    return (
        <div>
            <h1>PhotoWall</h1>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Link' name='link' />
                    <input type='text' placeholder='Description' name='description' />
                    <button>POST</button>
                </form>
            </div>
        </div>
    )
}

export default AddPhoto;