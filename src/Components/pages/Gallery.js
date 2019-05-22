import React, {Component} from 'react';
import Copyright from "../sections/homepage/Copyright";

class Gallery extends Component{

    componentDidMount() {
        this.getGalleryImages();
    }

    getGalleryImages = () => {

        let req = require.context("../../img/gallery", false, /.*\.jpg$/);
        req.keys().forEach(function(key){
            req(key);
            console.log(req(key));
            document.querySelector('.gallery__inner').innerHTML +=
                `
                <figure class="gallery__image">
                    <img src=${req(key)} class="gallery__img" alt />
                </figure>
                `
            ;
        });
    };

    render() {

        return(
            <>
                <div className="hero hero--contact">
                    <h1 className="hero__title">Galeria</h1>
                    <span className="hero__overlay"></span>
                </div>
                <section className="gallery">
                    <div className="container">
                        <div className="gallery__inner">

                        </div>
                    </div>
                </section>
                <Copyright/>
            </>
        )
    }
}

export default Gallery;