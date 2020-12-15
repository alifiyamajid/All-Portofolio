import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import '../App.css'
import Carousel from 'react-bootstrap/Carousel'

function landingComponent() {
    return (
        <div style={{ textAlign: "center" }}>
            <Carousel style={{ background: "linear-gradient(#b0b0b0 100%,  #b0b0b0 50%, #fff 30% #fff 20%)" }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 xs"
                        src="https://cdn.curiousdoodle.com/wp-content/uploads/2019/04/food-photography00019.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>First slide label</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 xs"
                        src="https://cdn.curiousdoodle.com/wp-content/uploads/2018/10/lena_danilushkina_food00.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Second slide label</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 xs"
                        src="https://cdn.sortra.com/wp-content/uploads/2019/07/twiggstudios0.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Third slide label</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <h1>Hello World</h1>
            <Button
                variant="contained"
                color="secondary"
                style={{
                    fontSize: 16,
                    fontWeight: "bold"
                }}
            > Testing
            </Button>

        </div >


    )
}

export default landingComponent;

