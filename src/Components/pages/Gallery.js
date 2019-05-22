import React, {Component} from 'react';
import Copyright from "../sections/homepage/Copyright";

class Gallery extends Component{

    constructor(props){
        super(props);

        this.state = {
            popupImage: ''
        }
    }

    componentDidMount() {
        this.getGalleryImages();
    }


    getGalleryImages = () => {

        let images = [];

        let req = require.context("../../img/gallery", false, /.*\.jpg$/);
        req.keys().forEach(function(key){
            req(key);
            images.push(req(key));
        });

        return images;

    };

    handlePopupImage = (image) => {
        this.setState({
            popupImage: image
        });

        document.querySelector('.gallery-modal').classList.add('isOpen');
    };

    hideGalleryPopup(){
        document.querySelector('.gallery-modal').classList.remove('isOpen');
    }

    render() {

        const galleryImages = this.getGalleryImages();


        return(
            <>
                <div className="hero hero--contact">
                    <h1 className="hero__title">Galeria</h1>
                    <span className="hero__overlay"></span>
                </div>
                <section className="gallery">
                    <div className="container">
                        <div className="gallery__inner">
                            {galleryImages.map((image,index) => (
                                <figure className="gallery__image" key={index}>
                                    <img
                                        src={image}
                                        alt="gallery"
                                        className="gallery__img"
                                        onClick={() => this.handlePopupImage(image)}/>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="gallery-modal" onClick={() => this.hideGalleryPopup()}>
                    <img src={this.state.popupImage} alt="gallery" />
                </div>
                <Copyright/>
            </>
        )
    }
}

export default Gallery;