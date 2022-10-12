import React, { useState } from 'react';
import Title from './Title';
import '../styles/styleSheet.css';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route, Switch, useHistory } from 'react-router-dom';
import posts from '../data/Posts'

const Main = () => {
    const history = useHistory();
    const [post, setPost] = useState({ posts });

    const removedPhoto = (photoRemoved) => {
        setPost((post) => ({
            posts: post.posts.filter(post => post !== photoRemoved)
        }))
    }

    const addPhoto = (photoSubmitted) => {
        setPost((post) => ({
            posts: post.posts.concat([photoSubmitted])
        }))
    }

    return (
        <div>
            <Switch>
                <Route  exact path='/' render={() =>

                    <><Title title={"Photowall"} />
                        <PhotoWall posts={post.posts} onRemovePhoto={removedPhoto} /></>}

                />

                <Route path='/addPhoto'>
                    <AddPhoto onPhotoAdd={(addedPost) => {
                        console.log(addedPost)
                         addPhoto(addedPost)
                        history.push('/')
                    }} /></Route>



            </Switch>
        </div>
    )
}

export default Main;